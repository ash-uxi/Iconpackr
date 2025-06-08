import React from 'react';

/**
 * PiUserUser01DuoStroke icon from the duo-stroke style in users category.
 */
interface PiUserUser01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-01 icon',
  ...props
}: PiUserUser01DuoStrokeProps): JSX.Element {
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
      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 15H7C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
