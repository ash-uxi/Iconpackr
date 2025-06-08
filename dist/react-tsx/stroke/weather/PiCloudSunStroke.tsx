import React from 'react';

/**
 * PiCloudSunStroke icon from the stroke style in weather category.
 */
interface PiCloudSunStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudSunStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-sun icon',
  ...props
}: PiCloudSunStrokeProps): JSX.Element {
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
      <path d="M10.5817 2.27088L10.6037 2.17334M2.17285 7.49572L2.27039 7.51777M5.28545 3.08834L5.33883 3.1729M14.9268 5.33935L15.0114 5.28597M3.08748 12.8137L3.17204 12.7603M8.287 14.9332C8.18842 14.5159 8.13626 14.0806 8.13626 13.6332C8.13626 13.4949 8.14124 13.3578 8.15103 13.2221M8.15103 13.2221C6.19395 13.4309 4.66959 15.0874 4.66959 17.0999C4.66959 19.2538 6.41568 20.9999 8.56959 20.9999H17.2363C19.8688 20.9999 22.0029 18.8658 22.0029 16.2332C22.0029 14.2679 20.8135 12.5804 19.1152 11.8512C18.3696 9.61334 16.258 7.99988 13.7696 7.99988C13.4909 7.99988 13.2169 8.02012 12.9491 8.05921M8.15103 13.2221C8.15875 13.1151 8.16945 13.0089 8.18306 12.9037M12.9491 8.05921C12.6015 6.62934 11.475 5.44592 9.9424 5.09954C7.78761 4.61255 5.64602 5.96457 5.15903 8.11936C4.67204 10.2742 6.02406 12.4157 8.17885 12.9027L8.18306 12.9037M12.9491 8.05921C10.4644 8.4218 8.50599 10.4063 8.18306 12.9037" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
