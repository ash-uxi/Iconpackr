import React from 'react';

/**
 * PiPiechart02Solid icon from the solid style in chart-&-graph category.
 */
interface PiPiechart02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPiechart02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'piechart-02 icon',
  ...props
}: PiPiechart02SolidProps): JSX.Element {
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
      <path d="M12.7323 2.75954C12.1121 2.77899 11.7409 3.41324 11.9484 3.99805L14.0993 10.0596C14.1448 10.1877 14.2381 10.2933 14.3597 10.3541L20.2601 13.3043C20.7602 13.5543 21.368 13.292 21.4597 12.7404C21.5362 12.28 21.576 11.8075 21.576 11.326C21.576 6.59252 17.7388 2.75527 13.0053 2.75527C12.914 2.75527 12.823 2.7567 12.7323 2.75954Z" fill="currentColor" stroke="none"/>
  <path d="M7.41479 2.23166C8.15088 1.77823 9.07439 2.18796 9.3635 3.00273L12.1171 10.7629C12.3444 11.4036 12.8111 11.9313 13.4191 12.2353L20.832 15.9417C21.6045 16.328 21.8985 17.2932 21.3606 17.9689C19.4059 20.4243 16.3902 22 13.0053 22C7.11021 22 2.3313 17.2211 2.3313 11.326C2.3313 7.47956 4.36543 4.11008 7.41479 2.23166Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
