import React from 'react';

/**
 * PiCreditCardSettingsDuoSolid icon from the duo-solid style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCreditCardSettingsDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'credit-card-settings icon',
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M15.643 3H8.357C7.273 3 6.4 3 5.691 3.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 5.73c-.302.592-.428 1.233-.487 1.961C1 8.4 1 9.273 1 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 21 7.273 21 8.357 21h3.82l-.005-.14-.005-.444-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 4.198 0l.317.31.444.005c.842.008 1.6.364 2.14.93v-2.745c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C17.6 3 16.727 3 15.643 3M18.087 18l-.026.061-.061.026-.061-.026-.026-.061.026-.061.061-.026.061.026z" /> </g> <path d="M2 9h20M5.8 13h3.3m8.9 5h.01M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z" />
    </svg>
  );
}
