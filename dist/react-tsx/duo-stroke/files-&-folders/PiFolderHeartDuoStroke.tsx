import React from 'react';

/**
 * PiFolderHeartDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
interface PiFolderHeartDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderHeartDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-heart icon',
  ...props
}: PiFolderHeartDuoStrokeProps): JSX.Element {
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
      <path d="M12 16.625C12.35 16.625 15.5 14.9237 15.5 12.5418C15.5 11.3509 14.45 10.515 13.4 10.5002C12.875 10.4928 12.35 10.6704 12 11.1808C11.65 10.6704 11.1159 10.5002 10.6 10.5002C9.55 10.5002 8.5 11.3509 8.5 12.5418C8.5 14.9237 11.65 16.625 12 16.625Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2 9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H8.71556C9.18517 3 9.41997 3 9.6331 3.06473C9.82179 3.12203 9.99732 3.21597 10.1497 3.34118C10.3217 3.48262 10.452 3.67798 10.7125 4.06872L11.2875 4.93128C11.548 5.32202 11.6783 5.51739 11.8503 5.65882C12.0027 5.78403 12.1782 5.87797 12.3669 5.93527C12.58 6 12.8148 6 13.2844 6H15.6C17.8402 6 18.9603 6 19.816 6.43597C20.5686 6.81947 21.1805 7.43139 21.564 8.18404C22 9.03969 22 10.1598 22 12.4V14.6C22 16.8402 22 17.9603 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C18.9603 21 17.8402 21 15.6 21H8.4C6.15979 21 5.03968 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
