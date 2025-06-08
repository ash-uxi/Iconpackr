import React from 'react';

/**
 * PiChevronSortVerticalContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiChevronSortVerticalContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronSortVerticalContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-sort-vertical icon',
  ...props
}: PiChevronSortVerticalContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M12.298 5.106A20.4 20.4 0 0 1 16 9c-2.663-.2-5.337-.2-8 0a20.4 20.4 0 0 1 3.702-3.894.47.47 0 0 1 .596 0M11.702 18.894A20.4 20.4 0 0 1 8 15c2.663.2 5.337.2 8 0a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"/>
  </g>
  <path d="M11.702 18.894A20.4 20.4 0 0 1 8 15c2.663.2 5.337.2 8 0a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M12.298 5.106A20.4 20.4 0 0 1 16 9c-2.663-.2-5.337-.2-8 0a20.4 20.4 0 0 1 3.702-3.894.47.47 0 0 1 .596 0"/>
    </svg>
  );
}
