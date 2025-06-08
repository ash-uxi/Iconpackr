import React from 'react';

/**
 * PiSpreadsheetAiDuoStroke icon from the duo-stroke style in ai category.
 */
interface PiSpreadsheetAiDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpreadsheetAiDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'spreadsheet-ai icon',
  ...props
}: PiSpreadsheetAiDuoStrokeProps): JSX.Element {
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
      <path d="M14 21H14.001M18 14C17.363 15.617 16.66 16.345 15 17C16.66 17.655 17.363 18.384 18 20C18.637 18.384 19.34 17.655 21 17C19.34 16.345 18.637 15.617 18 14Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M14.5999 3H9.3999C7.15969 3 6.03958 3 5.18394 3.43597C4.43129 3.81947 3.81937 4.43139 3.43587 5.18404C3.02666 5.98717 3.00154 7.0233 3 9H20.9998C20.9983 7.0233 20.9731 5.98717 20.5639 5.18404C20.1804 4.43139 19.5685 3.81947 18.8159 3.43597C17.9602 3 16.8401 3 14.5999 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9.00008 15L9.00008 9H3.00019C2.99873 10.8667 3.00009 12.7333 3.00009 14.6C3.00009 14.7375 3.00009 14.8708 3.00019 15M9.00008 15L9.00008 20.9999C7.02338 20.9984 5.98726 20.9732 5.18412 20.564C4.43147 20.1805 3.81955 19.5686 3.43606 18.816C3.02684 18.0128 3.00173 16.9767 3.00019 15M9.00008 15H3.00019" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
