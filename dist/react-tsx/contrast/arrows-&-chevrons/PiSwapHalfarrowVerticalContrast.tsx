import React from 'react';

/**
 * PiSwapHalfarrowVerticalContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiSwapHalfarrowVerticalContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapHalfarrowVerticalContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-halfarrow-vertical icon',
  ...props
}: PiSwapHalfarrowVerticalContrastProps): JSX.Element {
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
    <path d="M18 17.113a20.2 20.2 0 0 1-3.604 3.747A.63.63 0 0 1 14 21v-3.656q.89 0 1.777-.066zM6 6.887A20.2 20.2 0 0 1 9.604 3.14.63.63 0 0 1 10 3v3.656q-.89 0-1.777.066z"/>
  </g>
  <path d="M14 17.344V21c.14 0 .28-.047.396-.14A20.2 20.2 0 0 0 18 17.113l-2.223.165q-.888.066-1.777.066m0 0V6m-4 .656V3c-.14 0-.28.047-.396.14A20.2 20.2 0 0 0 6 6.887l2.223-.165A24 24 0 0 1 10 6.656m0 0V18"/>
    </svg>
  );
}
