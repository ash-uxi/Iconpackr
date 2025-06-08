import React from 'react';

/**
 * PiPiechart02Stroke icon from the stroke style in chart-&-graph category.
 */
interface PiPiechart02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPiechart02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'piechart-02 icon',
  ...props
}: PiPiechart02StrokeProps): JSX.Element {
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
      <path d="M10.2863 4.50252L12.5675 10.9313C12.6972 11.2968 12.9634 11.5979 13.3103 11.7713L19.4112 14.8218M10.2863 4.50252C11.0628 4.22699 11.8987 4.07702 12.7696 4.07702C16.8697 4.07702 20.1936 7.40083 20.1936 11.501C20.1936 12.6947 19.9118 13.8226 19.4112 14.8218M10.2863 4.50252L10.0933 3.95857C9.81624 3.17782 8.95071 2.75958 8.22358 3.15656C5.27159 4.76822 3.26904 7.90072 3.26904 11.5009C3.26904 16.748 7.5226 21.0015 12.7696 21.0015C15.9522 21.0015 18.7693 19.4366 20.4934 17.0343C20.9767 16.3609 20.6677 15.45 19.9263 15.0793L19.4112 14.8218" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
