import React, { ReactNode } from 'react';
import Email from './Email';
import styles from './Footer.module.css';
import { PressKit } from './PressKit';

type FooterProps = {
  children: ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {children}
      <Email />
      <PressKit />
    </footer>
  );
};
