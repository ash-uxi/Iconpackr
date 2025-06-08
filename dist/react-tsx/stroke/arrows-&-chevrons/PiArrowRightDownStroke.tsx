import React from 'react';

/**
 * PiArrowRightDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-down icon',
  ...props
}: PiArrowRightDownStrokeProps): JSX.Element {
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
      <path d="M9.99855 18.4838C12.5858 18.8712 15.2066 18.9221 17.7955 18.636C18.0176 18.6115 18.2154 18.5124 18.3639 18.3639M18.4838 9.99855C18.8712 12.5858 18.9221 15.2066 18.636 17.7955C18.6115 18.0176 18.5124 18.2154 18.3639 18.3639M18.3639 18.3639L5.63599 5.63599" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
