import React from 'react';

/**
 * PiVideoRecordingDuoStroke icon from the duo-stroke style in media category.
 */
interface PiVideoRecordingDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoRecordingDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'video-recording icon',
  ...props
}: PiVideoRecordingDuoStrokeProps): JSX.Element {
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
      <path d="M14.7027 10.9914C14.7027 10.7177 14.8271 10.4589 15.0409 10.2879L15.9419 9.56707C16.5318 9.09512 17.4057 9.51514 17.4057 10.2706V13.7293C17.4057 14.4848 16.5318 14.9048 15.9419 14.4329L15.0409 13.7121C14.8271 13.5411 14.7027 13.2822 14.7027 13.0085V10.9914Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 15.604C20.9734 16.9908 20.8761 17.8493 20.5189 18.5502C20.087 19.3979 19.3979 20.087 18.5502 20.5189C17.8493 20.8761 16.9908 20.9734 15.604 21M21 8.39602C20.9734 7.00919 20.8761 6.15072 20.5189 5.44981C20.087 4.60214 19.3979 3.91297 18.5502 3.48106C17.8493 3.12393 16.9908 3.02655 15.604 3M8.39601 3C7.00918 3.02655 6.15071 3.12393 5.44981 3.48106C4.60214 3.91297 3.91297 4.60214 3.48106 5.44981C3.12393 6.15072 3.02655 7.00919 3 8.39602M3 15.604C3.02655 16.9908 3.12393 17.8493 3.48106 18.5502C3.91297 19.3979 4.60214 20.087 5.44981 20.5189C6.15071 20.8761 7.00918 20.9734 8.39601 21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.59375 12C6.59375 10.7385 6.59375 10.1077 6.83926 9.62588C7.05521 9.20204 7.3998 8.85746 7.82363 8.6415C8.30546 8.396 8.93622 8.396 10.1977 8.396H11.0987C12.3602 8.396 12.991 8.396 13.4728 8.6415C13.8967 8.85746 14.2412 9.20204 14.4572 9.62588C14.7027 10.1077 14.7027 10.7385 14.7027 12C14.7027 13.2615 14.7027 13.8922 14.4572 14.3741C14.2412 14.7979 13.8967 15.1425 13.4728 15.3585C12.991 15.604 12.3602 15.604 11.0987 15.604H10.1977C8.93622 15.604 8.30546 15.604 7.82363 15.3585C7.3998 15.1425 7.05521 14.7979 6.83926 14.3741C6.59375 13.8922 6.59375 13.2615 6.59375 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
