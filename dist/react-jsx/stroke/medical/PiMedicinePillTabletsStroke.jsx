import React from 'react';

/**
 * PiMedicinePillTabletsStroke icon from the stroke style in medical category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMedicinePillTabletsStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'medicine-pill-tablets icon',
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
      <path d="M12.3059 15.2829L21.6968 18.7198M12.3059 15.2829C11.3569 17.8761 12.6897 20.7477 15.2829 21.6968C17.8761 22.6459 20.7477 21.313 21.6968 18.7198M12.3059 15.2829C13.255 12.6897 16.1267 11.3569 18.7199 12.306C21.3131 13.255 22.6459 16.1266 21.6968 18.7198M2.11361 8.05607L11.8885 5.94602M2.11361 8.05607C2.69628 10.7553 5.35687 12.4711 8.05612 11.8885C10.7554 11.3058 12.4712 8.64527 11.8885 5.94602M2.11361 8.05607C1.53094 5.35682 3.24683 2.69629 5.94608 2.11362C8.64533 1.53094 11.3059 3.24677 11.8885 5.94602" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
