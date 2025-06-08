import React from 'react';

/**
 * PiLinkChainSlantStroke icon from the stroke style in development category.
 */
interface PiLinkChainSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkChainSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-chain-slant icon',
  ...props
}: PiLinkChainSlantStrokeProps): JSX.Element {
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
      <path d="M14.0505 11.3635C13.8684 11.0887 13.6563 10.8278 13.4141 10.5857C12.2574 9.42898 10.675 8.95749 9.1712 9.1712C8.13646 9.31826 7.13896 9.78975 6.34303 10.5857L4.92882 11.9999C2.9762 13.9525 2.9762 17.1183 4.92882 19.071C6.88144 21.0236 10.0473 21.0236 11.9999 19.071L12.707 18.3638M9.94929 12.6363C10.1314 12.9111 10.3435 13.1719 10.5857 13.4141C11.7424 14.5708 13.3248 15.0423 14.8286 14.8286C15.8633 14.6815 16.8608 14.21 17.6567 13.4141L19.071 11.9999C21.0236 10.0473 21.0236 6.88144 19.071 4.92882C17.1183 2.9762 13.9525 2.9762 11.9999 4.92882L11.2928 5.63593" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
