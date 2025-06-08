import React from 'react';

/**
 * PiMinimizeLineArrowContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeLineArrowContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-line-arrow icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill="currentColor" d="M11.47 13.09a20.7 20.7 0 0 1-.215 5.311l-2.613-3.043L5.6 12.744c1.767-.3 3.552-.372 5.31-.214a.616.616 0 0 1 .561.56" opacity=".28"/>
  <path d="M11.47 13.09a20.7 20.7 0 0 1-.215 5.311l-2.613-3.043L5.6 12.744c1.767-.3 3.552-.372 5.31-.214a.616.616 0 0 1 .561.56"/>
  <path fill="currentColor" d="M12.53 10.91a20.7 20.7 0 0 1 .215-5.311l1.424 1.659a24 24 0 0 0 2.573 2.573l1.66 1.425c-1.768.3-3.553.372-5.312.214a.62.62 0 0 1-.56-.56" opacity=".28"/>
  <path d="M12.53 10.91a20.7 20.7 0 0 1 .215-5.311l1.424 1.659a24 24 0 0 0 2.573 2.573l1.66 1.425c-1.768.3-3.553.372-5.312.214a.62.62 0 0 1-.56-.56M15.573 8.427 20 4M8.427 15.573 4 20"/>
    </svg>
  );
}
