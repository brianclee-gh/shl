import React from 'react'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section id="leftFooter">
        SHL 2021
      </section>
      <section id="rightFooter">
        Social Media
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </section>
    </div>
  )
}
