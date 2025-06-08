import React from 'react';

/**
 * PiTokenContrast icon from the contrast style in web3-&-crypto category.
 */
interface PiTokenContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTokenContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'token icon',
  ...props
}: PiTokenContrastProps): JSX.Element {
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
      <path d="M10.303 9.697c.594-.594.89-.891 1.233-1.002a1.5 1.5 0 0 1 .927 0c.343.111.64.408 1.234 1.002l.606.606c.594.594.89.891 1.002 1.233a1.5 1.5 0 0 1 0 .928c-.111.342-.408.639-1.002 1.233l-.606.606c-.594.594-.891.891-1.234 1.002a1.5 1.5 0 0 1-.927 0c-.342-.111-.64-.408-1.233-1.002l-.606-.606c-.594-.594-.891-.891-1.002-1.233a1.5 1.5 0 0 1 0-.928c.11-.342.408-.639 1.002-1.233z"/>
  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/>
  <path fill="currentColor" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity=".28"/>
    </svg>
  );
}
