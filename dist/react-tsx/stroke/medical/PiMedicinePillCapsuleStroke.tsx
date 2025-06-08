import React from 'react';

/**
 * PiMedicinePillCapsuleStroke icon from the stroke style in medical category.
 */
interface PiMedicinePillCapsuleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillCapsuleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pill-capsule icon',
  ...props
}: PiMedicinePillCapsuleStrokeProps): JSX.Element {
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
      <path d="M8.2864 8.28652L4.22181 12.3511C2.17085 14.4021 2.17085 17.7273 4.22181 19.7783C6.27277 21.8292 9.59804 21.8292 11.649 19.7783L15.7136 15.7137M8.2864 8.28652L12.351 4.22194C14.4019 2.17098 17.7272 2.17098 19.7782 4.22194C21.8291 6.2729 21.8291 9.59816 19.7782 11.6491L15.7136 15.7137M8.2864 8.28652L15.7136 15.7137M13.4083 8.47037L15.176 6.70261C15.6378 6.24079 16.3259 6.14305 16.8834 6.40941" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
