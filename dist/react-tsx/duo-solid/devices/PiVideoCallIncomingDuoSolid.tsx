import React from 'react';

/**
 * PiVideoCallIncomingDuoSolid icon from the duo-solid style in devices category.
 */
interface PiVideoCallIncomingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallIncomingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-incoming icon',
  ...props
}: PiVideoCallIncomingDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M13 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5zm-.293 4.293a1 1 0 0 0-1.338-.07l-.076.07-4.291 4.288q.007-.706.084-1.408l.055-.428a1 1 0 0 0-1.96-.384l-.02.1a16 16 0 0 0-.074 3.93l.022.149a1.7 1.7 0 0 0 1.495 1.37l.492.043c.982.073 1.97.055 2.95-.055l.49-.062a1 1 0 0 0-.182-1.99l-.102.01q-.915.13-1.835.138l4.29-4.287.068-.075a1 1 0 0 0-.068-1.339" clipRule="evenodd" /> <path d="M17.714 15.4A2 2 0 0 1 17 13.933v-3.875a2 2 0 0 1 .712-1.458l1-.84C20.016 6.668 22 7.593 22 9.29v5.417c0 1.7-1.985 2.624-3.286 1.531z" opacity=".28" />
    </svg>
  );
}
