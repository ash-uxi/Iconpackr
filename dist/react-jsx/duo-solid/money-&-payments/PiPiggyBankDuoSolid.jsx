import React from 'react';

/**
 * PiPiggyBankDuoSolid icon from the duo-solid style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPiggyBankDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'piggy-bank icon',
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
      <path d="M16 11h.01" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M3.287 10.977H3.1c-.647 0-1.1-.498-1.1-1.005a1 1 0 0 0-2 0c0 1.698 1.437 3.005 3.1 3.005h.144c.192 1.36.843 2.707 2 3.92l-.019.256q-.012.162-.026.381c-.023.364-.041.814.002 1.253.04.421.148.957.47 1.407.368.513.936.806 1.629.806h1.45c.944 0 1.514-.592 1.832-1.074.157-.239.28-.489.374-.69l.136-.296c.301-.08.623-.096.933-.096s.632.016.933.096l.136.295c.094.201.217.451.374.69.317.481.887 1.075 1.831 1.075h1.451c.754 0 1.338-.352 1.693-.909.308-.483.405-1.057.44-1.517.034-.48.008-.974-.021-1.375q-.016-.22-.03-.387a8 8 0 0 1-.032-.484.8.8 0 0 1 .196-.157c.279-.179.694-.34 1.227-.523l.246-.083.013-.004c.425-.143.912-.306 1.295-.49.237-.115.514-.272.743-.497.243-.238.48-.605.48-1.092v-3.01c0-.872-.728-1.5-1.525-1.5-.238 0-.476.028-.714.025-.217-.714-.648-1.193-1-1.54l-.009-.045a2.6 2.6 0 0 1-.016-.528c.011-.227.036-.462.061-.705v-.004c.026-.237.053-.477.053-.716 0-.823-.73-1.619-1.708-1.434-1.221.232-2.225 1.011-2.8 1.671-4.102-1.711-8.07-.56-10.313 1.878-.884.961-1.506 2.132-1.742 3.403" clipRule="evenodd" opacity=".28" />
    </svg>
  );
}
