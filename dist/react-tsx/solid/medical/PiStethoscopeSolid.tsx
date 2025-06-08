import React from 'react';

/**
 * PiStethoscopeSolid icon from the solid style in medical category.
 */
interface PiStethoscopeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStethoscopeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'stethoscope icon',
  ...props
}: PiStethoscopeSolidProps): JSX.Element {
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
      <path d="M4 5.51172C4 4.68329 4.67157 4.01172 5.5 4.01172C6.05228 4.01172 6.5 3.564 6.5 3.01172C6.5 2.45943 6.05228 2.01172 5.5 2.01172C3.567 2.01172 2 3.57872 2 5.51172V7.19607C2 9.24932 2.71985 11.2376 4.03431 12.8149L4.28006 13.1098C5.01166 13.9878 5.97839 14.5341 7 14.7484V15.5117C7 19.1016 9.91015 22.0117 13.5 22.0117C17.0899 22.0117 20 19.1016 20 15.5117V14.8668C21.4457 14.4365 22.5 13.0972 22.5 11.5117C22.5 9.57872 20.933 8.01172 19 8.01172C17.067 8.01172 15.5 9.57872 15.5 11.5117C15.5 13.0972 16.5543 14.4365 18 14.8668V15.5117C18 17.997 15.9853 20.0117 13.5 20.0117C11.0147 20.0117 9 17.997 9 15.5117V14.7484C10.0216 14.5341 10.9883 13.9878 11.7199 13.1098L11.9657 12.8149C13.2801 11.2376 14 9.24932 14 7.19607V5.51172C14 3.57872 12.433 2.01172 10.5 2.01172C9.94772 2.01172 9.5 2.45943 9.5 3.01172C9.5 3.564 9.94772 4.01172 10.5 4.01172C11.3284 4.01172 12 4.68329 12 5.51172V7.19607C12 8.78145 11.4442 10.3167 10.4292 11.5346L10.1835 11.8295C9.61503 12.5116 8.81038 12.8522 8 12.8522C7.18962 12.8522 6.38497 12.5116 5.8165 11.8295L5.57076 11.5346C4.55582 10.3167 4 8.78145 4 7.19607V5.51172Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
