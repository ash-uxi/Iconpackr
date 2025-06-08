import React from 'react';

/**
 * PiPlaySmallContrast icon from the contrast style in media category.
 */
interface PiPlaySmallContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaySmallContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'play-small icon',
  ...props
}: PiPlaySmallContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M7 11.808c0-2.643 0-3.964.552-4.702a2.77 2.77 0 0 1 2.02-1.102c.918-.065 2.03.649 4.253 2.078l.298.192c1.93 1.24 2.894 1.86 3.227 2.649a2.77 2.77 0 0 1 0 2.155c-.333.788-1.298 1.408-3.227 2.648l-.298.192c-2.223 1.429-3.335 2.143-4.254 2.078a2.77 2.77 0 0 1-2.019-1.102C7 16.156 7 14.834 7 12.192z" opacity=".28"/>
  <path d="M7 11.808c0-2.643 0-3.964.552-4.702a2.77 2.77 0 0 1 2.02-1.102c.918-.065 2.03.649 4.253 2.078l.298.192c1.93 1.24 2.894 1.86 3.227 2.649a2.77 2.77 0 0 1 0 2.155c-.333.788-1.298 1.408-3.227 2.648l-.298.192c-2.223 1.429-3.335 2.143-4.254 2.078a2.77 2.77 0 0 1-2.019-1.102C7 16.156 7 14.834 7 12.192z"/>
    </svg>
  );
}
