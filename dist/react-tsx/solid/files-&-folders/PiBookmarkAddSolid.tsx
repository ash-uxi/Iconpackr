import React from 'react';

/**
 * PiBookmarkAddSolid icon from the solid style in files-&-folders category.
 */
interface PiBookmarkAddSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBookmarkAddSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bookmark-add icon',
  ...props
}: PiBookmarkAddSolidProps): JSX.Element {
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
      <path d="M11.8005 1.00003H12.1996C13.8686 0.999591 14.948 0.999304 15.8542 1.29373C17.6808 1.88724 19.1129 3.31934 19.7064 5.14597C20.0008 6.05212 20.0005 7.1315 20.0001 8.80051L20.0001 22.0001C20.0001 22.3906 19.7727 22.7454 19.4179 22.9086C19.0631 23.0718 18.6458 23.0135 18.3493 22.7593L16.5556 21.2219C15.6202 20.4201 14.9604 19.8555 14.4067 19.4495C13.8631 19.0509 13.4805 18.8505 13.1187 18.7451C12.3881 18.5323 11.612 18.5323 10.8814 18.7451C10.5196 18.8505 10.137 19.0509 9.59342 19.4495C9.0397 19.8555 8.37996 20.4201 7.44453 21.2219L5.65086 22.7593C5.35435 23.0135 4.93701 23.0718 4.58221 22.9086C4.22741 22.7454 4.00007 22.3906 4.00007 22.0001L4.00003 8.8005C3.99959 7.1315 3.9993 6.05211 4.29373 5.14597C4.88724 3.31934 6.31934 1.88724 8.14597 1.29373C9.05211 0.999304 10.1315 0.999591 11.8005 1.00003ZM13.0001 7C13.0001 6.44772 12.5524 6 12.0001 6C11.4478 6 11.0001 6.44772 11.0001 7V9H9.00012C8.44784 9 8.00012 9.44772 8.00012 10C8.00012 10.5523 8.44784 11 9.00012 11H11.0001V13C11.0001 13.5523 11.4478 14 12.0001 14C12.5524 14 13.0001 13.5523 13.0001 13V11H15.0001C15.5524 11 16.0001 10.5523 16.0001 10C16.0001 9.44772 15.5524 9 15.0001 9H13.0001V7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
