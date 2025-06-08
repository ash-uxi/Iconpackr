import React from 'react';

/**
 * PiCloudDefaultDuoStroke icon from the duo-stroke style in weather category.
 */
interface PiCloudDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-default icon',
  ...props
}: PiCloudDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M16.4997 20C19.5372 20 21.9997 17.5376 21.9997 14.5C21.9997 12.2323 20.6273 10.2852 18.6677 9.44382C17.8073 6.86169 15.3709 5 12.4997 5C9.06934 5 6.25966 7.65724 6.0167 11.0256C5.96884 11.6892 6.02469 12.3697 6.17358 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.01705 11.0256C6.26 7.65724 9.06969 5 12.5 5C15.3713 5 17.8077 6.86169 18.6681 9.44382C20.6276 10.2852 22 12.2323 22 14.5C22 17.5376 19.5376 20 16.5 20H6.5C4.01472 20 2 17.9853 2 15.5C2 13.1779 3.75887 11.2666 6.01705 11.0256ZM6.01705 11.0256C5.96918 11.6892 6.02504 12.3697 6.17393 13" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
