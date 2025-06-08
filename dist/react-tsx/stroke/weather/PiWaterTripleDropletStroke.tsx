import React from 'react';

/**
 * PiWaterTripleDropletStroke icon from the stroke style in weather category.
 */
interface PiWaterTripleDropletStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterTripleDropletStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'water-triple-droplet icon',
  ...props
}: PiWaterTripleDropletStrokeProps): JSX.Element {
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
      <path d="M12 2.05615C18.262 7.76015 14.752 11.3892 12 11.3892C9.24803 11.3892 5.73803 7.75915 12 2.05615ZM6.00003 12.2662C12.262 17.9692 8.75203 21.5992 6.00003 21.5992C3.24803 21.5992 -0.261971 17.9692 6.00003 12.2662ZM18 12.2662C24.262 17.9692 20.752 21.5992 18 21.5992C15.248 21.5992 11.738 17.9692 18 12.2662Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
