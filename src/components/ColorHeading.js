import React from "react";

/**
 * 
 * Component to render different heading levels in markdown with color
 * Usage: Import Component into markdown file and apply the style
 * - import ColorHeading from '@site/src/components/ColorHeading';
 * - <ColorHeading level={1} color="#FF5733">TEXT</ColorHeading>
 */

export default function ColorHeading({ children, color, level }) {
    // Determine the heading tag based on the `level` prop
    const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
    
    return (
        <HeadingTag
        style={{
            color: color,
            fontSize: level === 1 ? '2.5rem' :
                    level === 2 ? '2rem' :
                    level === 3 ? '1.75rem' :
                    level === 4 ? '1.5rem' :
                    level === 5 ? '1.25rem' : '1rem',
            margin: '0.5rem 0', // Optional: adjust margin as needed
        }}
        >
        {children}
        </HeadingTag>
    );
}

