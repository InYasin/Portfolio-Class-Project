import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope  } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact' className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Contact</h3>
                <p className={styles.contact_desc}>
                Company Location<br/>
                MK Restaurant Group Public Company Limited
                </p>
                <p className={styles.contact_address}>
                Address: 1200 Debaratana Road, Bangna Tai <br/> Bangna, Bangkok 10260
                </p>
                <p><FaPhone /> (+66) 02-836-1000</p>
                <p><FaEnvelope /> info@mkrestaurantgroup.com</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='eg. John' />
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='eg. Doe' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email address</label>
                    <input type="email" placeholder='eg. johndoe@gmail.com' />
                    <label htmlFor="email address">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
