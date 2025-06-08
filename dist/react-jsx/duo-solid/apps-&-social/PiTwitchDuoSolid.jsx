import React from 'react';

/**
 * PiTwitchDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTwitchDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'twitch icon',
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
      <path d="M11 11V7.75M16 11V7.75" /> <path fill={color || "currentColor"} d="M7.76 2c-.806 0-1.469 0-2.008.042-.558.043-1.069.136-1.55.369a3.93 3.93 0 0 0-1.756 1.672c-.254.474-.355.978-.401 1.52C2 6.12 2 6.755 2 7.516v6.166c0 .761 0 1.396.045 1.915.046.54.147 1.045.4 1.518a3.93 3.93 0 0 0 1.757 1.674c.481.232.992.325 1.55.368.36.028.773.037 1.248.04V22a1 1 0 0 0 1.689.725l3.71-3.525h2.06c.873 0 1.469 0 2.04-.13.506-.115.991-.306 1.437-.566.506-.294.933-.7 1.547-1.284l.415-.394c.611-.58 1.04-.987 1.353-1.473.277-.43.483-.9.608-1.395.141-.56.141-1.143.141-1.961v-4.48c0-.761 0-1.396-.044-1.915-.047-.54-.148-1.045-.402-1.519a3.93 3.93 0 0 0-1.756-1.672c-.481-.233-.992-.326-1.55-.37C17.708 2 17.046 2 16.24 2z" opacity=".28" />
    </svg>
  );
}
