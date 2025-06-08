import React from 'react';

/**
 * PiFirefoxBrowserContrast icon from the contrast style in apps-&-social category.
 */
interface PiFirefoxBrowserContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFirefoxBrowserContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'firefox-browser icon',
  ...props
}: PiFirefoxBrowserContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12.034 21.812c-7.06 0-12.405-7.98-8.961-14.294A8.24 8.24 0 0 1 5.854 4.53a6.6 6.6 0 0 0 .334 2.531h.032a8.2 8.2 0 0 1 2.374-1.854 6 6 0 0 0-.12 1.164c.001 1.162.598 1.855 1.594 2.47 1.15.63 1.966 1.01 1.966 1.01-.944 1.895-4.648 1.633-4.506 2.889 0 0 .551 3.676 4.427 3.676 1.427 0 4.255-.788 4.255-4.093a4.09 4.09 0 0 0-2.146-3.653 3.44 3.44 0 0 1 2.605.755c-.457-.828-1.225-1.238-1.944-2-1.659-2.218-2.063-4.73.424-6.27 1.288 2.747 4.084 4.506 5.145 7.362a11.3 11.3 0 0 0-.96-2.948S22 7.13 22 11.906c-.08 5.386-4.58 9.86-9.966 9.906" opacity=".28"/>
  <path d="M12.034 21.812c-7.06 0-12.405-7.98-8.961-14.294A8.24 8.24 0 0 1 5.854 4.53a6.6 6.6 0 0 0 .334 2.531h.032a8.2 8.2 0 0 1 2.374-1.854 6 6 0 0 0-.12 1.164c.001 1.162.598 1.855 1.594 2.47 1.15.63 1.966 1.01 1.966 1.01-.944 1.895-4.648 1.633-4.506 2.889 0 0 .551 3.676 4.427 3.676 1.427 0 4.255-.788 4.255-4.093a4.09 4.09 0 0 0-2.146-3.653 3.44 3.44 0 0 1 2.605.755c-.457-.828-1.225-1.238-1.944-2-1.659-2.218-2.063-4.73.424-6.27 1.288 2.747 4.084 4.506 5.145 7.362a11.3 11.3 0 0 0-.96-2.948S22 7.13 22 11.906c-.08 5.386-4.58 9.86-9.966 9.906"/>
    </svg>
  );
}
