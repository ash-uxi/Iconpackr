import React from 'react';

/**
 * PiUturnUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiUturnUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-up icon',
  ...props
}: PiUturnUpContrastProps): JSX.Element {
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
      <path d="M16 7.795V15a5 5 0 0 1-10 0v-3m10-4.205q.883 0 1.764.065l2.32.17a20.8 20.8 0 0 0-3.68-3.885.64.64 0 0 0-.809 0 20.8 20.8 0 0 0-3.678 3.886l2.32-.171A24 24 0 0 1 16 7.795"/>
  <path fill="currentColor" d="M16.404 4.145a20.8 20.8 0 0 1 3.68 3.886l-2.32-.171a24 24 0 0 0-3.528 0l-2.32.17a20.8 20.8 0 0 1 3.68-3.885.64.64 0 0 1 .808 0" opacity=".28"/>
    </svg>
  );
}
