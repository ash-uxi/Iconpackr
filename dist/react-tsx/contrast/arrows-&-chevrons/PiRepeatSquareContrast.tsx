import React from 'react';

/**
 * PiRepeatSquareContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiRepeatSquareContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRepeatSquareContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'repeat-square icon',
  ...props
}: PiRepeatSquareContrastProps): JSX.Element {
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
    <path d="M12 2a15.3 15.3 0 0 1 2.92 2.777.356.356 0 0 1 0 .446A15.3 15.3 0 0 1 12 8l.061-.612a24 24 0 0 0 0-4.776zM9.08 18.777A15.3 15.3 0 0 1 12 16l-.061.612a24 24 0 0 0 0 4.776L12 22a15.3 15.3 0 0 1-2.92-2.777.355.355 0 0 1 0-.446"/>
  </g>
  <path d="M12.18 5H10c-1.861 0-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C3 9.208 3 10.139 3 12s0 2.792.245 3.545A5 5 0 0 0 5 18m7.18-13q0-1.196-.119-2.388L12 2a15.3 15.3 0 0 1 2.92 2.777.356.356 0 0 1 0 .446A15.3 15.3 0 0 1 12 8l.061-.612q.12-1.192.12-2.388m-.36 14H14c1.861 0 2.792 0 3.545-.245a5 5 0 0 0 3.21-3.21C21 14.792 21 13.861 21 12s0-2.792-.245-3.545A5 5 0 0 0 19 6m-7.18 13q0-1.196.119-2.388L12 16a15.3 15.3 0 0 0-2.92 2.777.356.356 0 0 0 0 .446A15.3 15.3 0 0 0 12 22l-.061-.612q-.12-1.192-.12-2.388"/>
    </svg>
  );
}
