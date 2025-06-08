import React from 'react';

/**
 * PiHeartDuoSolid icon from the duo-solid style in general category.
 */
interface PiHeartDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeartDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'heart icon',
  ...props
}: PiHeartDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} fillRule="evenodd" d="M12 3.836C10.147 1.93 7.612 1.605 5.458 2.42A6.925 6.925 0 0 0 1 8.944c0 3.944 2.508 7.208 4.957 9.41a22.7 22.7 0 0 0 3.55 2.613c.518.305.987.548 1.372.718.35.155.733.315 1.121.315s.772-.16 1.121-.315c.385-.17.854-.413 1.371-.718a22.7 22.7 0 0 0 3.552-2.614C20.492 16.153 23 12.888 23 8.944a6.92 6.92 0 0 0-4.46-6.52c-2.154-.813-4.688-.49-6.54 1.412" clipRule="evenodd" opacity=".28" /> <path d="M2 8.944C2 3.502 8.832.654 12 5.427c3.162-4.765 10-1.92 10 3.517" />
    </svg>
  );
}
