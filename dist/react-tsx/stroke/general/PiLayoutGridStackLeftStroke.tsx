import React from 'react';

/**
 * PiLayoutGridStackLeftStroke icon from the stroke style in general category.
 */
interface PiLayoutGridStackLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayoutGridStackLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'layout-grid-stack-left icon',
  ...props
}: PiLayoutGridStackLeftStrokeProps): JSX.Element {
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
      <path d="M14 15.2C14 14.0799 14 13.5198 14.218 13.092C14.4097 12.7157 14.7157 12.4097 15.092 12.218C15.5198 12 16.0799 12 17.2 12H17.8C18.9201 12 19.4802 12 19.908 12.218C20.2843 12.4097 20.5903 12.7157 20.782 13.092C21 13.5198 21 14.0799 21 15.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H17.2C16.0799 21 15.5198 21 15.092 20.782C14.7157 20.5903 14.4097 20.2843 14.218 19.908C14 19.4802 14 18.9201 14 17.8V15.2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M14 5.5C14 5.03534 14 4.80302 14.0384 4.60982C14.1962 3.81644 14.8164 3.19624 15.6098 3.03843C15.803 3 16.0353 3 16.5 3H18.5C18.9647 3 19.197 3 19.3902 3.03843C20.1836 3.19624 20.8038 3.81644 20.9616 4.60982C21 4.80302 21 5.03534 21 5.5C21 5.96466 21 6.19698 20.9616 6.39018C20.8038 7.18356 20.1836 7.80376 19.3902 7.96157C19.197 8 18.9647 8 18.5 8H16.5C16.0353 8 15.803 8 15.6098 7.96157C14.8164 7.80376 14.1962 7.18356 14.0384 6.39018C14 6.19698 14 5.96466 14 5.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M3 6.2C3 5.07989 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H6.8C7.9201 3 8.48016 3 8.90798 3.21799C9.28431 3.40973 9.59027 3.71569 9.78201 4.09202C10 4.51984 10 5.0799 10 6.2V17.8C10 18.9201 10 19.4802 9.78201 19.908C9.59027 20.2843 9.28431 20.5903 8.90798 20.782C8.48016 21 7.9201 21 6.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
