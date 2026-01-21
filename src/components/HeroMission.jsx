import "./HeroMission.css";
import { motion } from "framer-motion";
import vgPayLogo from "../assets/image.png";

/* 🔹 Heading typing animation */
const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};

/* 🔹 Floating image animation */
const floatingImage = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1.5, -1.5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroMission = () => {
  const companyTitle = "VishwaGuru Infotech";
  const headingText = "Transforming Ideas Into";

  return (
    <section className="hero" id="mission">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* 🔥 NEW TOP ANIMATED TITLE */}
            <motion.h2
              className="company-title"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              {companyTitle.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

          

            {/* 🔥 EXISTING TYPEWRITER HEADING */}
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              {headingText.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="highlight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Digital Reality
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              At VishwaGuru Infotech, we believe technology is the bridge between
              vision and achievement. Since our inception, we've been committed
              to delivering innovative solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="hero-image"
            variants={floatingImage}
            animate="animate"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <img src={vgPayLogo} alt="VishwaGuru Infotech" />
            <span className="image-glow" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroMission;
