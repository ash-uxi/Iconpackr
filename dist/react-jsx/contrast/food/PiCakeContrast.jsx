import React from 'react';

/**
 * PiCakeContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCakeContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cake icon',
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
      <path d="M12 5v3m0 0H7.8q-.434 0-.8.002M12 8h4.2q.434 0 .8.002M7 2v.01M12 2v.01M17 2v.01M21 20H3m18 0h1m-1 0v-5M3 20H2m1 0v-5m4-6.998c-1.165.008-1.831.055-2.362.325a3 3 0 0 0-1.311 1.311C3 10.28 3 11.12 3 12.8V15m4-6.998V5m10 3.002c1.165.008 1.831.055 2.362.325a3 3 0 0 1 1.311 1.311C21 10.28 21 11.12 21 12.8V15m-4-6.998V5m4 10a1.21 1.21 0 0 1-1.157-.726c-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0-.433.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0A1.21 1.21 0 0 1 3 15"/>
  <path fill="currentColor" d="M20.673 9.638C21 10.28 21 11.12 21 12.8V15a1.21 1.21 0 0 1-1.157-.726c-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0-.433.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.241 0-.434.968-1.807.968-2.24 0-.434-.967-1.808-.967-2.242 0A1.21 1.21 0 0 1 3 15v-2.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.53-.27 1.197-.317 2.362-.325q.365-.003.8-.002h8.4q.434 0 .8.002c1.165.008 1.831.055 2.362.325a3 3 0 0 1 1.311 1.311" opacity=".28"/>
    </svg>
  );
}
