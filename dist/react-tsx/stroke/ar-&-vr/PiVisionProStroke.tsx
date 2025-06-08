import React from 'react';

/**
 * PiVisionProStroke icon from the stroke style in ar-&-vr category.
 */
interface PiVisionProStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVisionProStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'vision-pro icon',
  ...props
}: PiVisionProStrokeProps): JSX.Element {
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
      <path d="M11.9999 6.5C16.0876 6.49999 21.9089 6.64174 21.9768 12C22.0088 14.5242 20.8645 17.1718 18.0789 17.4753C15.5041 17.7559 14.3939 15.0921 11.9999 15.0937C9.63506 15.0953 8.52625 17.7102 5.99985 17.4832C3.17732 17.2295 1.99079 14.5517 2.0231 12C2.09096 6.64182 7.91218 6.50001 11.9999 6.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
