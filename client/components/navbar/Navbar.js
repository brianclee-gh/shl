import React from 'react'
import styles from '../../styles/NavBar.module.css'
import MiniSearchBar from '../searchbar/MiniSearchBar'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.searchbar}>
        <MiniSearchBar />
      </div>
      <div className={styles.logo}>
        SHL (logoImage)
      </div>
      <div className={styles.midbar}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
      <div className={styles.settings}>
        <ul>
          <li>Become a Photograper</li>
          <li>DM</li>
          <li>Account Settings</li>
        </ul>
      </div>
    </div>
  )
}
