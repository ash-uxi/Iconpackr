import React from 'react';

/**
 * PiDoubleChevronUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiDoubleChevronUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-up icon',
  ...props
}: PiDoubleChevronUpContrastProps): JSX.Element {
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
    <path d="M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"/>
  </g>
  <path d="M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"/>
    </svg>
  );
}
