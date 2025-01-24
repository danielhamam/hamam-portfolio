import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(30px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      exit={{ opacity: 0, transform: "translateY(30px)" }}
      transition={{
        type: "spring",
        duration: 0.5,
        stiffness: 100,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
