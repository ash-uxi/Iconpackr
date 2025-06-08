import React from 'react';

/**
 * PiFolderSettingsStroke icon from the stroke style in files-&-folders category.
 */
interface PiFolderSettingsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderSettingsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-settings icon',
  ...props
}: PiFolderSettingsStrokeProps): JSX.Element {
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
      <path d="M11.1741 21H8.4C6.15979 21 5.03968 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H8.71556C9.18517 3 9.41997 3 9.6331 3.06473C9.82179 3.12203 9.99732 3.21597 10.1497 3.34118C10.3217 3.48262 10.452 3.67798 10.7125 4.06872L11.2875 4.93128C11.548 5.32202 11.6783 5.51739 11.8503 5.65882C12.0027 5.78403 12.1782 5.87797 12.3669 5.93527C12.58 6 12.8148 6 13.2844 6H15.6C17.8402 6 18.9603 6 19.816 6.43597C20.5686 6.81947 21.1805 7.43139 21.564 8.18404C21.9256 8.89365 21.9873 9.78516 21.9978 11.3466M18 18H18.01M18 14L19.1787 15.1545L20.8284 15.1716L20.8455 16.8213L22 18L20.8455 19.1787L20.8284 20.8284L19.1787 20.8455L18 22L16.8213 20.8455L15.1716 20.8284L15.1545 19.1787L14 18L15.1545 16.8213L15.1716 15.1716L16.8213 15.1545L18 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
