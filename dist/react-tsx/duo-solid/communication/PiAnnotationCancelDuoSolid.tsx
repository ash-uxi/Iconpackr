import React from 'react';

/**
 * PiAnnotationCancelDuoSolid icon from the duo-solid style in communication category.
 */
interface PiAnnotationCancelDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnnotationCancelDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'annotation-cancel icon',
  ...props
}: PiAnnotationCancelDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M8.545 2c-1.028 0-1.86 0-2.534.055-.696.057-1.311.177-1.882.468a4.8 4.8 0 0 0-2.098 2.098c-.29.57-.41 1.186-.468 1.881-.055.675-.055 1.507-.055 2.535v4.693c0 .618 0 1.045.06 1.42a4.8 4.8 0 0 0 3.99 3.99c.377.06.741.058 1.03.053l.1-.001c.262-.004.458-.007.653.01a.9.9 0 0 1 .584.293c.192.211.341.421.521.675.097.136.203.285.33.453l.026.035c.39.52.722.963 1.021 1.296.31.346.666.667 1.133.849a2.9 2.9 0 0 0 2.103 0c.467-.182.823-.503 1.133-.849.3-.333.631-.776 1.021-1.296l.027-.035c.126-.168.232-.317.329-.453.18-.254.33-.463.521-.675a.9.9 0 0 1 .584-.292c.195-.018.391-.015.653-.011l.1.001a6 6 0 0 0 1.03-.053 4.8 4.8 0 0 0 3.99-3.99c.06-.375.06-.802.06-1.42V9.037c0-1.028 0-1.86-.055-2.535-.057-.695-.177-1.31-.468-1.881a4.8 4.8 0 0 0-2.098-2.098c-.57-.29-1.186-.411-1.882-.468C17.33 2 16.498 2 15.47 2z" opacity=".28" /> <path d="M9.5 13.5 12 11m0 0 2.5-2.5M12 11 9.5 8.5M12 11l2.5 2.5" />
    </svg>
  );
}
