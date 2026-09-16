import { motion } from "framer-motion";

function Environment() {
  return (
    <>
      {/* SKY */}
      <div className="environment-sky">
        <div className="sun-glow" />

        <motion.div
          className="cloud cloud-one"
          animate={{ x: ["-10vw", "110vw"] }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="cloud cloud-two"
          animate={{ x: ["100vw", "-30vw"] }}
          transition={{
            duration: 95,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* DISTANT MOUNTAINS */}
      <div className="mountain-layer mountain-back">
        <div className="peak peak-one" />
        <div className="peak peak-two" />
        <div className="peak peak-three" />
        <div className="peak peak-four" />
      </div>

      {/* CLOSER MOUNTAINS */}
      <div className="mountain-layer mountain-front">
        <div className="peak peak-five" />
        <div className="peak peak-six" />
        <div className="peak peak-seven" />
      </div>

      {/* FOREST */}
      <div className="forest-layer forest-far">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="pine"
            style={{
              left: `${index * 7 - 2}%`,
              transform: `scale(${0.65 + (index % 4) * 0.12})`,
            }}
          />
        ))}
      </div>

      <div className="forest-layer forest-near">
        {Array.from({ length: 13 }).map((_, index) => (
          <span
            key={index}
            className="pine pine-near"
            style={{
              left: `${index * 8 - 3}%`,
              transform: `scale(${0.8 + (index % 3) * 0.15})`,
            }}
          />
        ))}
      </div>

      {/* GROUND */}
      <div className="ground">
        <div className="ground-path" />
        <div className="grass grass-one" />
        <div className="grass grass-two" />
        <div className="grass grass-three" />
      </div>

      {/* WATER */}
      <div className="lake">
        <div className="lake-light" />

        <motion.div
          className="water-line water-one"
          animate={{ scaleX: [0.7, 1.1, 0.7], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="water-line water-two"
          animate={{ scaleX: [1, 0.75, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* FOG */}
      <motion.div
        className="fog fog-one"
        animate={{
          x: ["-5%", "8%", "-5%"],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fog fog-two"
        animate={{
          x: ["5%", "-8%", "5%"],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FIRELIGHT */}
      <motion.div
        className="camp-glow"
        animate={{
          scale: [0.95, 1.08, 0.95],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FIREFLIES */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="firefly"
          style={{
            left: `${15 + ((index * 17) % 70)}%`,
            top: `${30 + ((index * 23) % 45)}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.9, 0.15],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

export default Environment;