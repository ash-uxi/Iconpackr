import React from 'react';

/**
 * PiMergeContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMergeContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'merge icon',
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
      <path d="M12 7.782V13l-6 7m6-12.218q.99 0 1.979.082L16 8.03a20.6 20.6 0 0 0-3.604-3.886.62.62 0 0 0-.792 0A20.6 20.6 0 0 0 8 8.03l2.021-.167A24 24 0 0 1 12 7.782M18 20l-3.429-4"/>
  <path fill="currentColor" d="M12.396 4.145A20.6 20.6 0 0 1 16 8.03l-2.021-.167a24 24 0 0 0-3.958 0L8 8.03a20.6 20.6 0 0 1 3.604-3.886.62.62 0 0 1 .792 0" opacity=".28"/>
    </svg>
  );
}
