import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#08304b] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-12 h-12 border-4 border-[#0093b9] border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
