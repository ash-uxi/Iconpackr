import React from 'react';

/**
 * PiArchiveBoltSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveBoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveBoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-bolt icon',
  ...props
}: PiArchiveBoltSolidProps): JSX.Element {
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
      <path d="M3 2C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H21C21.5304 7 22.0391 6.78929 22.4142 6.41421C22.7893 6.03914 23 5.53043 23 5V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2H3ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H20C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V17C21 18.3261 20.4732 19.5979 19.5355 20.5355C18.5979 21.4732 17.3261 22 16 22H8C6.67392 22 5.40215 21.4732 4.46447 20.5355C3.52678 19.5979 3 18.3261 3 17V10ZM12.8 12.6C12.9591 12.3878 13.0275 12.1211 12.9899 11.8586C12.9524 11.596 12.8122 11.3591 12.6 11.2C12.3878 11.0409 12.1211 10.9725 11.8586 11.0101C11.596 11.0476 11.3591 11.1878 11.2 11.4L8.949 14.402C8.137 15.484 9.061 17.004 10.395 16.782L12.703 16.397L11.2 18.4C11.0409 18.6122 10.9725 18.8789 11.0101 19.1414C11.0476 19.404 11.1878 19.6409 11.4 19.8C11.6122 19.9591 11.8789 20.0275 12.1414 19.99C12.404 19.9524 12.6409 19.8122 12.8 19.6L15.051 16.598C15.863 15.516 14.94 13.996 13.605 14.218L11.297 14.603L12.8 12.6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
