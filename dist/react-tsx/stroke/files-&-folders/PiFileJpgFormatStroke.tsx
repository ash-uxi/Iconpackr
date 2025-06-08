import React from 'react';

/**
 * PiFileJpgFormatStroke icon from the stroke style in files-&-folders category.
 */
interface PiFileJpgFormatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileJpgFormatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-jpg-format icon',
  ...props
}: PiFileJpgFormatStrokeProps): JSX.Element {
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
      <path d="M21.2496 15C20.7987 14.3814 20.1812 14 19.5 14C18.1193 14 17 15.567 17 17.5C17 19.433 18.1193 21 19.5 21C20.1812 21 20.7987 20.6186 21.2496 20V18H20.5M10 19V14H11.5C12.8807 14 14 15.1193 14 16.5C14 17.8807 12.8807 19 11.5 19H10ZM10 19V21M3 18.6667V19C3 20.1046 3.89543 21 5 21C6.10457 21 7 20.1046 7 19V14H4M14 2.05752V3.2C14 4.88016 14 5.72024 14.327 6.36197C14.6146 6.92646 15.0735 7.3854 15.638 7.67302C16.2798 8 17.1198 8 18.8 8L19.9425 8M14 2.05752C13.6065 2 13.136 2 12.349 2H10.4C8.15979 2 7.03968 2 6.18404 2.43597C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4 5.03968 4 6.15979 4 8.4V10M14 2.05752C14.0957 2.07151 14.1869 2.0889 14.2769 2.11052C14.6851 2.20851 15.0753 2.37012 15.4331 2.58944C15.8368 2.83681 16.1827 3.18271 16.8745 3.87451L18.1255 5.12548C18.8173 5.81729 19.1632 6.16319 19.4106 6.56686C19.6299 6.92475 19.7915 7.31493 19.8895 7.72307C19.9111 7.81313 19.9285 7.90429 19.9425 8M19.9425 8C20 8.39354 20 8.864 20 9.65097V10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
