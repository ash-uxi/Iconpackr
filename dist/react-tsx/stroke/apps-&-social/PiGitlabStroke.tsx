import React from 'react';

/**
 * PiGitlabStroke icon from the stroke style in apps-&-social category.
 */
interface PiGitlabStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitlabStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'gitlab icon',
  ...props
}: PiGitlabStrokeProps): JSX.Element {
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
      <path d="M8.11751 8.08657L6.35376 2.92646C6.159 2.35666 5.36702 2.35825 5.17446 2.92882L2.78248 10.0165C2.07313 12.1184 2.72872 14.4476 4.42379 15.8479L10.6931 21.0269C11.4552 21.6564 12.5458 21.6579 13.3095 21.0303L19.5657 15.8895C21.2665 14.492 21.9273 12.1606 21.2194 10.0552L18.8245 2.9327C18.6325 2.36156 17.8399 2.35953 17.645 2.92967L15.8824 8.08656C15.7369 8.51213 15.3429 8.79734 14.9003 8.79734H9.09959C8.65703 8.79734 8.26297 8.51214 8.11751 8.08657Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
