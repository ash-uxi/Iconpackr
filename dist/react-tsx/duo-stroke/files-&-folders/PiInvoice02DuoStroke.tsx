import React from 'react';

/**
 * PiInvoice02DuoStroke icon from the duo-stroke style in files-&-folders category.
 */
interface PiInvoice02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInvoice02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'invoice-02 icon',
  ...props
}: PiInvoice02DuoStrokeProps): JSX.Element {
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
      <path d="M14.7777 9.00004C14.5721 8.13742 13.8471 7.50004 12.9842 7.50004H11.9999M9.22217 14C9.42774 14.8626 10.1528 15.5 11.0157 15.5H11.9999M11.9999 7.50004H11.074C10.0513 7.50004 9.22217 8.39547 9.22217 9.50004C9.22217 10.6046 10.0513 11.5 11.074 11.5L12.9259 11.5C13.9486 11.5 14.7777 12.3955 14.7777 13.5C14.7777 14.6046 13.9486 15.5 12.9259 15.5H11.9999M11.9999 7.50004V6M11.9999 15.5V17" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 8.4L20 19.5272C20 20.2806 20 20.6573 19.8591 20.8939C19.6921 21.1741 19.399 21.3552 19.0737 21.3792C18.7991 21.3995 18.4621 21.2311 17.7882 20.8941C17.1811 20.5905 16.8775 20.4387 16.5602 20.3589C16.1828 20.264 15.7905 20.2434 15.4053 20.2983C15.0814 20.3445 14.7636 20.4637 14.128 20.702L13.6854 20.868C13.0617 21.1019 12.7499 21.2188 12.4291 21.2652C12.1445 21.3063 11.8555 21.3063 11.571 21.2652C11.2501 21.2188 10.9383 21.1019 10.3146 20.868L9.87202 20.702C9.23641 20.4637 8.9186 20.3445 8.59473 20.2983C8.20946 20.2434 7.81718 20.264 7.43977 20.3589C7.12251 20.4387 6.81891 20.5905 6.21176 20.8941C5.53789 21.2311 5.20093 21.3995 4.92633 21.3792C4.60104 21.3552 4.30792 21.1741 4.14095 20.8939C4 20.6573 4 20.2806 4 19.5272V8.4C4 6.15979 4 5.03968 4.43598 4.18404C4.81947 3.43139 5.43139 2.81947 6.18404 2.43597C7.03969 2 8.15979 2 10.4 2H13.6C15.8402 2 16.9603 2 17.816 2.43597C18.5686 2.81947 19.1805 3.43139 19.564 4.18404C20 5.03969 20 6.15979 20 8.4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
