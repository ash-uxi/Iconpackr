import React from 'react';

/**
 * PiLayerThreeDuoStroke icon from the duo-stroke style in security category.
 */
interface PiLayerThreeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayerThreeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'layer-three icon',
  ...props
}: PiLayerThreeDuoStrokeProps): JSX.Element {
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
      <path d="M21 12C20.8809 12.2538 20.5097 12.4413 19.7673 12.8164L13.4417 16.012C12.9131 16.279 12.6488 16.4125 12.3715 16.4651C12.126 16.5116 11.874 16.5116 11.6285 16.4651C11.3513 16.4125 11.0869 16.279 10.5583 16.012L4.23275 12.8164C3.49033 12.4413 3.11912 12.2538 3 12M21 16.5C20.8809 16.7538 20.5097 16.9413 19.7673 17.3164L13.4417 20.512C12.9131 20.779 12.6488 20.9125 12.3715 20.9651C12.126 21.0116 11.874 21.0116 11.6285 20.9651C11.3513 20.9125 11.0869 20.779 10.5583 20.512L4.23275 17.3164C3.49033 16.9413 3.11912 16.7538 3 16.5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.29927 8.58144C3.56321 8.23337 3.19518 8.05933 3.07708 7.82383C2.97431 7.61888 2.97431 7.38112 3.07708 7.17617C3.19518 6.94067 3.56321 6.76663 4.29927 6.41856L10.5707 3.45291C11.0948 3.20508 11.3568 3.08117 11.6317 3.0324C11.8751 2.9892 12.1249 2.9892 12.3683 3.0324C12.6432 3.08117 12.9052 3.20508 13.4293 3.45291L19.7007 6.41856C20.4368 6.76663 20.8048 6.94067 20.9229 7.17617C21.0257 7.38112 21.0257 7.61888 20.9229 7.82383C20.8048 8.05933 20.4368 8.23337 19.7007 8.58144L13.4293 11.5471C12.9052 11.7949 12.6432 11.9188 12.3683 11.9676C12.1249 12.0108 11.8751 12.0108 11.6317 11.9676C11.3568 11.9188 11.0948 11.7949 10.5707 11.5471L4.29927 8.58144Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
