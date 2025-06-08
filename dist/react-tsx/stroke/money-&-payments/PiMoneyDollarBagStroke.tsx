import React from 'react';

/**
 * PiMoneyDollarBagStroke icon from the stroke style in money-&-payments category.
 */
interface PiMoneyDollarBagStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMoneyDollarBagStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'money-dollar-bag icon',
  ...props
}: PiMoneyDollarBagStrokeProps): JSX.Element {
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
      <path d="M12.0004 10.303V11.1322M12.0004 11.1322H11.2326C10.3846 11.1322 9.69713 11.8746 9.69713 12.7905C9.69713 13.7064 10.3846 14.4488 11.2326 14.4488L12.7681 14.4488C13.6162 14.4488 14.3036 15.1913 14.3036 16.1072C14.3036 17.0231 13.6162 17.7655 12.7681 17.7655H12.0004M12.0004 11.1322H12.8165C13.3443 11.1322 13.8098 11.4197 14.0862 11.8577M12.0004 17.7655V18.5947M12.0004 17.7655H11.1843C10.6565 17.7655 10.1909 17.478 9.91453 17.04M14.8871 6.98758C14.3011 6.79509 13.6824 6.69011 13.0368 6.69011H10.9639C10.642 6.69011 10.3267 6.71622 10.0189 6.76626M14.8871 6.98758C21.0721 9.01901 23.622 20.7963 15.8092 21.7648C13.2797 22.0784 10.7211 22.0784 8.19153 21.7648C0.00759697 20.7503 3.19433 7.87572 10.0189 6.76626M14.8871 6.98758L16.6644 2.54428L16.0145 2.28428C14.7993 1.79821 13.4227 1.94155 12.3337 2.66753C11.4567 3.25225 10.3832 3.4646 9.34961 3.25787L8.37278 3.06251L10.0189 6.76626" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
