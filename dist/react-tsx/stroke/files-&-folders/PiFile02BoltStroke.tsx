import React from 'react';

/**
 * PiFile02BoltStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02BoltStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02BoltStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-bolt icon',
  ...props
}: PiFile02BoltStrokeProps): JSX.Element {
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
      <path d="M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H11M20 11V10C20 5.58172 16.4183 2 12 2H11M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M12 10.5L10.198 12.9026C9.82394 13.4014 9.6369 13.6508 9.65 13.8368C9.66136 13.9981 9.75002 14.1439 9.88798 14.2282C10.0471 14.3255 10.3546 14.2742 10.9695 14.1717L13.0304 13.8283C13.6454 13.7258 13.9529 13.6745 14.112 13.7718C14.25 13.8561 14.3386 14.0019 14.35 14.1632C14.3631 14.3492 14.1761 14.5986 13.802 15.0974L12 17.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
