import React from 'react';

/**
 * PiArchiveBoltStroke icon from the stroke style in files-&-folders category.
 */
interface PiArchiveBoltStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveBoltStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-bolt icon',
  ...props
}: PiArchiveBoltStrokeProps): JSX.Element {
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
      <path d="M12 11L9.74897 14.002C9.68913 14.0819 9.65458 14.1779 9.64975 14.2776C9.64493 14.3773 9.67006 14.4761 9.7219 14.5614C9.77375 14.6467 9.84994 14.7146 9.94067 14.7562C10.0314 14.7978 10.1325 14.8113 10.231 14.795L13.769 14.205C13.8674 14.1887 13.9686 14.2022 14.0593 14.2438C14.15 14.2854 14.2262 14.3533 14.278 14.4386C14.3299 14.5239 14.355 14.6227 14.3502 14.7224C14.3454 14.8221 14.3108 14.9181 14.251 14.998L12 18" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4 8H20M4 8V17C4 18.0609 4.42143 19.0783 5.17157 19.8284C5.92172 20.5786 6.93913 21 8 21H16C17.0609 21 18.0783 20.5786 18.8284 19.8284C19.5786 19.0783 20 18.0609 20 17V8M4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
