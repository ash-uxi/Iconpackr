import React from 'react';

/**
 * PiUserAiDuoStroke icon from the duo-stroke style in ai category.
 */
interface PiUserAiDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserAiDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-ai icon',
  ...props
}: PiUserAiDuoStrokeProps): JSX.Element {
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
      <path d="M10 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H11.5329" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14 21H14.001M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM18 14C17.3625 15.6165 16.6609 16.345 15 17C16.6609 17.655 17.3625 18.3835 18 20C18.6375 18.3835 19.3391 17.655 21 17C19.3391 16.345 18.6375 15.6165 18 14Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
