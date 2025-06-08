import React from 'react';

/**
 * PiAlignHorizontalCenterContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiAlignHorizontalCenterContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignHorizontalCenterContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'align-horizontal-center icon',
  ...props
}: PiAlignHorizontalCenterContrastProps): JSX.Element {
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
    <path d="M14.12 11.703c.925-1.017 2-1.925 3.196-2.703a30.6 30.6 0 0 0 0 6 16.4 16.4 0 0 1-3.197-2.703A.44.44 0 0 1 14 12c0-.105.04-.21.12-.297M9.88 12.297c-.925 1.017-2 1.925-3.196 2.703a30.6 30.6 0 0 0 0-6 16.4 16.4 0 0 1 3.197 2.703A.44.44 0 0 1 10 12a.44.44 0 0 1-.12.297"/>
  </g>
  <path d="M17.168 12H21m-3.832 0q0-1.502.148-3a16.4 16.4 0 0 0-3.197 2.703A.44.44 0 0 0 14 12c0 .105.04.21.12.297.925 1.017 2 1.925 3.196 2.703a31 31 0 0 1-.148-3M6.832 12H3m3.832 0q0 1.502-.148 3a16.4 16.4 0 0 0 3.197-2.703A.44.44 0 0 0 10 12a.44.44 0 0 0-.12-.297c-.925-1.017-2-1.925-3.196-2.703q.147 1.498.148 3M12 5v14"/>
    </svg>
  );
}
