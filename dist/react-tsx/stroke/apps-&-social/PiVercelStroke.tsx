import React from 'react';

/**
 * PiVercelStroke icon from the stroke style in apps-&-social category.
 */
interface PiVercelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVercelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'vercel icon',
  ...props
}: PiVercelStrokeProps): JSX.Element {
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
      <path d="M11.138 3.46564C11.5246 2.80833 12.4752 2.80833 12.8619 3.46564L21.1134 17.4933C21.5056 18.16 21.0249 19.0003 20.2515 19.0003H3.74834C2.97493 19.0003 2.49427 18.16 2.88641 17.4933L11.138 3.46564Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
