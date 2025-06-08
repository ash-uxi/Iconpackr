import React from 'react';

/**
 * PiPurseBagHeartContrast icon from the contrast style in general category.
 */
interface PiPurseBagHeartContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPurseBagHeartContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'purse-bag-heart icon',
  ...props
}: PiPurseBagHeartContrastProps): JSX.Element {
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
      <path d="M12 17.125c.35 0 3.5-1.701 3.5-4.083 0-1.191-1.05-2.027-2.1-2.042-.525-.007-1.05.17-1.4.68-.35-.51-.884-.68-1.4-.68-1.05 0-2.1.85-2.1 2.042 0 2.382 3.15 4.083 3.5 4.083"/>
  <path fill="currentColor" d="M3.659 13.259c-.568 2.65-.852 3.974-.503 5.012a4 4 0 0 0 1.754 2.171C5.853 21 7.207 21 9.917 21h4.166c2.71 0 4.065 0 5.007-.558a4 4 0 0 0 1.755-2.17c.348-1.04.064-2.364-.504-5.013l-.392-1.832c-.339-1.579-.508-2.368-.928-2.958a3.5 3.5 0 0 0-1.462-1.182c-.412-.178-.879-.246-1.559-.271C15.583 7 15.086 7 14.473 7H9.527C8.914 7 8.417 7 8 7.016c-.68.025-1.147.093-1.559.271A3.5 3.5 0 0 0 4.98 8.47c-.42.59-.59 1.38-.927 2.958z" opacity=".28"/>
  <path d="M8 7.016C8.417 7 8.914 7 9.527 7h4.946c.613 0 1.11 0 1.527.016m-8 0c-.68.025-1.147.093-1.559.271A3.5 3.5 0 0 0 4.98 8.47c-.42.59-.59 1.38-.927 2.958l-.393 1.832c-.568 2.65-.852 3.974-.503 5.012a4 4 0 0 0 1.754 2.171C5.853 21 7.207 21 9.917 21h4.166c2.71 0 4.065 0 5.007-.558a4 4 0 0 0 1.755-2.17c.348-1.04.064-2.364-.504-5.013l-.392-1.832c-.339-1.579-.508-2.368-.928-2.958a3.5 3.5 0 0 0-1.462-1.182c-.412-.178-.879-.246-1.559-.271m-8 0C8 4.83 9.808 3 12 3s4 1.83 4 4.016"/>
    </svg>
  );
}
