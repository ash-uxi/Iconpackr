import React from 'react';

/**
 * PiHeartBreakDuoStroke icon from the duo-stroke style in general category.
 */
interface PiHeartBreakDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeartBreakDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heart-break icon',
  ...props
}: PiHeartBreakDuoStrokeProps): JSX.Element {
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
      <path d="M13 16.0003C11.8451 14.9411 11.2599 13.5646 11.0078 12.0478C11.003 12.0189 11.0156 11.9899 11.04 11.9736L13.9361 10.0429C13.9747 10.0171 13.994 9.9706 13.9849 9.92505C13.6593 8.29722 12.9719 6.77068 12 5.42773" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2 8.94427C2 15.9768 11 21 12 21C13 21 22 15.9768 22 8.94427C22 3.50672 15.1625 0.66165 12 5.4274C8.83207 0.653479 2 3.5018 2 8.94427Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
