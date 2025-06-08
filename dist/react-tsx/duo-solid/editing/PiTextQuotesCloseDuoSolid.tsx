import React from 'react';

/**
 * PiTextQuotesCloseDuoSolid icon from the duo-solid style in editing category.
 */
interface PiTextQuotesCloseDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesCloseDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-close icon',
  ...props
}: PiTextQuotesCloseDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M10 10a9.4 9.4 0 0 1-4 7.698M20 10a9.4 9.4 0 0 1-4 7.698" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M7 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m10 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" />
    </svg>
  );
}
