import React from 'react'
import styles from '../../styles/MiniSearchBar.module.css'

export default function MiniSearchBar() {
  return (
    <button type="button" className={styles.searchButton}>
      Mag-glass
      What are you looking for?
    </button>
  )
}
