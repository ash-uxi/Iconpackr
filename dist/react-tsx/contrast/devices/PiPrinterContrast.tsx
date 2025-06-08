import React from 'react';

/**
 * PiPrinterContrast icon from the contrast style in devices category.
 */
interface PiPrinterContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPrinterContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'printer icon',
  ...props
}: PiPrinterContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M15.6 6H8.4c-.946 0-1.692 0-2.303.033-.836.045-1.419.151-1.913.403a4 4 0 0 0-1.748 1.748C2 9.04 2 10.16 2 12.4v.8c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.552.281 1.25.32 2.505.326l.194-.678c.238-.832.356-1.248.6-1.557a2 2 0 0 1 .815-.615C8.116 15 8.55 15 9.414 15h5.172c.865 0 1.298 0 1.662.149.32.13.602.343.816.615.243.309.361.725.6 1.557l.193.678c1.254-.005 1.953-.045 2.505-.326a3 3 0 0 0 1.311-1.311C22 15.72 22 14.88 22 13.2v-.8c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748c-.494-.252-1.077-.358-1.913-.403C17.293 6 16.546 6 15.6 6" opacity=".2"/>
  <path d="m17.903 6.033-.115-1.151c-.102-1.018-.152-1.527-.384-1.912a2 2 0 0 0-.86-.778C16.14 2 15.627 2 14.604 2H9.396c-1.023 0-1.535 0-1.94.192a2 2 0 0 0-.86.778c-.231.385-.282.894-.384 1.912l-.115 1.15m11.806 0C17.293 6 16.546 6 15.6 6H8.4c-.946 0-1.692 0-2.303.033m11.806 0c.836.045 1.419.151 1.913.403a4 4 0 0 1 1.748 1.748C22 9.04 22 10.16 22 12.4v.8c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.552.281-1.25.32-2.505.326M6.097 6.033c-.836.045-1.419.151-1.913.403a4 4 0 0 0-1.748 1.748C2 9.04 2 10.16 2 12.4v.8c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.552.281 1.25.32 2.505.326m0 0-.269.942c-.297 1.038-.445 1.558-.328 1.968a1.5 1.5 0 0 0 .653.866c.363.225.903.225 1.983.225h7.636c1.08 0 1.62 0 1.984-.225a1.5 1.5 0 0 0 .652-.866c.117-.41-.031-.93-.328-1.968l-.27-.942M6.144 18l.194-.678c.238-.832.356-1.248.6-1.557a2 2 0 0 1 .815-.615C8.116 15 8.55 15 9.414 15h5.172c.865 0 1.298 0 1.662.149.32.13.602.343.816.615.243.309.361.725.6 1.557l.193.678M14 10h.01M18 10h.01"/>
    </svg>
  );
}
