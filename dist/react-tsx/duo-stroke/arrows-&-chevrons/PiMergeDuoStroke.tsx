import React from 'react';

/**
 * PiMergeDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiMergeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMergeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'merge icon',
  ...props
}: PiMergeDuoStrokeProps): JSX.Element {
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
      <path d="M12 4V13L6 20M18 20L14.5714 16" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16 8.03089C14.963 6.57669 13.7515 5.2706 12.3962 4.14485C12.28 4.04828 12.14 4 12 4C11.86 4 11.72 4.04828 11.6038 4.14485C10.2485 5.2706 9.03704 6.57669 8 8.03089" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
