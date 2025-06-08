import React from 'react';

/**
 * PiPhoneIncomingDuoSolid icon from the duo-solid style in communication category.
 */
interface PiPhoneIncomingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhoneIncomingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'phone-incoming icon',
  ...props
}: PiPhoneIncomingDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M11.985 15.484a6.43 6.43 0 0 1 5.763-1.51c.797.182 1.747.47 2.544 1.005.829.558 1.514 1.405 1.66 2.64a6 6 0 0 1-.017 1.645c-.31 1.894-2.15 2.885-3.765 2.694-2.991-.353-5.684-1.277-7.983-2.704a1 1 0 0 1-.228-1.505c.15-.172.309-.363.475-.564.461-.555.985-1.186 1.55-1.7M20.706 4.707a1 1 0 0 0-1.414-1.414L15.74 6.844q-.01-.912.101-1.815a1 1 0 1 0-1.984-.245c-.16 1.289-.157 2.597.007 3.895.096.764.69 1.359 1.456 1.455 1.297.164 2.605.167 3.894.008a1 1 0 1 0-.245-1.985q-.902.111-1.815.102zM4.736 2.06c.516-.084 1.101-.067 1.541-.027 1.165.105 2.002.69 2.576 1.45.548.726.855 1.608 1.052 2.377a6.43 6.43 0 0 1-1.859 6.313c-.473.438-1.023.845-1.514 1.208-.182.135-.357.264-.515.386a1 1 0 0 1-1.471-.285c-1.314-2.226-2.168-4.805-2.504-7.656-.19-1.615.799-3.456 2.694-3.766" /> <path d="M5.407 12.974a15.8 15.8 0 0 0 5.307 5.43" opacity=".28" />
    </svg>
  );
}
