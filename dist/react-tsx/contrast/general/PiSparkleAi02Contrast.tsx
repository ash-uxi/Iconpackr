import React from 'react';

/**
 * PiSparkleAi02Contrast icon from the contrast style in general category.
 */
interface PiSparkleAi02ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSparkleAi02Contrast({
  size = 24,
  color,
  className,
  ariaLabel = 'sparkle-ai-02 icon',
  ...props
}: PiSparkleAi02ContrastProps): JSX.Element {
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
    <path d="M12.9 3c.64 5.037 2.63 8.142 8.1 9-5.19.814-7.43 3.728-8.1 9-.67-5.272-2.91-8.186-8.1-9 5.19-.814 7.43-3.728 8.1-9M5.7 3c.248 1.506 1.151 2.445 2.7 2.7-1.549.255-2.452 1.194-2.7 2.7C5.452 6.894 4.548 5.955 3 5.7 4.506 5.452 5.445 4.548 5.7 3"/>
  </g>
  <path d="M12.9 3c.64 5.037 2.63 8.142 8.1 9-5.19.814-7.43 3.728-8.1 9-.67-5.272-2.91-8.186-8.1-9 5.19-.814 7.43-3.728 8.1-9M5.7 3c.248 1.506 1.151 2.445 2.7 2.7-1.549.255-2.452 1.194-2.7 2.7C5.452 6.894 4.548 5.955 3 5.7 4.506 5.452 5.445 4.548 5.7 3"/>
    </svg>
  );
}
