import React from 'react';

/**
 * PiEyedropperFillStroke icon from the stroke style in editing category.
 */
interface PiEyedropperFillStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEyedropperFillStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'eyedropper-fill icon',
  ...props
}: PiEyedropperFillStrokeProps): JSX.Element {
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
      <path d="M15.2599 12.0453C15.8416 12.7368 16.3965 13.452 16.923 14.1892C17.0336 14.3439 17.2566 14.3624 17.3911 14.2279L18.6655 12.9535C19.3819 12.2371 19.3819 11.0756 18.6655 10.3592L17.8413 9.53505L19.2555 8.12083C20.4271 6.94926 20.4271 5.04976 19.2555 3.87819C18.084 2.70662 16.1845 2.70662 15.0129 3.87819L13.5987 5.2924L12.7745 4.46825C12.0581 3.75185 10.8966 3.75185 10.1802 4.46825L8.90583 5.74261C8.77135 5.87709 8.78981 6.10014 8.94457 6.21068C9.65427 6.71761 10.3435 7.25078 11.011 7.80887M15.2599 12.0453C13.97 10.5118 12.5483 9.09427 11.011 7.80887M15.2599 12.0453L13.3056 13.9995M11.011 7.80887L4.82032 13.9995M4.82032 13.9995L4.54018 14.2797C4.17268 14.6472 3.98893 14.8309 3.86228 15.042C3.6923 15.3252 3.59513 15.6461 3.57944 15.9761C3.56775 16.222 3.61871 16.4768 3.72064 16.9864C3.74854 17.1259 3.74173 17.2353 3.69674 17.3702L3.20496 18.8456C3.04211 19.3341 2.96069 19.5784 3.01862 19.7408C3.06903 19.8822 3.18027 19.9934 3.32163 20.0439C3.48407 20.1018 3.72834 20.0204 4.21689 19.8575L5.69223 19.3657C5.82721 19.3207 5.93656 19.3139 6.07607 19.3418C6.5857 19.4438 6.84052 19.4947 7.08638 19.483C7.41634 19.4673 7.73727 19.3702 8.02052 19.2002C8.23157 19.0735 8.41532 18.8898 8.78282 18.5223L13.3056 13.9995M4.82032 13.9995H13.3056" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
