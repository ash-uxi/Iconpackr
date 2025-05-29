import React from 'react';

/**
 * PiEnvelopeAiDuoStroke icon from the duo-stroke style in ai category.
 */
interface PiEnvelopeAiDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiEnvelopeAiDuoStroke({
  size = 24,
  color,
  className,
  ...props
}: PiEnvelopeAiDuoStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
