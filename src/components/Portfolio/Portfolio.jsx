import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://ipetshop.co.th/wp-content/uploads/2021/07/Taurineforcat-1024x681.jpg" alt="coding" />
            </Tilt>
            <p><center>1</center></p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K4BG1afANvfhsI0uwEO1wESe3ZeLKGyfPL4Ti6DjFSG9nsKQwF.jpg" alt="coding" />
            </Tilt>
            <p><center>2</center></p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://www.central.co.th/e-shopping/wp-content/uploads/2020/12/CUTE-KITTY.jpg" alt="coding" />
            </Tilt>
            <p><center>3</center></p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://article.tcdc.or.th/uploads/article-detail-img/tmp/qn7R70FO23x2Glf5FojaKqyfdNEXyexjblbfDkp7.jpeg?10102023045720" alt="coding" />
            </Tilt>
            <p><center>4</center></p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://www.khaosod.co.th/wpapp/uploads/2021/02/c3.jpg" alt="coding" />
            </Tilt>
            <p><center>5</center></p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://s359.kapook.com/pagebuilder/cc3ec7c1-b967-4f5c-841b-af853ccb093f.jpg" alt="coding" />
            </Tilt>
            <p><center>6</center></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
