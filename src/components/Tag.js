import React from 'react';

export default function Tag({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
        // fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  );
}
