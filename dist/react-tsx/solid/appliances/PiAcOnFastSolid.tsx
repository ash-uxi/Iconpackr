import React from 'react';

/**
 * PiAcOnFastSolid icon from the solid style in appliances category.
 */
interface PiAcOnFastSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnFastSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-fast icon',
  ...props
}: PiAcOnFastSolidProps): JSX.Element {
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
      <path d="M13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15Z" fill="currentColor" stroke="none"/>
  <path d="M18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15V15.1459C16 17.5803 17.3754 19.8057 19.5528 20.8944C20.0468 21.1414 20.6474 20.9412 20.8944 20.4472C21.1414 19.9532 20.9412 19.3526 20.4472 19.1056C18.9474 18.3557 18 16.8227 18 15.1459V15Z" fill="currentColor" stroke="none"/>
  <path d="M4 3C2.34315 3 1 4.34315 1 6V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V6C23 4.34315 21.6569 3 20 3H4ZM15 8C15 7.44772 15.4477 7 16 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H16C15.4477 9 15 8.55228 15 8Z" fill="currentColor" stroke="none"/>
  <path d="M8 15C8 14.4477 7.55228 14 7 14C6.44772 14 6 14.4477 6 15V15.1459C6 16.8227 5.0526 18.3557 3.55279 19.1056C3.05881 19.3526 2.85858 19.9532 3.10557 20.4472C3.35256 20.9412 3.95323 21.1414 4.44721 20.8944C6.6246 19.8057 8 17.5803 8 15.1459V15Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
