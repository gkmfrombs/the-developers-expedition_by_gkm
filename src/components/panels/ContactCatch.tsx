import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ContactPanel from "./ContactPanel";
import { CONTACT_CHANNELS } from "../../data/contact";

const SCENES = [
  "/assets/fisherman/scene-1.png",
  "/assets/fisherman/scene-2.png",
  "/assets/fisherman/scene-3.png",
  "/assets/fisherman/scene-4.png",
  "/assets/fisherman/scene-5.png",
];

const START_DELAY = 1500;
const SCENE_HOLD = 1600;
const SCROLL_DURATION = 1150;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * ContactCatch — the fisherman story, played as the contact reveal.
 *
 * Opening the Contact section plays the whole sequence on its own:
 * the fish splashes, then the frames glide forward one by one until
 * the contact card arrives swinging on the line. Scroll snapping is
 * suspended while it auto-plays so the eased scroll stays smooth,
 * then handed back for manual scrolling.
 */
function ContactCatch() {
  const [open, setOpen] = useState(true);
  const [cast, setCast] = useState(false);

  const storyRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLElement | null)[]>([]);
  const timers = useRef<number[]>([]);
  const frame = useRef<number | null>(null);

  const stopMotion = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  }, []);

  const glideTo = useCallback((target: number) => {
    const story = storyRef.current;
    if (!story) return;

    const from = story.scrollTop;
    const delta = target - from;
    if (Math.abs(delta) < 1) return;

    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / SCROLL_DURATION);
      story.scrollTop = from + delta * easeInOutCubic(t);
      frame.current = t < 1 ? requestAnimationFrame(step) : null;
    };
    frame.current = requestAnimationFrame(step);
  }, []);

  const play = useCallback(() => {
    const story = storyRef.current;
    if (!story) return;

    stopMotion();
    setCast(true);

    if (prefersReducedMotion()) {
      story.scrollTop = story.scrollHeight - story.clientHeight;
      return;
    }

    // Mandatory snapping fights a scripted scroll, so pause it.
    story.classList.add("is-autoplaying");

    const targets = sceneRefs.current.slice(1);
    targets.forEach((scene, i) => {
      const id = window.setTimeout(() => {
        if (!scene || !storyRef.current) return;
        const top =
          scene.getBoundingClientRect().top -
          storyRef.current.getBoundingClientRect().top +
          storyRef.current.scrollTop;
        glideTo(top);

        if (i === targets.length - 1) {
          const done = window.setTimeout(() => {
            storyRef.current?.classList.remove("is-autoplaying");
          }, SCROLL_DURATION + 120);
          timers.current.push(done);
        }
      }, i * SCENE_HOLD);
      timers.current.push(id);
    });
  }, [glideTo, stopMotion]);

  // One click on Contact is enough — the story starts itself.
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(play, START_DELAY);
    timers.current.push(id);
    return stopMotion;
  }, [open, play, stopMotion]);

  useEffect(() => {
    if (!open) return;
    const root = storyRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { root, threshold: 0.4 }
    );

    sceneRefs.current.forEach((scene) => scene && observer.observe(scene));
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeStory = () => {
    stopMotion();
    setOpen(false);
  };

  const replay = () => {
    stopMotion();
    setCast(false);
    setOpen(true);
  };

  if (!open) {
    return (
      <div className="fisherman-fallback">
        <ContactPanel />
        <button type="button" className="fisherman-replay" onClick={replay}>
          ↺ Replay
        </button>
      </div>
    );
  }

  return createPortal(
    <div
      className="fisherman-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <button type="button" className="fisherman-back" onClick={closeStory}>
        <span aria-hidden="true">←</span> Back to portfolio
      </button>

      <div className="story" ref={storyRef}>
        {SCENES.map((src, index) => (
          <section
            key={src}
            className="scene"
            ref={(el) => {
              sceneRefs.current[index] = el;
            }}
          >
            <div className="art-wrap">
              <img className="art" alt="" src={src} />

              {index === 0 && (
                <>
                  <button
                    type="button"
                    className={`fish-hit${cast ? " clicked" : ""}`}
                    onClick={play}
                    aria-label="Start the story"
                  >
                    <i className="fish-eye" />
                    <i className="fish-fin" />
                    <i className="fish-ring" />
                    <i className="fish-ring r2" />
                    <i className="fish-ring r3" />
                  </button>
                  <div className={`splash${cast ? " active" : ""}`} />
                </>
              )}

              {index === SCENES.length - 1 && (
                <div className="info-card">
                  <div className="card-string" />
                  <div className="card-hook" />

                  <div className="card-body">
                    <img
                      className="avatar"
                      src="/assets/profile.jpeg"
                      alt="Guddu Mishra"
                    />
                    <span className="info-name">GUDDU MISHRA</span>
                    <span className="info-role">Software Developer</span>

                    <div className="info-links">
                      {CONTACT_CHANNELS.map((channel) => (
                        <a
                          key={channel.id}
                          href={channel.href}
                          className="info-link"
                          {...(channel.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          <span className="info-link-icon" aria-hidden="true">
                            {channel.icon}
                          </span>
                          <span className="info-link-text">
                            <span className="info-link-label">
                              {channel.label}
                            </span>
                            <span className="info-link-value">
                              {channel.value}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>,
    document.body
  );
}

export default ContactCatch;
