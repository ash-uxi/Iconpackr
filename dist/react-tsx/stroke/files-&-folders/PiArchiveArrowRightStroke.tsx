import React from 'react';

/**
 * PiArchiveArrowRightStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveArrowRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveArrowRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-arrow-right icon',
  ...props
}: PiArchiveArrowRightStrokeProps): JSX.Element {
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
      <path d="M12.59 17.0707C13.4354 16.4369 14.1995 15.7014 14.865 14.8807C14.9525 14.773 15.0002 14.6385 15 14.4997M15 14.4997C15 14.3647 14.955 14.2307 14.865 14.1187C14.2 13.2987 13.436 12.5627 12.59 11.9287M15 14.4997H9" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4 8H20M4 8V17C4 18.0609 4.42143 19.0783 5.17157 19.8284C5.92172 20.5786 6.93913 21 8 21H16C17.0609 21 18.0783 20.5786 18.8284 19.8284C19.5786 19.0783 20 18.0609 20 17V8M4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
