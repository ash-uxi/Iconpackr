import React from 'react';

/**
 * PiMedicinePillsCapsulesTabletsStroke icon from the stroke style in medical category.
 */
interface PiMedicinePillsCapsulesTabletsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillsCapsulesTabletsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pills-capsules-tablets icon',
  ...props
}: PiMedicinePillsCapsulesTabletsStrokeProps): JSX.Element {
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
      <path d="M14.0012 18.014L21.999 17.986M14.0012 18.014C14.0089 20.2225 15.8056 22.0066 18.0141 21.9989C20.2226 21.9911 22.0067 20.1945 21.999 17.986M14.0012 18.014C13.9934 15.8055 15.7776 14.0088 17.9861 14.0011C20.1946 13.9934 21.9912 15.7775 21.999 17.986M6.51044 6.51044L3.23832 9.78256C1.58723 11.4336 1.58723 14.1106 3.23832 15.7617C4.88941 17.4128 7.56635 17.4128 9.21744 15.7617L12.4896 12.4896M6.51044 6.51044L9.78256 3.23832C11.4336 1.58723 14.1106 1.58723 15.7617 3.23832C17.4128 4.88941 17.4128 7.56635 15.7617 9.21744L12.4896 12.4896M6.51044 6.51044L12.4896 12.4896M10.6337 6.65841L12.0568 5.2353C12.4286 4.86353 12.9825 4.78485 13.4313 4.99927" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
