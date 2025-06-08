import React from 'react';

/**
 * PiPencilEraserEditDuoStroke icon from the duo-stroke style in general category.
 */
interface PiPencilEraserEditDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilEraserEditDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-eraser-edit icon',
  ...props
}: PiPencilEraserEditDuoStrokeProps): JSX.Element {
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
      <path d="M18.6157 9.11664L7.52811 20.2529C7.25274 20.5295 7.11505 20.6678 6.95435 20.7666C6.81188 20.8542 6.65654 20.9187 6.49406 20.9577C6.31079 21.0016 6.11608 21.0013 5.72665 21.0007L3 20.9963L3.06616 18.3159C3.07546 17.939 3.08011 17.7505 3.12568 17.5735C3.16608 17.4165 3.23007 17.2666 3.31544 17.129C3.41171 16.9738 3.54444 16.8405 3.8099 16.5739L14.917 5.41797" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.72665 21L3 20.9956L3.06616 18.3152M16.8626 3.46297C17.3862 2.93708 18.204 2.84896 18.8267 3.25131C19.6037 3.75331 20.2713 4.42948 20.7594 5.21582C21.1632 5.86631 21.0315 6.68941 20.5014 7.22177L18.6157 9.11581L14.917 5.41714L16.8626 3.46297Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
