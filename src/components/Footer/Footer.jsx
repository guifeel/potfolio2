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
            绽放青春 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初心不改.
          </span>
          <span className="primaryText">
            让我们聊聊&nbsp;&nbsp;{" "}
            <a href="mailto:1628679619@qq.com">Saying Hi!</a>
          </span>
        </div>

        <div className={css.right} id="school">
          <div className={css.info}>
            <span className="secondaryText school">【毕业院校】</span>
            <p>河北科技师范学院</p>
          </div>

          <ul className={css.menu}>
            <li>教育专业</li>
            <li>声乐舞蹈</li>
            <li>手工制作</li>
            <li>剪辑相关：PS&nbsp;&nbsp; PR &nbsp;&nbsp;Canva</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
