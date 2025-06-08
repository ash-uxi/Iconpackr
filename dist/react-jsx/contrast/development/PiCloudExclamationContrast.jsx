import React from 'react';

/**
 * PiCloudExclamationContrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudExclamationContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-exclamation icon',
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
      <path fill="currentColor" d="M12.5 3a7.5 7.5 0 0 1 6.627 3.986 44 44 0 0 0 .347.64l-.003-.005.007.01a.4.4 0 0 0 .067.068q.04.03.125.09c.116.082.278.193.506.35A6.5 6.5 0 0 1 16.5 20h-10A5.5 5.5 0 0 1 3.609 9.82c.475-.294.824-.51 1.068-.664a11 11 0 0 0 .325-.215.3.3 0 0 0 .046-.055l.004-.005.02-.041c.023-.051.055-.124.099-.228.082-.198.193-.473.344-.848A7.5 7.5 0 0 1 12.5 3" opacity=".28"/>
  <path d="M6.51 7.97a6.502 6.502 0 0 1 11.734-.515c.237.446.355.668.42.756.1.136.067.1.191.215.08.073.305.228.755.537A5.5 5.5 0 0 1 16.5 19M6.51 7.97l-.045.11m.046-.11-.045.108v.002m0 0A6.518 6.518 0 0 0 6.174 12m.29-3.92c-.322.803-.483 1.204-.561 1.325-.152.235-.038.1-.244.29-.106.097-.579.39-1.525.976A4.5 4.5 0 0 0 6.5 19m5.5-2.001v-6m0 9.01v-.011"/>
    </svg>
  );
}
