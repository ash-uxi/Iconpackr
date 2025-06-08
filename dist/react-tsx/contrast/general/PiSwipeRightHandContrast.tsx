import React from 'react';

/**
 * PiSwipeRightHandContrast icon from the contrast style in general category.
 */
interface PiSwipeRightHandContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwipeRightHandContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'swipe-right-hand icon',
  ...props
}: PiSwipeRightHandContrastProps): JSX.Element {
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
      <path d="M7.415 2c.79.369 1.527.838 2.193 1.395a.32.32 0 0 1 .108.18v.004M8.206 5.92a10 10 0 0 0 1.48-2.136.3.3 0 0 0 .03-.205m0 0 .024-.003m-.024.003A14.95 14.95 0 0 0 2 7.226m5.716 10.348-2.132-7.488a.79.79 0 0 1 .63-.997 3.16 3.16 0 0 1 3.42 1.86l.852 1.964 2.946-9.556a2 2 0 0 1 3.822 1.178l-1.767 5.734 4.359 2.182c3.196 1.6 2.162 5.458.382 7.762-3.135 4.058-11.127 2.225-12.512-2.64"/>
  <path fill="currentColor" d="m7.716 17.574-2.132-7.488a.79.79 0 0 1 .63-.997 3.16 3.16 0 0 1 3.42 1.86l.852 1.964 2.946-9.556a2 2 0 0 1 3.822 1.178l-1.767 5.734 4.359 2.182c3.196 1.6 2.162 5.458.382 7.762-3.135 4.058-11.127 2.225-12.512-2.64" opacity=".28"/>
    </svg>
  );
}
