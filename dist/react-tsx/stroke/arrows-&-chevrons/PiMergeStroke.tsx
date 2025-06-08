import React from 'react';

/**
 * PiMergeStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMergeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMergeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'merge icon',
  ...props
}: PiMergeStrokeProps): JSX.Element {
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
      <path d="M16 8.03089C14.963 6.57669 13.7515 5.2706 12.3962 4.14485C12.28 4.04828 12.14 4 12 4M8 8.03089C9.03704 6.57669 10.2485 5.2706 11.6038 4.14485C11.72 4.04828 11.86 4 12 4M12 4V13L6 20M18 20L14.5714 16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
