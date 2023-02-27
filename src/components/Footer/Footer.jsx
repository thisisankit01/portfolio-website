import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="https://linkedin.com/in/thisisankit01" target="_blank">
              saying hi
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="text-2xl">Here's My Resume</span>
          </div>
          <button className="border px-2 py-2 bg-coolGray-800">
            <a href="https://drive.google.com/file/d/1-LlzipbTIfDmFABC05EoWSt_GIUN2o3E/view?usp=share_link">
              📃 My Resume
            </a>
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
