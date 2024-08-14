import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';


export default function TextColor({ children, lightColor, darkColor }) {
    const { colorMode } = useColorMode(); // Get the current color mode
    const style = {
        color: colorMode === 'dark' ? darkColor : lightColor,
      };
    
      return (
        <span style={style}>
            {children}
        </span>
      );
};