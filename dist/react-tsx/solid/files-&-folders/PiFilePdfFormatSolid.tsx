import React from 'react';

/**
 * PiFilePdfFormatSolid icon from the solid style in files-&-folders category.
 */
interface PiFilePdfFormatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilePdfFormatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-pdf-format icon',
  ...props
}: PiFilePdfFormatSolidProps): JSX.Element {
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
      <path d="M10 13C9.44772 13 9 13.4477 9 14V21C9 21.5523 9.44772 22 10 22H10.5C12.9853 22 15 19.9853 15 17.5C15 15.0147 12.9853 13 10.5 13H10ZM13 17.5C13 18.7095 12.1411 19.7184 11 19.95V15.05C12.1411 15.2816 13 16.2905 13 17.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M13 1.00134V3.24136C13 4.04633 13 4.71069 13.0442 5.25189C13.0901 5.81398 13.1887 6.33069 13.436 6.81602C13.8195 7.56867 14.4314 8.18059 15.184 8.56409C15.6694 8.81138 16.1861 8.90994 16.7482 8.95587C17.2894 9.00008 17.9537 9.00007 18.7587 9.00006H20.9987C21.0001 9.16785 21.0001 9.34599 21 9.53707V11H3V8.35711C2.99999 7.2734 2.99998 6.39927 3.05782 5.69142C3.11737 4.96257 3.24318 4.32238 3.54497 3.73009C4.02434 2.78928 4.78924 2.02438 5.73005 1.54501C6.32234 1.24322 6.96253 1.11741 7.69138 1.05786C8.39926 1.00002 9.27341 1.00003 10.3572 1.00004L12.4633 1.00002C12.6543 0.999966 12.8323 0.999915 13 1.00134Z" fill="currentColor" stroke="none"/>
  <path d="M15 1.28254V3.20006C15 4.05664 15.0008 4.63893 15.0376 5.08902C15.0734 5.52744 15.1383 5.75164 15.218 5.90804C15.4097 6.28436 15.7157 6.59033 16.092 6.78207C16.2484 6.86176 16.4726 6.92669 16.911 6.96251C17.3611 6.99928 17.9434 7.00006 18.8 7.00006H20.7175C20.6005 6.66679 20.4483 6.3464 20.2632 6.0444C19.953 5.53818 19.5277 5.11309 18.9132 4.49897L17.4997 3.08544C16.8862 2.47173 16.4615 2.04681 15.9556 1.73684C15.6537 1.55178 15.3333 1.39959 15 1.28254Z" fill="currentColor" stroke="none"/>
  <path d="M17 13C16.4477 13 16 13.4477 16 14V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H18V15H21C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13H17Z" fill="currentColor" stroke="none"/>
  <path d="M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22C3.55228 22 4 21.5523 4 21V20H4.5C6.433 20 8 18.433 8 16.5C8 14.567 6.433 13 4.5 13H3ZM4.5 18H4V15H4.5C5.32843 15 6 15.6716 6 16.5C6 17.3284 5.32843 18 4.5 18Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
