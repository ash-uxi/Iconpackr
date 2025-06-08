import React from 'react';

/**
 * PiListAiGeneratedDuoStroke icon from the duo-stroke style in ai category.
 */
interface PiListAiGeneratedDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListAiGeneratedDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-ai-generated icon',
  ...props
}: PiListAiGeneratedDuoStrokeProps): JSX.Element {
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
      <path d="M14 20H14.01M18 13C17.3625 14.6165 16.6609 15.345 15 16C16.6609 16.655 17.3625 17.3835 18 19C18.6375 17.3835 19.3391 16.655 21 16C19.3391 15.345 18.6375 14.6165 18 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H13.5M4 18H10M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
