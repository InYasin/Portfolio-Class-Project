import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p></p>
            <img src="https://s.isanook.com/hi/0/ud/188/940735/untitled-12.jpg" alt="clients" />
            <h4>Steven Paul Jobs</h4>
            <p className={styles.bio}>CEO of Apple Inc.</p>
        </div>
        <div className={styles.testi_items}>
            <p></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/1200px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg" alt="clients" />
            <h4>Satya Nadella</h4>
            <p className={styles.bio}>CEO of Microsoft.</p>
        </div>
        <div className={styles.testi_items}>
            <p></p>
            <img src="https://images.inc.com/uploaded_files/image/1920x1080/feature-114-Elon-Musk-EoY-opener-pan_7026.jpg" alt="clients" />
            <h4>Elon Reeve Musk</h4>
            <p className={styles.bio}>CEO of SpaceX</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
