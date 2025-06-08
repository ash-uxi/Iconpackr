import React from 'react';

/**
 * PiSwapArrowHorizontalSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiSwapArrowHorizontalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowHorizontalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-horizontal icon',
  ...props
}: PiSwapArrowHorizontalSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M17.7077 3.19599C17.3934 2.96353 16.9724 2.93556 16.6301 3.12437C16.2878 3.31319 16.0869 3.68417 16.1158 4.07403L16.2809 6.29732C16.2982 6.53137 16.312 6.76563 16.3222 7H7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9H16.3222C16.312 9.23438 16.2982 9.46863 16.2809 9.70269L16.1158 11.926C16.0869 12.3158 16.2878 12.6868 16.6301 12.8756C16.9724 13.0644 17.3934 13.0365 17.7077 12.804C19.1791 11.7158 20.5011 10.4443 21.6408 9.02138C21.879 8.72403 22 8.36247 22 8C22 7.63753 21.879 7.27597 21.6408 6.97863C20.5011 5.55575 19.1791 4.28421 17.7077 3.19599Z" fill="currentColor" stroke="none"/>
  <path d="M7.88419 12.074C7.91313 11.6842 7.71223 11.3132 7.36992 11.1244C7.0276 10.9356 6.60665 10.9635 6.29233 11.196C4.82086 12.2842 3.49888 13.5558 2.35919 14.9786C2.12102 15.276 2 15.6375 2 16C2 16.3625 2.12102 16.724 2.35919 17.0214C3.49888 18.4443 4.82086 19.7158 6.29233 20.804C6.60664 21.0365 7.0276 21.0644 7.36992 20.8756C7.71223 20.6868 7.91313 20.3158 7.88419 19.926L7.71915 17.7027C7.70177 17.4686 7.68799 17.2344 7.67779 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7.67779C7.68799 14.7656 7.70177 14.5314 7.71915 14.2973L7.88419 12.074Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
