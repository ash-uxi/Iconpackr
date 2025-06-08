import React from 'react';

/**
 * PiResolutionQualityHqSolid icon from the solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiResolutionQualityHqSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'resolution-quality-hq icon',
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
      <path d="M14.7518 10.0935C14.7518 9.67833 15.0883 9.3418 15.5034 9.3418C15.9185 9.3418 16.2551 9.67837 16.2551 10.0935V12.3747C16.2551 12.7898 15.9185 13.1263 15.5034 13.1263C15.0883 13.1263 14.7518 12.7898 14.7518 12.3747V10.0935Z" fill="currentColor" stroke="none"/>
  <path d="M2 8C2 5.23858 4.23858 3 7 3H17C19.7614 3 22 5.23858 22 8V16C22 18.7614 19.7614 21 17 21H7C4.23858 21 2 18.7614 2 16V8ZM15.5034 7.3418C13.9837 7.3418 12.7518 8.57376 12.7518 10.0935V12.3747C12.7518 13.5102 13.4396 14.485 14.4213 14.9054V15.6589C14.4213 16.2112 14.869 16.6589 15.4213 16.6589C15.9735 16.6589 16.4213 16.2112 16.4213 15.6589V14.9695C17.4896 14.5916 18.2551 13.5725 18.2551 12.3747V10.0935C18.2551 8.57373 17.023 7.3418 15.5034 7.3418ZM7.74512 8.54389C7.74512 7.99161 7.2974 7.54389 6.74512 7.54389C6.19283 7.54389 5.74512 7.99161 5.74512 8.54389V15.0501C5.74512 15.6024 6.19283 16.0501 6.74512 16.0501C7.2974 16.0501 7.74512 15.6024 7.74512 15.0501V13.0472H9.2485V15.0501C9.2485 15.6024 9.69622 16.0501 10.2485 16.0501C10.8008 16.0501 11.2485 15.6024 11.2485 15.0501V8.54389C11.2485 7.99161 10.8008 7.54389 10.2485 7.54389C9.69622 7.54389 9.2485 7.99161 9.2485 8.54389V11.0472H7.74512V8.54389Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
