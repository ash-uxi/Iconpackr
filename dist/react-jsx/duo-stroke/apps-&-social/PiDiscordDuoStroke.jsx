import React from 'react';

/**
 * PiDiscordDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDiscordDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'discord icon',
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
      <path d="M21.9142 16.4999C19.9311 19.9999 16.491 19.9999 16.491 19.9999L15.3248 17.5737C12.8808 18.3088 11.1232 18.3086 8.67893 17.5733L7.50897 19.9999C7.50897 19.9999 4.06894 19.9999 2.08583 16.4999C2.04456 16.427 2.02319 16.3445 2.0214 16.2608C1.99218 14.8896 1.6318 8.39714 5.49577 5.49991C6.59358 4.74248 7.96978 4.28899 8.62476 4.10121C8.84722 4.03743 9.07799 4.14602 9.18127 4.35311L9.86449 5.72306C9.94909 5.8927 10.1224 5.99991 10.3119 5.99991H13.6929C13.8829 5.99991 14.0565 5.89225 14.1409 5.72204L14.8191 4.35434C14.9221 4.14663 15.1533 4.03755 15.3761 4.10146C16.0315 4.2894 17.4069 4.74283 18.5042 5.49991C22.3682 8.39714 22.0078 14.8896 21.9786 16.2608C21.9768 16.3445 21.9554 16.427 21.9142 16.4999Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.00122 17C7.60089 17.2248 8.15561 17.4159 8.67887 17.5734C11.1231 18.3087 12.8807 18.3089 15.3247 17.5738C15.8484 17.4163 16.4036 17.225 17.0038 17M10.002 12C10.002 12.5523 9.55415 13 9.00172 13C8.4493 13 8.00146 12.5523 8.00146 12C8.00146 11.4477 8.4493 11 9.00172 11C9.55415 11 10.002 11.4477 10.002 12ZM16.0035 12C16.0035 12.5523 15.5557 13 15.0033 13C14.4508 13 14.003 12.5523 14.003 12C14.003 11.4477 14.4508 11 15.0033 11C15.5557 11 16.0035 11.4477 16.0035 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
