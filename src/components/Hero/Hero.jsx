import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hello!</p>
                <h3 className={styles.text_2}>Yasin Unchaleephatchara</h3>
                <p className={styles.text_3}>
                  <span style={{ marginRight: '10px'}}>-</span>
                  <TypeAnimation
                    sequence={[
                      'Core Digital Technology Manager',
                      1000,
                      'MK Restaurant Group',
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
                <p className={styles.text_4}>I have worked here for 6 years and am happy with my co-workers. and <br/> quite like the work here very much.</p>
                <ul className={styles.hero_social}>
                    <li><a href="https://github.com/InYasin?tab=repositories"><FaGithub /></a></li>
                    <li><a href="https://www.facebook.com/inyasinthai"><FaFacebookF /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_img}></div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
