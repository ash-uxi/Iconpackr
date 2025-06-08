import React from 'react';

/**
 * PiAppleNewSiriContrast icon from the contrast style in ai category.
 */
interface PiAppleNewSiriContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleNewSiriContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-new-siri icon',
  ...props
}: PiAppleNewSiriContrastProps): JSX.Element {
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
      <path d="M11.402 15c-1.22.94-2.64 1.758-3.888 1.758a4.514 4.514 0 0 1 0-9.028c2.931 0 6.814 4.514 6.814 4.514s2.338 2.719 4.103 2.719a2.718 2.718 0 0 0 0-5.437c-.311 0-.64.085-.971.224"/>
  <circle cx="12" cy="12" r="9.15" fill="currentColor" opacity=".28"/>
  <circle cx="12" cy="12" r="9.15"/>
    </svg>
  );
}
