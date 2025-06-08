import React from 'react';

/**
 * PiRefreshDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiRefreshDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRefreshDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'refresh icon',
  ...props
}: PiRefreshDuoStrokeProps): JSX.Element {
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
      <path d="M17.4999 2.47363C18.0091 3.66573 18.3615 4.91832 18.5485 6.2C18.5806 6.41989 18.4578 6.63253 18.2513 6.71469C18.191 6.7387 18.1305 6.7623 18.0699 6.78551C16.9214 7.22534 15.7224 7.5225 14.4999 7.66979M6.49993 21.5262C5.99072 20.3341 5.63839 19.0815 5.45136 17.7998C5.41927 17.5799 5.54204 17.3673 5.74852 17.2851C5.80884 17.2611 5.86932 17.2375 5.92993 17.2143C7.07847 16.7745 8.27745 16.4773 9.49993 16.33" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M18.0699 6.78547C17.4972 6.11887 16.8041 5.53599 15.9999 5.07167C12.1735 2.86253 7.28081 4.17353 5.07167 7.99987C4.05722 9.75694 3.78506 11.7389 4.15789 13.5826M19.9085 10.7924C20.1745 12.5275 19.874 14.3614 18.9281 15.9999C16.7189 19.8262 11.8262 21.1372 7.99987 18.9281C7.19564 18.4638 6.50253 17.8809 5.92987 17.2143" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
