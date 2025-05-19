import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  // Fades
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  // Zoom
  zoomIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },

  // Rotate
  rotateIn: {
    hidden: { opacity: 0, rotate: -15 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  rotateInDownLeft: {
    hidden: { opacity: 0, rotate: -90, x: -50, y: -50 },
    visible: {
      opacity: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  // Slide
  slideInLeft: {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideInRight: {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideInUp: {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideInDown: {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  // Flip
  flipInX: {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
  flipInY: {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  // Bounce
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  },
  
};

export default function MotionWrapper({
  children,
  type = "fadeUp",
  className = "",
  once = false,
}) {
  return (
    <motion.div
      variants={animationVariants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
