import React from 'react';

/**
 * Pi3dSphereContrast icon from the contrast style in ar-&-vr category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function Pi3dSphereContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = '3d-sphere icon',
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
      <path fill="currentColor" d="M2.85 12c0-4.568 3.347-8.354 7.723-9.04q.699-.11 1.427-.11A9.15 9.15 0 1 1 2.85 12" opacity=".28"/>
  <path d="M21.142 12.39q.008-.195.008-.39a9.15 9.15 0 0 0-10.577-9.04m10.569 9.43a9.15 9.15 0 0 1-10.569 8.649m10.569-8.65c-3.803 1.492-8.033 1.885-12.082 1.462m0 0c-2.273-.238-4.376-.745-6.202-1.461m6.202 1.46c.171 2.647.706 5.097 1.513 7.189M9.06 13.851c-.238-3.67.185-7.448 1.513-10.89M2.858 12.39A9 9 0 0 1 2.85 12c0-4.568 3.347-8.354 7.723-9.04m-7.715 9.43a9.15 9.15 0 0 0 7.715 8.649"/>
    </svg>
  );
}
