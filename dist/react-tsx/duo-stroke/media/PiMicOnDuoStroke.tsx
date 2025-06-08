import React from 'react';

/**
 * PiMicOnDuoStroke icon from the duo-stroke style in media category.
 */
interface PiMicOnDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicOnDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-on icon',
  ...props
}: PiMicOnDuoStrokeProps): JSX.Element {
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
      <path d="M12 20C7.58172 20 4 16.4183 4 12M12 20C16.4183 20 20 16.4183 20 12M12 20V22" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
