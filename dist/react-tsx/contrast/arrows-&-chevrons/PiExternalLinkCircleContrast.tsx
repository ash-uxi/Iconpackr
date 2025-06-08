import React from 'react';

/**
 * PiExternalLinkCircleContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiExternalLinkCircleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExternalLinkCircleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'external-link-circle icon',
  ...props
}: PiExternalLinkCircleContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M19.902 4.543c.168 1.628.12 3.28-.142 4.913L18.614 8.11a24 24 0 0 0-2.722-2.722l-1.347-1.146A18.8 18.8 0 0 1 19.46 4.1a.496.496 0 0 1 .443.443" opacity=".28"/>
  <path d="M19.974 13.5A7.11 7.11 0 0 1 12.89 20H12a8 8 0 0 1-8-8v-.889a7.11 7.11 0 0 1 6.5-7.085m6.808 2.668L10 14.002m7.308-7.308q.681.681 1.306 1.416l1.146 1.346c.262-1.633.31-3.285.142-4.913a.495.495 0 0 0-.443-.443 18.8 18.8 0 0 0-4.913.142l1.346 1.146q.735.625 1.416 1.306"/>
    </svg>
  );
}
