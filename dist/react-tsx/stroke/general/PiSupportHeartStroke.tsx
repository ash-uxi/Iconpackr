import React from 'react';

/**
 * PiSupportHeartStroke icon from the stroke style in general category.
 */
interface PiSupportHeartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupportHeartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'support-heart icon',
  ...props
}: PiSupportHeartStrokeProps): JSX.Element {
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
      <path d="M15.4235 14H19.8946C21.2582 14 23.3624 15.6872 21.845 16.997C17.5 21 10.5 21 6 16.9133M10 16H14.8384C15.6018 16 16.0983 15.1966 15.7569 14.5138C15.293 13.586 14.3448 13 13.3075 13H12.1853C12.0634 13 11.9433 12.9716 11.8343 12.9171C10.0284 12.0142 8.00087 11.6533 5.99624 11.8764M5.99624 11.8764C5.93243 10.8294 5.06307 10 4 10C2.89543 10 2 10.8954 2 12V17C2 18.1046 2.89543 19 4 19C5.10457 19 6 18.1046 6 17V16.9133M5.99624 11.8764C5.99874 11.9173 6 11.9585 6 12V16.9133M14.8095 9.57209C14.4461 9.57209 11.1758 7.88548 11.1758 5.52418C11.1758 4.34354 12.2659 3.50022 13.356 3.50022C13.8916 3.50022 14.4461 3.66889 14.8095 4.17488C15.1728 3.66889 15.7179 3.4929 16.2629 3.50022C17.353 3.51486 18.4431 4.34354 18.4431 5.52418C18.4431 7.88548 15.1728 9.57209 14.8095 9.57209Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
