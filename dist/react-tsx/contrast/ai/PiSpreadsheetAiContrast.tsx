import React from 'react';

/**
 * PiSpreadsheetAiContrast icon from the contrast style in ai category.
 */
interface PiSpreadsheetAiContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpreadsheetAiContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'spreadsheet-ai icon',
  ...props
}: PiSpreadsheetAiContrastProps): JSX.Element {
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
      <path d="M14 21zM18 14c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3M9 9v6m0-6H3m6 0h12c-.002-1.977-.027-3.013-.436-3.816a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3.026 5.987 3.002 7.024 3 9m6 6v6c-1.977-.002-3.013-.027-3.816-.436a4 4 0 0 1-1.748-1.748c-.41-.803-.434-1.84-.436-3.816m6 0H3m0 0V9"/>
  <path fill="currentColor" d="M9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.41.803.434 1.84.436 3.816H9v12c-1.977-.002-3.013-.027-3.816-.436a4 4 0 0 1-1.748-1.748c-.41-.803-.434-1.84-.436-3.816V9c.002-1.977.027-3.013.436-3.816a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3" opacity=".28"/>
    </svg>
  );
}
