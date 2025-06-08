import React from 'react';

/**
 * PiTiktokStroke icon from the stroke style in apps-&-social category.
 */
interface PiTiktokStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTiktokStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'tiktok icon',
  ...props
}: PiTiktokStrokeProps): JSX.Element {
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
      <path d="M19.5445 7.55556C17.4634 7.2087 15.6956 5.83992 14.8387 3.91194L13.989 2V17.5556C13.989 20.0102 11.9991 22 9.54454 22C7.08994 22 5.1001 20.0102 5.1001 17.5556C5.1001 15.101 7.08994 13.1111 9.54454 13.1111" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
