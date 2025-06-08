import React from 'react';

/**
 * PiLinkChainSlantDuoStroke icon from the duo-stroke style in development category.
 */
interface PiLinkChainSlantDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkChainSlantDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-chain-slant icon',
  ...props
}: PiLinkChainSlantDuoStrokeProps): JSX.Element {
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
      <path d="M14.0505 11.3634C13.8684 11.0885 13.6563 10.8277 13.4141 10.5856C12.2574 9.42886 10.675 8.95737 9.1712 9.17109C8.13646 9.31815 7.13896 9.78964 6.34303 10.5856L4.92882 11.9998C2.9762 13.9524 2.9762 17.1182 4.92882 19.0708C6.88144 21.0235 10.0473 21.0235 11.9999 19.0708L12.707 18.3637" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9.94922 12.6363C10.1313 12.9111 10.3434 13.1719 10.5856 13.4141C11.7423 14.5708 13.3247 15.0423 14.8285 14.8286C15.8632 14.6815 16.8607 14.21 17.6567 13.4141L19.0709 11.9999C21.0235 10.0473 21.0235 6.88144 19.0709 4.92882C17.1183 2.9762 13.9524 2.9762 11.9998 4.92882L11.2927 5.63593" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
