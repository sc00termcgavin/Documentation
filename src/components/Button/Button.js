import React from "react";
import styles from './Button.module.css';
import Link from '@docusaurus/Link';

export default function Button({ children, to }) {
    return (
      <Link
        className={styles.btnGrad} // Apply the CSS Module class
        to={to} 
      >
        {children}
      </Link>
    );
  }