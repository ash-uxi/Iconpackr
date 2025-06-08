import React from 'react';

/**
 * PiPiechartRoseContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPiechartRoseContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'piechart-rose icon',
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
      <path fill="currentColor" d="M10.995 2.864c5.598 0 10.137 4.538 10.137 10.137h-1.274a8.863 8.863 0 0 1-8.863 8.863v-1.108A7.755 7.755 0 0 1 3.24 13h1.108a6.647 6.647 0 0 1 6.647-6.647z" opacity=".28"/>
  <path d="M19.858 13a8.863 8.863 0 0 1-8.863 8.864v-1.108M19.858 13h1.274c0-5.599-4.539-10.137-10.137-10.137v3.49M19.858 13h-8.863m0 7.755A7.755 7.755 0 0 1 3.24 13h1.108m6.647 7.755V13m-6.647 0a6.647 6.647 0 0 1 6.647-6.647M4.348 13h6.647m0-6.647V13"/>
    </svg>
  );
}
