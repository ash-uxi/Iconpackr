import React from 'react';

/**
 * PiFirefoxBrowserStroke icon from the stroke style in apps-&-social category.
 */
interface PiFirefoxBrowserStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFirefoxBrowserStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'firefox-browser icon',
  ...props
}: PiFirefoxBrowserStrokeProps): JSX.Element {
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
      <path d="M12.0335 21.8118C4.97353 21.8118 -0.370604 13.8311 3.07254 7.51799C3.73439 6.30446 4.69098 5.277 5.85419 4.53024C5.79992 5.38759 5.91329 6.2473 6.18795 7.06128H6.2204C6.88991 6.30157 7.6947 5.67283 8.59383 5.20704C8.51634 5.5901 8.47597 5.97975 8.47331 6.37057C8.47544 7.53279 9.07246 8.22568 10.068 8.84135C11.2176 9.47179 12.0335 9.85191 12.0335 9.85191C11.0905 11.7457 7.38578 11.4836 7.52764 12.7399C7.52764 12.7399 8.07928 16.4159 11.9546 16.4159C13.3824 16.4159 16.2101 15.6279 16.2101 12.3227C16.2196 11.576 16.0247 10.8408 15.6464 10.197C15.268 9.5531 14.7208 9.02499 14.0638 8.66983C14.5266 8.61234 14.9963 8.64968 15.4442 8.77958C15.8921 8.90949 16.3088 9.12924 16.6691 9.42544C16.2115 8.59673 15.4442 8.18659 14.7248 7.42485C13.0662 5.20704 12.6623 2.69482 15.1486 1.15552C16.4373 3.90192 19.2327 5.66053 20.2941 8.51686C20.1117 7.49456 19.7888 6.50241 19.3345 5.56861C19.3345 5.56861 22 7.13081 22 11.9055C21.9207 17.2921 17.4204 21.7652 12.0335 21.8118Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
