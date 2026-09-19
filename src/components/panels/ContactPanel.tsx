import { CONTACT_CHANNELS } from "../../data/contact";

/**
 * ContactPanel — the plain, always-readable contact channels.
 *
 * Shown as the fallback view once the fisherman story is closed,
 * so the details stay reachable without replaying the animation.
 */
function ContactPanel() {
  return (
    <>
      <p className="contact-tagline">
        Have a project, opportunity, or idea? Send a message
        and let's build something useful together.
      </p>

      <div className="contact-channels">
        {CONTACT_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            className="contact-channel"
            {...(channel.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <span className="channel-icon">{channel.icon}</span>
            <div>
              <span className="channel-label">{channel.label}</span>
              <span className="channel-value">{channel.value}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default ContactPanel;
