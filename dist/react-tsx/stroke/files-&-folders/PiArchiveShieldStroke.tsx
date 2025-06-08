import React from 'react';

/**
 * PiArchiveShieldStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveShieldStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveShieldStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-shield icon',
  ...props
}: PiArchiveShieldStrokeProps): JSX.Element {
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
      <path d="M4 8H20M4 8V17C4 18.0609 4.42143 19.0783 5.17157 19.8284C5.92172 20.5786 6.93913 21 8 21H16C17.0609 21 18.0783 20.5786 18.8284 19.8284C19.5786 19.0783 20 18.0609 20 17V8M4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9.73595 11.9268L11.6109 11.2497C11.8409 11.1667 12.0909 11.1667 12.3209 11.2497L14.2229 11.9368C14.6089 12.0768 14.8779 12.4287 14.9099 12.8387L14.9889 13.8658C15.0456 14.6032 14.8874 15.3413 14.5336 15.9908C14.1797 16.6403 13.6453 17.1735 12.9949 17.5257L12.4759 17.8057C12.32 17.8904 12.1451 17.9339 11.9677 17.9321C11.7902 17.9304 11.6162 17.8834 11.4619 17.7957L10.9319 17.4937C10.3233 17.1468 9.82153 16.6395 9.48123 16.0272C9.14092 15.4148 8.97515 14.7208 9.00195 14.0207L9.04695 12.8688C9.06295 12.4438 9.33595 12.0708 9.73595 11.9268Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
