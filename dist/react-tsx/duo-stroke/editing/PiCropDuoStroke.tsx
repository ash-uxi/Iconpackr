import React from 'react';

/**
 * PiCropDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiCropDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCropDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crop icon',
  ...props
}: PiCropDuoStrokeProps): JSX.Element {
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
      <path d="M2 18H6V22M18 2V6H22" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.09202 6.21799C7.51984 6 8.07989 6 9.2 6H18V14.8C18 15.9201 18 16.4802 17.782 16.908C17.5903 17.2843 17.2843 17.5903 16.908 17.782C16.4802 18 15.9201 18 14.8 18H6V9.2C6 8.0799 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
