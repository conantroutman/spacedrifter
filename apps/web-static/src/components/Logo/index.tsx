import React from 'react'
import SpacedrifterLogo from 'assets/logo.png'
import Image from 'next/image'
import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={SpacedrifterLogo} alt="Spacedrifter" />
    </div>
  )
}
