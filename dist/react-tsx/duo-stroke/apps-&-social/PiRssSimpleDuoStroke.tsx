import React from 'react';

/**
 * PiRssSimpleDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiRssSimpleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRssSimpleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'rss-simple icon',
  ...props
}: PiRssSimpleDuoStrokeProps): JSX.Element {
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
      <path d="M12.4211 20.0002C12.4211 17.7884 11.5185 15.6095 9.95458 14.0456C8.39065 12.4816 6.21174 11.5791 4 11.5791" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20M4.40982 19.5789H4.42105" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
