import React from 'react';

/**
 * PiWalletRefreshStroke icon from the stroke style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWalletRefreshStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'wallet-refresh icon',
  ...props 
}) {
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
      <path d="M2 14.5V11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H13.5C14.8978 3 15.5967 3 16.1481 3.22836C16.8831 3.53284 17.4672 4.11687 17.7716 4.85195C17.979 5.35251 17.9981 5.97475 17.9998 7.1313M2 14.5C2 15.8297 2 16.9946 2.3806 17.9134C2.88807 19.1386 3.86144 20.1119 5.08658 20.6194C5.8139 20.9207 6.69536 20.9835 8.18665 20.9966M2 14.5C2 12.1703 2 11.0054 2.3806 10.0866C2.88807 8.86144 3.86144 7.88807 5.08658 7.3806C6.00544 7 7.17029 7 9.5 7H14.5C16.1339 7 17.1949 7 17.9998 7.1313M17.9998 7.1313C18.3426 7.18721 18.639 7.26693 18.9134 7.3806C20.1386 7.88807 21.1119 8.86144 21.6194 10.0866C21.7932 10.5061 21.8876 10.9769 21.9389 11.5865M22.2948 15.5701C22.1688 16.3829 21.943 17.1765 21.623 17.9332C21.5454 18.1167 21.3626 18.2288 21.1683 18.2194M18.7649 17.4514C19.5098 17.8 20.2945 18.0551 21.1011 18.2113C21.1236 18.2157 21.146 18.2184 21.1683 18.2194M15.6034 19.6821C14.8496 19.3532 14.0584 19.1187 13.2481 18.9837C13.2329 18.9812 13.2178 18.9794 13.2028 18.9784M12.124 21.6553C12.2287 20.8395 12.4336 20.0402 12.7336 19.2754C12.8092 19.0829 12.9999 18.9643 13.2028 18.9784M21.1683 18.2194C21.142 17.9442 21.0866 17.6675 21.0002 17.3932C20.3359 15.2863 18.0894 14.1169 15.9825 14.7812C15.4788 14.94 15.0287 15.1892 14.6444 15.5053M13.2028 18.9784C13.2293 19.2517 13.2845 19.5264 13.3704 19.7988C14.0347 21.9057 16.2812 23.0752 18.3881 22.4109C18.8962 22.2507 19.3498 21.9985 19.7363 21.6784" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
