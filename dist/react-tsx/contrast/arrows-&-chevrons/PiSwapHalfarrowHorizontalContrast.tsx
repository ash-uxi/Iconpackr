import React from 'react';

/**
 * PiSwapHalfarrowHorizontalContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiSwapHalfarrowHorizontalContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapHalfarrowHorizontalContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-halfarrow-horizontal icon',
  ...props
}: PiSwapHalfarrowHorizontalContrastProps): JSX.Element {
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
    <path d="M17.113 6a20.2 20.2 0 0 1 3.747 3.604c.093.116.14.256.14.396h-3.656q0-.89-.066-1.777zM6.887 18a20.2 20.2 0 0 1-3.747-3.604A.63.63 0 0 1 3 14h3.656q0 .89.066 1.777z"/>
  </g>
  <path d="M17.344 10H21c0-.14-.047-.28-.14-.396A20.2 20.2 0 0 0 17.113 6l.165 2.223q.066.888.066 1.777m0 0H6m.656 4H3c0 .14.047.28.14.396A20.2 20.2 0 0 0 6.887 18l-.165-2.223A24 24 0 0 1 6.656 14m0 0H18"/>
    </svg>
  );
}
