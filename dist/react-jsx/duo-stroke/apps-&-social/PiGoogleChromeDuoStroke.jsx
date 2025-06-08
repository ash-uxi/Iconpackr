import React from 'react';

/**
 * PiGoogleChromeDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGoogleChromeDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'google-chrome icon',
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
      <path d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28" fill="none"/>
  <path  fillRule="evenodd" d="M20.97 7.246h-8.975a4.76 4.76 0 0 0-4.322 2.773L5.438 6.152 4.86 5.144a1 1 0 0 0-.154-.204 10.2 10.2 0 0 0-1.31 1.672l.306.536.002.003 4.077 7.053a4.75 4.75 0 0 0 4.658 2.53l-2.231 3.868-.002.003-.712 1.226-.003.007c.686.174 1.4.279 2.135.305l.311-.537.002-.002 4.074-7.063a4.73 4.73 0 0 0 .735-2.54 4.73 4.73 0 0 0-.878-2.755h5.471q.219-.001.405-.085c-.194-.67-.456-1.31-.777-1.915m-8.975 7.508a2.75 2.75 0 0 1-2.346-1.312l-.035-.065-.073-.126a2.754 2.754 0 1 1 4.876.062q-.021.03-.04.064l-.07.12a2.75 2.75 0 0 1-2.312 1.257" clipRule="evenodd" fill="none"/>
    </svg>
  );
}
