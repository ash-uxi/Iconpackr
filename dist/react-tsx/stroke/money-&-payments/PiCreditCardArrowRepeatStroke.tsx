import React from 'react';

/**
 * PiCreditCardArrowRepeatStroke icon from the stroke style in money-&-payments category.
 */
interface PiCreditCardArrowRepeatStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardArrowRepeatStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-arrow-repeat icon',
  ...props
}: PiCreditCardArrowRepeatStrokeProps): JSX.Element {
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
      <path d="M22.2948 15.5701C22.1688 16.3829 21.943 17.1765 21.623 17.9332C21.5454 18.1167 21.3626 18.2288 21.1683 18.2194M18.7649 17.4514C19.5098 17.8 20.2945 18.0551 21.1011 18.2113C21.1236 18.2157 21.146 18.2184 21.1683 18.2194M15.6034 19.6821C14.8496 19.3532 14.0584 19.1187 13.2481 18.9837C13.2329 18.9812 13.2178 18.9794 13.2028 18.9784M12.124 21.6553C12.2287 20.8395 12.4336 20.0402 12.7336 19.2754C12.8092 19.0829 12.9999 18.9643 13.2028 18.9784M21.1683 18.2194C21.142 17.9442 21.0866 17.6675 21.0002 17.3932C20.3359 15.2863 18.0894 14.1169 15.9825 14.7812C15.4788 14.94 15.0287 15.1892 14.6444 15.5053M13.2028 18.9784C13.2293 19.2517 13.2845 19.5264 13.3704 19.7988C14.0347 21.9057 16.2812 23.0752 18.3881 22.4109C18.8962 22.2507 19.3498 21.9985 19.7363 21.6784M2 9H2.00559M2.00559 9H21.9944M2.00559 9C2 9.41261 2 9.87562 2 10.4V13.6C2 15.8402 2 16.9603 2.43597 17.816C2.81947 18.5686 3.43139 19.1805 4.18404 19.564C5.03699 19.9986 6.15275 20 8.37891 20M2.00559 9C2.02389 7.6499 2.10205 6.8394 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C5.03968 4 6.15979 4 8.4 4H15.6C17.8402 4 18.9603 4 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8979 6.8394 21.9761 7.6499 21.9944 9M21.9944 9H22M21.9944 9C22 9.41261 22 9.87562 22 10.4V11.5842M6 13H9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
