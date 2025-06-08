import React from 'react';

/**
 * PiVolumeOffDuoStroke icon from the duo-stroke style in media category.
 */
interface PiVolumeOffDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeOffDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-off icon',
  ...props
}: PiVolumeOffDuoStrokeProps): JSX.Element {
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
      <path d="M17 6.99994V5.10721C17 3.39628 15.0661 2.40106 13.6739 3.39552L10.8609 5.40477C10.2934 5.81012 9.6464 6.09043 8.96255 6.2272C6.6585 6.68801 5 8.71106 5 11.0607V12.9787C5 14.5984 5.78809 16.0629 7.03247 16.9675M17 12.6479V18.9322C17 20.6432 15.0661 21.6384 13.6739 20.6439L10.9498 18.6981" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21.9999 2L2 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
