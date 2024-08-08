import React from "react";
import { motion, useIsPresent } from "framer-motion";

function PageLoader() {
  const isPresent = useIsPresent();
  return (
    <div className={`pera ${isPresent ? 'visible' : ''}`}>
      <motion.div
        initial={{ scaleX: 1 }} 
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "linear" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "linear" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
}

export default PageLoader;
