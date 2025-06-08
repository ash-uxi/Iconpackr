import React from 'react';

/**
 * PiThreeDotsMenuVerticalSquareDuoStroke icon from the duo-stroke style in general category.
 */
interface PiThreeDotsMenuVerticalSquareDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuVerticalSquareDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-vertical-square icon',
  ...props
}: PiThreeDotsMenuVerticalSquareDuoStrokeProps): JSX.Element {
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
      <path d="M12.0049 16.0061V15.9961M12.0049 12.0061V11.9961M12.0049 8.00609V7.99609" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.7039 20.5433C7.80653 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672C16.1935 3 14.7956 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06569 18.7663 5.23373 19.9343 6.7039 20.5433Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
