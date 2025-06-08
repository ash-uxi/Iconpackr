import React from 'react';

/**
 * PiHardriveDuoSolid icon from the duo-solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHardriveDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'hardrive icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M17 16h-4m-6-4h10c.464 0 .697 0 .892.022a3.5 3.5 0 0 1 3.086 3.086c.022.195.022.428.022.892s0 .697-.022.892a3.5 3.5 0 0 1-3.086 3.086C17.697 20 17.464 20 17 20H7c-.464 0-.697 0-.892-.022a3.5 3.5 0 0 1-3.086-3.086C3 16.697 3 16.464 3 16s0-.697.022-.892a3.5 3.5 0 0 1 3.086-3.086C6.303 12 6.536 12 7 12" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M21.781 14.113q.139.426.19.883c.03.252.03.537.029.94v.127c0 .403 0 .689-.028.94a4.5 4.5 0 0 1-3.968 3.969 9 9 0 0 1-.941.028H6.937c-.403 0-.689 0-.94-.028a4.5 4.5 0 0 1-3.969-3.968A9 9 0 0 1 2 16.063v-.126c0-.403 0-.689.028-.941q.061-.522.23-1.001c.213-.863.55-2.013.924-3.29.185-.629.378-1.288.57-1.96l.01-.032c.265-.93.478-1.675.686-2.26.212-.597.445-1.11.787-1.543a4.8 4.8 0 0 1 2.04-1.539c.506-.206 1.042-.291 1.649-.332C9.516 3 10.244 3 11.149 3h2.169c1.546 0 2.612 0 3.532.38a5 5 0 0 1 2.05 1.568c.609.788.887 1.817 1.292 3.31zm-15.56-1.097C6.345 13.002 6.507 13 7 13h10c.492 0 .654.002.78.016a2.5 2.5 0 0 1 2.204 2.204c.014.125.016.288.016.78 0 .491-.002.654-.016.78a2.5 2.5 0 0 1-2.204 2.204c-.126.014-.288.016-.78.016H7c-.492 0-.654-.002-.78-.016a2.5 2.5 0 0 1-2.204-2.204C4.002 16.654 4 16.49 4 16s.002-.655.016-.78a2.5 2.5 0 0 1 2.204-2.204" clipRule="evenodd" opacity=".28" />
    </svg>
  );
}
