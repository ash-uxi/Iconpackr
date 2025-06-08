import React from 'react';

/**
 * PiMinusSquareSolid icon from the solid style in maths category.
 */
interface PiMinusSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinusSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minus-square icon',
  ...props
}: PiMinusSquareSolidProps): JSX.Element {
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
      <path d="M11.9632 2H12.0368C13.4035 2 14.4801 1.99999 15.351 2.05941C16.2387 2.11997 16.9853 2.2456 17.6788 2.53284C19.394 3.2433 20.7567 4.60602 21.4672 6.32122C21.7544 7.01469 21.88 7.76134 21.9406 8.649C22 9.51986 22 10.5965 22 11.9631V12.0369C22 13.4035 22 14.4801 21.9406 15.351C21.88 16.2387 21.7544 16.9853 21.4672 17.6788C20.7567 19.394 19.394 20.7567 17.6788 21.4672C16.9853 21.7544 16.2387 21.88 15.351 21.9406C14.4801 22 13.4035 22 12.0369 22H11.9631C10.5965 22 9.51986 22 8.649 21.9406C7.76134 21.88 7.01469 21.7544 6.32122 21.4672C4.60602 20.7567 3.2433 19.394 2.53284 17.6788C2.2456 16.9853 2.11997 16.2387 2.05941 15.351C1.99999 14.4801 2 13.4035 2 12.0369V11.9632C2 10.5965 1.99999 9.51986 2.05941 8.64899C2.11997 7.76134 2.2456 7.01469 2.53284 6.32122C3.2433 4.60602 4.60602 3.2433 6.32122 2.53284C7.01469 2.2456 7.76134 2.11997 8.64899 2.05941C9.51986 1.99999 10.5965 2 11.9632 2ZM8.9 11C8.34772 11 7.9 11.4477 7.9 12C7.9 12.5523 8.34772 13 8.9 13H15.1C15.6523 13 16.1 12.5523 16.1 12C16.1 11.4477 15.6523 11 15.1 11H8.9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
