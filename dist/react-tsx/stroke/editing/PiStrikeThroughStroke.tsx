import React from 'react';

/**
 * PiStrikeThroughStroke icon from the stroke style in editing category.
 */
interface PiStrikeThroughStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStrikeThroughStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'strike-through icon',
  ...props
}: PiStrikeThroughStrokeProps): JSX.Element {
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
      <path d="M12 12C14.2712 12 17 12.4351 17 15.8679C17 20.9381 8.33063 21.3742 7.14564 17M12 12L21 12M12 12L3 12M7 8.13207C7 3.06192 15.6694 2.62579 16.8544 7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
