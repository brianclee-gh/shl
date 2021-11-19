import React from 'react'
import styles from '../../styles/NavBar.module.css'
import MiniSearchBar from '../searchbar/MiniSearchBar'
import { faInbox, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.searchbar}>
        <MiniSearchBar />
      </div>
      <div className={styles.logo}>
        SHL
      </div>
      <div className={styles.midbar}>
        <ul>
          <li>Weddings</li>
          <li>Family</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className={styles.settings}>
        <ul className={styles.settingsList}>
          <li>Become a Photograper</li>
          <li><FontAwesomeIcon icon={faInbox}/></li>
          <li>
            <div className={styles.accountButton}>
              <FontAwesomeIcon icon={faBars}/>
              <FontAwesomeIcon icon={faUserCircle}/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
