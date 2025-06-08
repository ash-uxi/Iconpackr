import React from 'react';

/**
 * PiBathTubContrast icon from the contrast style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBathTubContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bath-tub icon',
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
      <path d="m17 20 1 1M3 11V5a3 3 0 0 1 6 0v1"/>
  <path fill="currentColor" d="M3 13.414V15.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 17.72 21 16.88 21 15.2v-1.786c0-.372 0-.558.026-.736a2.5 2.5 0 0 1 .471-1.139c.108-.144.24-.276.503-.539H2c.263.263.395.395.503.539a2.5 2.5 0 0 1 .471 1.139c.026.178.026.364.026.736" opacity=".28"/>
  <path d="M3 13.414V15.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 17.72 21 16.88 21 15.2v-1.786c0-.372 0-.558.026-.736a2.5 2.5 0 0 1 .471-1.139c.108-.144.24-.276.503-.539H2c.263.263.395.395.503.539a2.5 2.5 0 0 1 .471 1.139c.026.178.026.364.026.736M7 6h4M7 20l-1 1"/>
    </svg>
  );
}
