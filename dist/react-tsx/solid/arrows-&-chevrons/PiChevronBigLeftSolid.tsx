import React from 'react';

/**
 * PiChevronBigLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronBigLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-left icon',
  ...props
}: PiChevronBigLeftSolidProps): JSX.Element {
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
      <path d="M14.414 5.18967C14.7306 4.96077 15.1514 4.93714 15.4916 5.12918C15.8318 5.32122 16.029 5.69376 15.9965 6.08305C15.6684 10.0209 15.6684 13.9791 15.9965 17.917C16.029 18.3062 15.8318 18.6788 15.4916 18.8708C15.1514 19.0629 14.7306 19.0392 14.414 18.8103C12.163 17.1825 10.1434 15.2764 8.40697 13.141C7.86434 12.4737 7.86434 11.5263 8.40697 10.859C10.1434 8.72356 12.163 6.81746 14.414 5.18967Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
