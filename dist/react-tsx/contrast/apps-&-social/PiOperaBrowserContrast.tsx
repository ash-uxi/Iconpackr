import React from 'react';

/**
 * PiOperaBrowserContrast icon from the contrast style in apps-&-social category.
 */
interface PiOperaBrowserContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiOperaBrowserContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'opera-browser icon',
  ...props
}: PiOperaBrowserContrastProps): JSX.Element {
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
      <path d="M15.614 17a8.02 8.02 0 0 0 0-10m1.07 12.862A9.15 9.15 0 0 0 21.15 12c0-3.35-1.8-6.279-4.485-7.873m.02 15.735a9.15 9.15 0 1 1-.02-15.735m.02 15.735-.061.012A7.936 7.936 0 0 1 7.182 12 8.02 8.02 0 0 1 15.2 3.982q.725.002 1.439.133l.026.012"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 0 0 13.834 7.862l-.06.012A7.936 7.936 0 0 1 7.182 12 8.02 8.02 0 0 1 15.2 3.982q.725.002 1.439.133l.026.012A9.15 9.15 0 0 0 2.85 12" opacity=".28"/>
    </svg>
  );
}
