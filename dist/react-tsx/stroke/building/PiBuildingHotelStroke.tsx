import React from 'react';

/**
 * PiBuildingHotelStroke icon from the stroke style in building category.
 */
interface PiBuildingHotelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBuildingHotelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'building-hotel icon',
  ...props
}: PiBuildingHotelStrokeProps): JSX.Element {
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
      <path d="M18.9999 4.19066V19.5001C18.9999 20.3286 18.3284 21.0001 17.4999 21.0001H13.9999M18.9999 4.19066C14.6419 1.81987 9.35795 1.81991 4.99994 4.1908M18.9999 4.19066C19.6925 4.56742 20.3617 5.00406 21.0001 5.50057M4.99994 4.1908V19.5001C4.99994 20.3286 5.67151 21.0001 6.49994 21.0001H9.99994M4.99994 4.1908C4.30746 4.56753 3.63836 5.00412 3.00006 5.50057M9.99994 21.0001H13.9999M9.99994 21.0001V16.5654M13.9999 21.0001V16.5653M14.8285 17.201C14.5791 16.9516 14.3002 16.7386 13.9999 16.5653M9.17163 17.201C9.42095 16.9517 9.69979 16.7387 9.99994 16.5654M13.9999 16.5653C13.3971 16.2172 12.7082 16.0294 12.0001 16.0294C11.2918 16.0294 10.6029 16.2173 9.99994 16.5654M8 7.00014V7.01014M8 10.0001V10.0101M8 13.0001V13.0101M12 7.00014V7.01014M12 10.0001V10.0101M12 13.0001V13.0101M16 7.00014V7.01014M16 10.0001V10.0101M16 13.0001V13.0101" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
