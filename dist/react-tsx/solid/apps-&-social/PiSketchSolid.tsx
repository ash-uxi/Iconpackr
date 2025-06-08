import React from 'react';

/**
 * PiSketchSolid icon from the solid style in apps-&-social category.
 */
interface PiSketchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSketchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sketch icon',
  ...props
}: PiSketchSolidProps): JSX.Element {
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
      <path d="M11.5216 18.0042L8.01089 10H15.9893L12.4783 18.0042L12 18.892L11.5216 18.0042Z" fill="currentColor" stroke="none"/>
  <path d="M11.6259 4.88863L8.76064 8H15.2395L12.3741 4.88865L12.3723 4.88675L12 4.48031L11.6276 4.88675L11.6259 4.88863Z" fill="currentColor" stroke="none"/>
  <path d="M12.7373 2.32447C12.5479 2.11772 12.2804 2 12 2C11.7196 2 11.452 2.11772 11.2626 2.32447L10.1546 3.53381L10.1529 3.53568L6.04179 8H0.698233C0.788026 7.76522 0.908422 7.53887 1.05964 7.32698L3.96185 3.26034C4.52622 2.46954 5.43777 2 6.40934 2H12H17.5905C18.5621 2 19.4736 2.46954 20.038 3.26034L22.9402 7.32698C23.0914 7.53887 23.2118 7.76522 23.3016 8H17.9584L13.847 3.53568L13.8452 3.53378L12.7373 2.32447Z" fill="currentColor" stroke="none"/>
  <path d="M18.1732 10H23.3543C23.2348 10.3705 23.0418 10.7221 22.7765 11.032L14.2837 20.9489C13.6839 21.6492 12.8394 22 11.9999 22C11.1605 22 10.3159 21.6492 9.71619 20.9489L1.22339 11.032C0.958001 10.7221 0.765063 10.3705 0.645508 10H5.82697L9.70626 18.8446C9.71709 18.8693 9.72892 18.8935 9.74172 18.9173L11.1196 21.4744C11.2941 21.7981 11.6322 22 11.9999 22C12.3677 22 12.7058 21.7981 12.8803 21.4744L14.2582 18.9173C14.271 18.8936 14.2828 18.8693 14.2936 18.8446L18.1732 10Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
