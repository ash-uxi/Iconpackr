import React from 'react';

/**
 * PiEggDefaultContrast icon from the contrast style in food category.
 */
interface PiEggDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEggDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'egg-default icon',
  ...props
}: PiEggDefaultContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611" opacity=".28"/>
  <path d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611"/>
    </svg>
  );
}
