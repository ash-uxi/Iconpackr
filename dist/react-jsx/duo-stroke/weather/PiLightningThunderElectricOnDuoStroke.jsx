import React from 'react';

/**
 * PiLightningThunderElectricOnDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLightningThunderElectricOnDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'lightning-thunder-electric-on icon',
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
      <path d="M6.05371 8.3791L11.8097 3.86686C13.4477 2.58284 14.2666 1.94084 14.8273 2.00429C15.3126 2.0592 15.7397 2.36998 15.9643 2.83169C16.2238 3.3651 15.9606 4.41159 15.4344 6.50457M17.9065 15.8432L12.2547 20.186C10.6269 21.4368 9.81294 22.0623 9.25504 21.9951C8.77203 21.937 8.34826 21.6254 8.12578 21.1649C7.86881 20.633 8.12852 19.6001 8.64795 17.5344" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.0539 8.3791L11.8099 3.86686C13.4478 2.58284 14.2668 1.94084 14.8275 2.00429C15.3128 2.0592 15.7399 2.36998 15.9645 2.83169C16.224 3.3651 15.9608 4.41159 15.4345 6.50457L14.9936 8.25822C14.7829 9.09615 14.6775 9.51511 14.7501 9.87885C14.8139 10.1988 14.9711 10.489 15.1993 10.7079C15.4586 10.9567 15.8518 11.069 16.6381 11.2935L17.1483 11.4392C18.6605 11.8709 19.4165 12.0868 19.7188 12.5263C19.9816 12.9084 20.0659 13.3977 19.9475 13.8544C19.8113 14.3796 19.1764 14.8675 17.9066 15.8432L12.2549 20.186C10.6271 21.4368 9.81313 22.0623 9.25523 21.9951C8.77222 21.937 8.34845 21.6254 8.12597 21.1649C7.869 20.633 8.12871 19.6001 8.64814 17.5344L9.04237 15.9666C9.25307 15.1287 9.35842 14.7097 9.28586 14.346C9.22204 14.026 9.0648 13.7358 8.83668 13.5169C8.57735 13.2681 8.18418 13.1559 7.39784 12.9313L6.83013 12.7692C5.33385 12.342 4.58571 12.1284 4.28364 11.6918C4.02094 11.3122 3.93491 10.8256 4.04995 10.3701C4.18222 9.84635 4.80611 9.35727 6.0539 8.3791Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
