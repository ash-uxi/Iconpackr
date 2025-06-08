import React from 'react';

/**
 * PiShare01DuoStroke icon from the duo-stroke style in general category.
 */
interface PiShare01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShare01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'share-01 icon',
  ...props
}: PiShare01DuoStrokeProps): JSX.Element {
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
      <path d="M15.4098 17.4898C12.8269 16.717 10.4853 15.4571 8.58984 13.5098M15.41 6.50977C12.8271 7.28255 10.4855 8.54242 8.59 10.4898" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
