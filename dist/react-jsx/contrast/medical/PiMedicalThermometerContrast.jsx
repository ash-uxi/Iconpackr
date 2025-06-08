import React from 'react';

/**
 * PiMedicalThermometerContrast icon from the contrast style in medical category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMedicalThermometerContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'medical-thermometer icon',
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
      <path fill="currentColor" d="M15.889 3.868a3 3 0 0 1 4.243 4.242l-9.27 9.27a3 3 0 0 1-4.243-4.242z" opacity=".28"/>
  <path d="m5.5 18.5 2.191-.157c.881-.064 1.321-.096 1.734-.217a4 4 0 0 0 1.035-.473c.361-.232.674-.544 1.298-1.169l8.374-8.374a3 3 0 0 0-4.243-4.242l-8.374 8.374c-.624.624-.936.936-1.169 1.298-.206.32-.365.67-.472 1.035-.122.412-.153.853-.217 1.733zm0 0L3 21m8.15-7.15 1.622 1.62m1.107-4.349 1.621 1.621m1-4.242 1.621 1.621"/>
    </svg>
  );
}
