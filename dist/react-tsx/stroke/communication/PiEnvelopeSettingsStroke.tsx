import React from 'react';

/**
 * PiEnvelopeSettingsStroke icon from the stroke style in communication category.
 */
interface PiEnvelopeSettingsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEnvelopeSettingsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'envelope-settings icon',
  ...props
}: PiEnvelopeSettingsStrokeProps): JSX.Element {
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
      <path d="M10.5352 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12C2 10.006 2 8.72189 2.19678 7.76159M21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L2.19678 7.76159M21.8032 7.76159C21.7237 7.37332 21.6119 7.03798 21.455 6.73005C20.9757 5.78924 20.2108 5.02433 19.27 4.54497C18.2004 4 16.8003 4 14 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2.38807 7.03798 2.27634 7.37332 2.19678 7.76159M21.8032 7.76159C21.9778 8.61353 21.9975 9.7203 21.9997 11.3516M18 18H18.01M18 14L19.1787 15.1545L20.8284 15.1716L20.8455 16.8213L22 18L20.8455 19.1787L20.8284 20.8284L19.1787 20.8455L18 22L16.8213 20.8455L15.1716 20.8284L15.1545 19.1787L14 18L15.1545 16.8213L15.1716 15.1716L16.8213 15.1545L18 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
