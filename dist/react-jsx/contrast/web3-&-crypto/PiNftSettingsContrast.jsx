import React from 'react';

/**
 * PiNftSettingsContrast icon from the contrast style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNftSettingsContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'nft-settings icon',
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
      <path d="M11.174 21h-.428c-.773 0-1.33 0-1.778-.035m12.445-9.752A3 3 0 0 0 21.36 11m0 0h-2.322c-.935 0-1.402 0-1.796.034-4.381.38-7.855 3.83-8.238 8.182-.034.386-.035.843-.035 1.749M21.36 11c-.15-.519-.458-1.067-1.005-2.045l-1.49-2.663c-.67-1.198-1.004-1.797-1.481-2.233a4 4 0 0 0-1.466-.857C15.302 3 14.612 3 13.232 3h-2.486c-1.38 0-2.07 0-2.685.202a4 4 0 0 0-1.466.857c-.477.436-.812 1.035-1.482 2.233l-1.454 2.6c-.635 1.134-.952 1.702-1.076 2.302-.11.532-.11 1.08 0 1.612.124.6.441 1.168 1.076 2.302l1.454 2.6c.67 1.198 1.005 1.797 1.482 2.234.422.385.921.677 1.466.856.27.089.556.139.907.167M18 18h.01m-9.042-8a1.003 1.003 0 0 1-1.007-1c0-.552.451-1 1.007-1s1.007.448 1.007 1-.45 1-1.007 1M18 14l1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z"/>
  <path fill="currentColor" d="m5.113 6.292-1.454 2.6c-.635 1.134-.952 1.702-1.076 2.302-.11.532-.11 1.08 0 1.612.124.6.441 1.168 1.076 2.302l1.454 2.6c.67 1.198 1.005 1.797 1.482 2.234.422.385.921.677 1.466.856.27.089.556.139.907.167 0-.905 0-1.363.035-1.75.383-4.35 3.857-7.8 8.238-8.18.394-.035.861-.035 1.796-.035h2.322c-.15-.519-.457-1.067-1.005-2.045l-1.49-2.663c-.67-1.198-1.004-1.797-1.481-2.233a4 4 0 0 0-1.466-.857C15.302 3 14.612 3 13.232 3h-2.486c-1.38 0-2.07 0-2.685.202a4 4 0 0 0-1.466.857c-.477.436-.812 1.035-1.482 2.233" opacity=".28"/>
    </svg>
  );
}
