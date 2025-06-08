import React from 'react';

/**
 * PiRefreshDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiRefreshDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRefreshDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'refresh icon',
  ...props
}: PiRefreshDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M17.51 1.47a1 1 0 0 1 .91.607 16 16 0 0 1 1.118 3.975 1.48 1.48 0 0 1-.917 1.588 16 16 0 0 1-4.001 1.02 1 1 0 0 1-.932-1.577l.358-.498a23 23 0 0 0 2.29-3.968l.253-.558a1 1 0 0 1 .921-.589" clipRule="evenodd" /> <path d="M8 18.928a8 8 0 0 0 11.909-8.136m-3.91-5.72a8 8 0 0 0-11.841 8.51" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M9.38 15.337a1 1 0 0 1 .932 1.577l-.358.497a23 23 0 0 0-2.29 3.968l-.252.558a1 1 0 0 1-1.832-.018 16 16 0 0 1-1.118-3.975 1.48 1.48 0 0 1 .917-1.588 16 16 0 0 1 4.001-1.019" clipRule="evenodd" />
    </svg>
  );
}
