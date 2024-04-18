"use client"
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="border-4 border-rose-300 border-t-transparent rounded-full w-12 h-12 animate-spin"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
      </motion.div>
    </div>
  );
};

export default Loader;
