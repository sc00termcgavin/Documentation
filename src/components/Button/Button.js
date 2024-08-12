import React from "react";
import styles from './Button.module.css';
import Link from '@docusaurus/Link';

// export default function Button({ children, color }) {
//     return (
//         <Link
//         className="btnGrad"
//         to="/docs" // Replace with your target route
//       >
//         Jump
//       </Link>
//     );
//   }

export default function Button({ children, to }) {
    return (
      <Link
        className={styles.btnGrad} // Apply the CSS Module class
        to={to} // Use the passed route
      >
        {children}
      </Link>
    );
  }