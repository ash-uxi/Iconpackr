import React from 'react';

/**
 * PiEggBrokenContrast icon from the contrast style in food category.
 */
interface PiEggBrokenContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEggBrokenContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'egg-broken icon',
  ...props
}: PiEggBrokenContrastProps): JSX.Element {
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
      <path d="M11.657 13.676c-1.309-.442-2.24-1.329-2.937-2.44a.06.06 0 0 1 .003-.069l1.813-2.51a.095.095 0 0 0 .003-.109C9.748 7.38 8.687 6.412 7.446 5.685m0 0C5.72 8.229 4.611 11.748 4.611 14.11a7.389 7.389 0 1 0 14.778 0C19.39 10.031 16.081 2.5 12 2.5c-1.718 0-3.299 1.335-4.554 3.185"/>
  <path fill="currentColor" d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611" opacity=".28"/>
    </svg>
  );
}
