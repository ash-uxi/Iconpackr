import React from 'react';

/**
 * PiArrowRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightSolidProps): JSX.Element {
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
      <path d="M14.1709 6.05001L14.4187 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L14.4187 13L14.1709 17.95C14.1515 18.3361 14.3565 18.6988 14.6972 18.8814C15.0379 19.064 15.4534 19.0339 15.7642 18.804C17.9368 17.1973 19.8885 15.32 21.571 13.2195C21.8557 12.864 22 12.4325 22 12C22 11.5675 21.8557 11.136 21.571 10.7805C19.8885 8.68002 17.9368 6.80273 15.7642 5.19599C15.4534 4.96612 15.0379 4.936 14.6972 5.11862C14.3565 5.30125 14.1515 5.66391 14.1709 6.05001Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
