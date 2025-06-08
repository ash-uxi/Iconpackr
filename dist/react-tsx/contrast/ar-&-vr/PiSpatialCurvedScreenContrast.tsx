import React from 'react';

/**
 * PiSpatialCurvedScreenContrast icon from the contrast style in ar-&-vr category.
 */
interface PiSpatialCurvedScreenContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpatialCurvedScreenContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'spatial-curved-screen icon',
  ...props
}: PiSpatialCurvedScreenContrastProps): JSX.Element {
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
      <path d="M16 20.996h-5m-2.99 0H8m12.662-3.401a28.998 28.998 0 0 0-16.675-.193c-.16.046-.323.095-.649.193l-.086.025a1 1 0 0 1-1.251-.93L2 16.6V4.302a1 1 0 0 1 1.338-.905c.326.098.489.146.649.192a29 29 0 0 0 16.026 0c.16-.046.323-.094.649-.192l.086-.025a1 1 0 0 1 1.251.93l.001.09V16.69a1 1 0 0 1-1.252.931z"/>
  <path fill="currentColor" d="M2 4.393v-.09a1 1 0 0 1 1.338-.905c.326.098.489.146.649.192a29 29 0 0 0 16.026 0c.16-.046.323-.094.649-.192l.086-.025a1 1 0 0 1 1.251.93l.001.09V16.69a1 1 0 0 1-1.252.931l-.086-.025a28.998 28.998 0 0 0-16.675-.193c-.16.046-.323.095-.649.193l-.086.025a1 1 0 0 1-1.251-.93L2 16.6z" opacity=".35"/>
    </svg>
  );
}
