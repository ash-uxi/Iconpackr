import React from 'react';

/**
 * PiServerPlusContrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiServerPlusContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'server-plus icon',
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
      <path d="M19 22v-3m0 0v-3m0 3h-3m3 0h3M7 12h10M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h5.129M7 12c-.464 0-.697 0-.892-.022a3.5 3.5 0 0 1-3.086-3.086C3 8.697 3 8.464 3 8s0-.697.022-.892a3.5 3.5 0 0 1 3.086-3.086C6.303 4 6.536 4 7 4h10c.464 0 .697 0 .892.022a3.5 3.5 0 0 1 3.086 3.086C21 7.303 21 7.536 21 8s0 .697-.022.892a3.5 3.5 0 0 1-3.086 3.086C17.697 12 17.464 12 17 12m0 0c.464 0 .697 0 .892.022q.165.019.326.052M13 8h.01M17 8h.01M13 16h.01"/>
  <path fill="currentColor" d="M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h6.094v-.253a3.001 3.001 0 0 1 5.333-6.692l.817-.59a3.5 3.5 0 0 0-1.352-.443C17.697 12 17.464 12 17 12c.464 0 .697 0 .892-.022a3.5 3.5 0 0 0 3.086-3.086C21 8.697 21 8.464 21 8s0-.697-.022-.892a3.5 3.5 0 0 0-3.086-3.086C17.697 4 17.464 4 17 4H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 7.303 3 7.536 3 8s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 12 6.536 12 7 12" opacity=".28"/>
    </svg>
  );
}
