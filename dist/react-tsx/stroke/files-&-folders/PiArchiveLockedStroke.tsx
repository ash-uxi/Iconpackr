import React from 'react';

/**
 * PiArchiveLockedStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveLockedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveLockedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-locked icon',
  ...props
}: PiArchiveLockedStrokeProps): JSX.Element {
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
      <path d="M13.92 14.0508C13.712 14.0098 13.43 14.0098 12.938 14.0098H11.062C10.571 14.0098 10.288 14.0098 10.08 14.0508M13.92 14.0508C14.561 14.1788 15.04 14.7808 15.076 15.4238C15.106 15.9528 14.909 16.7068 14.669 17.1838C14.5694 17.382 14.427 17.5557 14.2522 17.6923C14.0774 17.8289 13.8744 17.925 13.658 17.9738C13.495 18.0098 13.31 18.0098 12.938 18.0098H11.062C10.69 18.0098 10.505 18.0098 10.342 17.9728C10.1257 17.9239 9.92294 17.8277 9.7483 17.6911C9.57366 17.5545 9.43147 17.3809 9.33197 17.1828C9.09197 16.7068 8.89297 15.9528 8.92397 15.4228C8.96097 14.7818 9.43897 14.1788 10.08 14.0508M13.92 14.0508C13.869 13.4348 13.89 12.7608 13.744 12.1568C13.6743 11.8681 13.5205 11.6066 13.302 11.4055C13.0836 11.2043 12.8104 11.0725 12.517 11.0268C12.194 10.9768 11.807 10.9768 11.483 11.0268C11.1896 11.0725 10.9163 11.2043 10.6979 11.4055C10.4795 11.6066 10.3257 11.8681 10.256 12.1568C10.109 12.7608 10.131 13.4348 10.08 14.0508" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4 8H20M4 8V17C4 18.0609 4.42143 19.0783 5.17157 19.8284C5.92172 20.5786 6.93913 21 8 21H16C17.0609 21 18.0783 20.5786 18.8284 19.8284C19.5786 19.0783 20 18.0609 20 17V8M4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
