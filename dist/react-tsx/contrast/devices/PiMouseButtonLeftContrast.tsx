import React from 'react';

/**
 * PiMouseButtonLeftContrast icon from the contrast style in devices category.
 */
interface PiMouseButtonLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseButtonLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-button-left icon',
  ...props
}: PiMouseButtonLeftContrastProps): JSX.Element {
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
      <path d="M12 3a7 7 0 0 1 7 7v4a7 7 0 1 1-14 0v-4a7 7 0 0 1 7-7m0 0v4.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C10.48 11 9.92 11 8.8 11H5"/>
  <path fill="currentColor" d="M5 10a7 7 0 0 1 14 0v4a7 7 0 1 1-14 0z" opacity=".28"/>
    </svg>
  );
}
