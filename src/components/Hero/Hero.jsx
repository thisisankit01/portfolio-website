import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Ankit Pandey.
          </motion.span>
           
          <motion.span className="introduction" variants={fadeIn("right", "tween", 0.2, 1)}>
          I am currenly in 3rd Year of my Btech(ITE) As a web developer with knowledge in HTML, CSS, Reactjs, Nodejs, Tailwind CSS, Firebase, and MongoDB.<br />
           I am excited to pursue opportunities in the field. <br />
            With a strong passion for web development, <br />
            I am confident that I can make a valuable contribution to any team. <br />
            </motion.span>

        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./avatarReal.png" alt="" />
        </motion.div>

        <a className={css.email} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ankit.pndy2002@gmail.com" target="_blank">
          ankit.pndy2002@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText"></div>
            <div className="secondaryText">
              <div> </div>
              <div> </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.experience}>
            <img className="pl-[2.5rem]" src="./certificate.png" alt="" />
            <span className="pr-[2rem]">Full Stack Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
