import React from 'react';

/**
 * PiNftProfileUserStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiNftProfileUserStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftProfileUserStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-profile-user icon',
  ...props
}: PiNftProfileUserStrokeProps): JSX.Element {
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
      <path d="M14 14H10C8.89543 14 8 14.8954 8 16C8 16.5523 8.44771 17 9 17H15C15.5523 17 16 16.5523 16 16C16 14.8954 15.1046 14 14 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5.1132 6.29189L3.65881 8.89189C3.02425 10.0263 2.70696 10.5935 2.58257 11.1942C2.47248 11.7258 2.47248 12.2742 2.58257 12.8058C2.70696 13.4065 3.02425 13.9737 3.65882 15.1081L5.1132 17.7081C5.78339 18.9062 6.11848 19.5053 6.59509 19.9415C7.01673 20.3274 7.51647 20.6194 8.0609 20.7981C8.6763 21 9.3663 21 10.7463 21H13.2903C14.6501 21 15.33 21 15.9382 20.8031C16.4763 20.629 16.9715 20.3441 17.3913 19.9671C17.8658 19.541 18.2041 18.9552 18.8805 17.7837L19.9103 16L20.4075 15.074C21.0104 13.951 21.3119 13.3895 21.4269 12.7977C21.5288 12.2739 21.5241 11.7352 21.4132 11.2132C21.2879 10.6235 20.9767 10.0673 20.3544 8.95471L18.8648 6.29189C18.1946 5.09379 17.8596 4.49474 17.3829 4.05853C16.9613 3.67263 16.4616 3.38059 15.9171 3.20194C15.3017 3 14.6117 3 13.2317 3H10.7463C9.3663 3 8.6763 3 8.0609 3.20194C7.51647 3.38059 7.01673 3.67263 6.59509 4.05853C6.11848 4.49474 5.78339 5.09379 5.1132 6.29189Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
