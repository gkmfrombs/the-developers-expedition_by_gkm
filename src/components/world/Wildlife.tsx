import { motion } from "framer-motion";

function Wildlife() {
  return (
    <>
      {/* DISTANT BIRDS */}

      <motion.div
        className="bird bird-one"
        animate={{
          x: ["-10vw", "110vw"],
          y: [0, -20, 5, -10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span />
        <span />
      </motion.div>

      <motion.div
        className="bird bird-two"
        animate={{
          x: ["100vw", "-20vw"],
          y: [0, 15, -10, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
          delay: 10,
        }}
      >
        <span />
        <span />
      </motion.div>

      {/* DEER SILHOUETTE */}

      <motion.div
        className="deer"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="deer-body" />
        <div className="deer-neck" />
        <div className="deer-head" />
        <div className="deer-leg deer-leg-one" />
        <div className="deer-leg deer-leg-two" />
        <div className="deer-antler" />
      </motion.div>
    </>
  );
}

export default Wildlife;