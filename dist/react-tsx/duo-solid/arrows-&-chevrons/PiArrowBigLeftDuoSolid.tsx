import React from 'react';

/**
 * PiArrowBigLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowBigLeftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigLeftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-left icon',
  ...props
}: PiArrowBigLeftDuoSolidProps): JSX.Element {
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
      <path d="M19.4278 7.99902C19.6798 7.99902 19.9258 7.99902 20.1338 8.01602C20.4012 8.0313 20.663 8.09963 20.9038 8.21702C21.2801 8.40877 21.586 8.71472 21.7778 9.09102C21.8948 9.33191 21.9627 9.59364 21.9778 9.86102C21.9978 10.069 21.9978 10.315 21.9978 10.567V13.431C21.9978 13.683 21.9978 13.929 21.9808 14.137C21.9654 14.4045 21.8971 14.6662 21.7798 14.907C21.588 15.2833 21.2821 15.5893 20.9058 15.781C20.6649 15.8984 20.4032 15.9667 20.1358 15.982C19.9278 15.999 19.6818 15.999 19.4298 15.999L9.47075 15.999C9.21398 15.9993 8.96692 15.9009 8.78075 15.724C8.59459 15.5472 8.48359 15.3055 8.47075 15.049C8.37075 13.017 8.37075 10.981 8.47075 8.94902C8.48359 8.69257 8.59459 8.45088 8.78075 8.27402C8.96692 8.09717 9.21398 7.9987 9.47075 7.99902L19.4278 7.99902Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M9.20667 4.19512C9.36347 4.07911 9.55078 4.01149 9.74552 4.00059C9.94027 3.98968 10.134 4.03597 10.3027 4.13375C10.4715 4.23152 10.608 4.37652 10.6954 4.55089C10.7828 4.72526 10.8173 4.92139 10.7947 5.11512C10.2647 9.68912 10.2647 14.3091 10.7947 18.8841C10.8173 19.0779 10.7828 19.274 10.6954 19.4483C10.608 19.6227 10.4715 19.7677 10.3027 19.8655C10.134 19.9633 9.94027 20.0096 9.74552 19.9987C9.55078 19.9878 9.36347 19.9201 9.20667 19.8041C6.68807 17.9424 4.42121 15.7622 2.46267 13.3181C2.16265 12.9442 1.99915 12.4791 1.99915 11.9996C1.99915 11.5202 2.16265 11.0551 2.46267 10.6811C4.4212 8.23701 6.68806 6.05687 9.20667 4.19512Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
