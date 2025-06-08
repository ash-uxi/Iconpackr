import React from 'react';

/**
 * PiUserQuestionMarkDuoStroke icon from the duo-stroke style in users category.
 */
interface PiUserQuestionMarkDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserQuestionMarkDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-question-mark icon',
  ...props
}: PiUserQuestionMarkDuoStrokeProps): JSX.Element {
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
      <path d="M14.54 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H12.3789" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16.3501 15.5022C16.5263 15.0014 16.8741 14.579 17.3318 14.31C17.7896 14.0409 18.3278 13.9426 18.8511 14.0324C19.3744 14.1221 19.8491 14.3942 20.191 14.8004C20.533 15.2066 20.7201 15.7207 20.7193 16.2517C20.7193 17.7506 18.471 18.5 18.471 18.5M18.5001 21.5H18.5101M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
