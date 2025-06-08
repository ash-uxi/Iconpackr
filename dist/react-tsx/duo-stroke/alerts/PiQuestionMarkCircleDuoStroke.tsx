import React from 'react';

/**
 * PiQuestionMarkCircleDuoStroke icon from the duo-stroke style in alerts category.
 */
interface PiQuestionMarkCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiQuestionMarkCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'question-mark-circle icon',
  ...props
}: PiQuestionMarkCircleDuoStrokeProps): JSX.Element {
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
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.28149 9.71853C9.28149 8.21713 10.4986 7 12 7C13.5014 7 14.7186 8.21713 14.7186 9.71853C14.7186 10.6748 14.2248 11.5157 13.4784 12.0003C12.7544 12.4704 12 13.1368 12 14M12 17H12.001" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
