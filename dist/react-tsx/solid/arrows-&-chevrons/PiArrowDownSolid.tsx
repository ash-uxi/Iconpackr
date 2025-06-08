import React from 'react';

/**
 * PiArrowDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownSolidProps): JSX.Element {
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
      <path d="M17.95 13.1709L13 13.4187L13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4L11 13.4187L6.05001 13.1709C5.66391 13.1515 5.30125 13.3565 5.11862 13.6972C4.936 14.0379 4.96612 14.4534 5.19599 14.7642C6.80273 16.9368 8.68001 18.8885 10.7805 20.571C11.136 20.8557 11.5675 21 12 21C12.4325 21 12.864 20.8557 13.2195 20.571C15.32 18.8885 17.1973 16.9368 18.804 14.7642C19.0339 14.4534 19.064 14.0379 18.8814 13.6972C18.6988 13.3565 18.3361 13.1515 17.95 13.1709Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
