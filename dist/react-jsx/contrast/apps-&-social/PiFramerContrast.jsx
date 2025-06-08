import React from 'react';

/**
 * PiFramerContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFramerContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'framer icon',
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
      <path fill="currentColor" d="M10.598 21.398 5 15v-4.1c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163H12L5.922 3.414c-.52-.436-.78-.654-.807-.844a.5.5 0 0 1 .16-.441C5.418 2 5.757 2 6.435 2H16.6c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v1.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H12l6.106 5.085c.523.436.785.654.812.844a.5.5 0 0 1-.16.442c-.143.129-.483.129-1.164.129H12v5.87c0 .66 0 .99-.126 1.131a.5.5 0 0 1-.436.164c-.19-.023-.406-.271-.84-.767" opacity=".28"/>
  <path d="M12 15v5.87c0 .66 0 .99-.126 1.131a.5.5 0 0 1-.436.164c-.19-.023-.406-.271-.84-.767L5 15m0 0v-4.1c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163H12M5 15h12.594c.68 0 1.021 0 1.164-.129a.5.5 0 0 0 .16-.442c-.027-.19-.289-.408-.812-.844L12 8.5m0 0h4.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656C19 7.361 19 6.941 19 6.1V4.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 2 17.441 2 16.6 2H6.436c-.679 0-1.018 0-1.16.129a.5.5 0 0 0-.161.441c.027.19.287.408.807.844z"/>
    </svg>
  );
}
