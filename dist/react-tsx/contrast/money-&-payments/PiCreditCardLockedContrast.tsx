import React from 'react';

/**
 * PiCreditCardLockedContrast icon from the contrast style in money-&-payments category.
 */
interface PiCreditCardLockedContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardLockedContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-locked icon',
  ...props
}: PiCreditCardLockedContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M2 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 7.04 22 8.16 22 10.4v2.169A5.9 5.9 0 0 0 18 11c-2.702 0-5.137 1.869-5.68 4.54a5.2 5.2 0 0 0-1.206 2.273c-.185.789-.097 1.64-.048 2.11l.008.077H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 16.96 2 15.84 2 13.6z"/>
    <path d="M14.067 19.777c.054.569.08.853.174 1.085.21.52.665.917 1.227 1.07.25.068.549.068 1.147.068h2.77c.598 0 .897 0 1.147-.068a1.83 1.83 0 0 0 1.227-1.07c.093-.232.12-.516.174-1.085.064-.67.096-1.005.032-1.278-.139-.59-.582-1.182-1.174-1.39l-.071-.023C20.442 17 20.09 17 19.385 17h-2.77c-.704 0-1.056 0-1.335.086l-.071.023c-.592.208-1.035.8-1.174 1.39-.064.273-.032.608.032 1.278"/>
  </g>
  <path d="M22 9h-.006m0 0H2.006m19.988 0c.006.413.006 1.925.006 2.45M21.994 9c-.018-1.35-.096-2.16-.43-2.816a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748c-.334.655-.412 1.466-.43 2.816m0 0H2m.006 0C2 9.413 2 9.876 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h1.671m10.72-2.89v-.443C20.791 15.194 19.541 14 18 14c-1.542 0-2.791 1.194-2.791 2.667v.442m5.582 0-.071-.023C20.442 17 20.09 17 19.385 17h-2.77c-.704 0-1.056 0-1.335.086l-.071.023m5.582 0c.592.208 1.035.8 1.174 1.39.064.273.032.608-.032 1.278-.054.569-.08.853-.174 1.085-.21.52-.665.917-1.227 1.07-.25.068-.549.068-1.147.068h-2.77c-.598 0-.897 0-1.147-.068a1.83 1.83 0 0 1-1.227-1.07c-.093-.232-.12-.516-.174-1.085-.064-.67-.096-1.005-.032-1.278.139-.59.582-1.182 1.174-1.39M9 13H6"/>
    </svg>
  );
}
