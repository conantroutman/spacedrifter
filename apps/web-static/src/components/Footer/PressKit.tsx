import React from 'react';
import styles from './PressKit.module.css';
import { FiExternalLink } from 'react-icons/fi';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1_lRnjVCcE53Lgt4r2ztciSnkrQ8Tt63D?usp=drive_link';

export const PressKit = () => {
  return (
    <a className={styles.link} href={DRIVE_LINK} target="_blank" rel="noreferrer">
      <span>Press Kit</span>
      <FiExternalLink />
    </a>
  );
};
