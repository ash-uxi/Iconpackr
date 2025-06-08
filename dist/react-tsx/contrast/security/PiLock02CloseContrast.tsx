import React from 'react';

/**
 * PiLock02CloseContrast icon from the contrast style in security category.
 */
interface PiLock02CloseContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLock02CloseContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'lock-02-close icon',
  ...props
}: PiLock02CloseContrastProps): JSX.Element {
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
      <path d="M16 10.183C15.397 10 14.584 10 13.2 10H9.8c-1.384 0-2.197 0-2.8.183m9 0q.194.058.362.144a3 3 0 0 1 1.311 1.311C18 12.28 18 13.12 18 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 21 14.88 21 13.2 21H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 18.72 5 17.88 5 16.2v-1.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311A2 2 0 0 1 7 10.183m9 0V7.5a4.5 4.5 0 1 0-9 0v2.683"/>
  <path fill="currentColor" d="M5 14.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 10 8.12 10 9.8 10h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 12.28 18 13.12 18 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 21 14.88 21 13.2 21H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 18.72 5 17.88 5 16.2z" opacity=".28"/>
    </svg>
  );
}
