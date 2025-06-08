import React from 'react';

/**
 * PiVideoCallIncomingSolid icon from the solid style in devices category.
 */
interface PiVideoCallIncomingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallIncomingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-incoming icon',
  ...props
}: PiVideoCallIncomingSolidProps): JSX.Element {
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
      <path d="M13 4C15.1654 4 17.009 5.37697 17.7041 7.30273L18.0703 6.99512C20.0221 5.35561 23 6.74296 23 9.29199V14.708C23 17.2571 20.0221 18.6443 18.0703 17.0049L17.7041 16.6973C17.009 18.623 15.1654 20 13 20H6C3.23857 20 1 17.7614 1 15V9C1 6.23858 3.23858 4 6 4H13ZM12.707 8.29297C12.3411 7.92702 11.7619 7.90367 11.3691 8.22363L11.293 8.29297L7.00195 12.5811C7.00678 12.1109 7.03374 11.6409 7.08594 11.1729L7.14062 10.7451C7.21873 10.1984 6.83873 9.69139 6.29199 9.61328C5.77956 9.54018 5.30272 9.86953 5.18066 10.3613L5.16113 10.4619C4.97504 11.7645 4.94998 13.0844 5.08691 14.3916L5.10938 14.54C5.17543 14.8803 5.34204 15.1848 5.57715 15.4199C5.84581 15.6885 6.20489 15.8672 6.60449 15.9092L7.0957 15.9531C8.07827 16.0256 9.06589 16.0078 10.0459 15.8984L10.5352 15.8359C11.0817 15.7577 11.4619 15.2507 11.3838 14.7041C11.3104 14.1916 10.86 13.8259 10.3535 13.8467L10.252 13.8564C9.64329 13.9434 9.03026 13.9878 8.41699 13.9941L12.707 9.70703L12.7754 9.63184C13.0962 9.23915 13.0732 8.6593 12.707 8.29297ZM21 9.29199C21 8.44232 20.007 7.97986 19.3564 8.52637L18.3564 9.36621C18.1437 9.54505 18.0153 9.80407 18.001 10.0801V13.9141C18.0139 14.1922 18.1423 14.4538 18.3564 14.6338L19.3564 15.4736C20.0071 16.0202 21 15.5577 21 14.708V9.29199Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
