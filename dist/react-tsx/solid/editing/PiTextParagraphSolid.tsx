import React from 'react';

/**
 * PiTextParagraphSolid icon from the solid style in editing category.
 */
interface PiTextParagraphSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextParagraphSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'text-paragraph icon',
  ...props
}: PiTextParagraphSolidProps): JSX.Element {
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
      <path d="M9.02992 2.00002C8.09688 1.98428 7.17005 2.15446 6.30346 2.50064C5.43687 2.84681 4.64788 3.36205 3.98249 4.01632C3.31709 4.67058 2.78862 5.45077 2.42788 6.3114C2.06714 7.17202 1.88135 8.09585 1.88135 9.02902C1.88135 9.96219 2.06714 10.886 2.42788 11.7467C2.78862 12.6073 3.31709 13.3875 3.98249 14.0417C4.64788 14.696 5.43687 15.2112 6.30346 15.5574C7.17005 15.9036 8.09688 16.0738 9.02992 16.058H11.9999V21C11.9999 21.2652 12.1053 21.5196 12.2928 21.7071C12.4803 21.8947 12.7347 22 12.9999 22C13.2651 22 13.5195 21.8947 13.707 21.7071C13.8946 21.5196 13.9999 21.2652 13.9999 21V4.00002H16.9999V21C16.9999 21.2652 17.1053 21.5196 17.2928 21.7071C17.4803 21.8947 17.7347 22 17.9999 22C18.2651 22 18.5195 21.8947 18.707 21.7071C18.8946 21.5196 18.9999 21.2652 18.9999 21V4.00002H20.9999C21.2651 4.00002 21.5195 3.89467 21.707 3.70713C21.8946 3.51959 21.9999 3.26524 21.9999 3.00002C21.9999 2.73481 21.8946 2.48045 21.707 2.29292C21.5195 2.10538 21.2651 2.00002 20.9999 2.00002H9.02992Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
