import React from 'react';

/**
 * PiFaceWinkDuoSolid icon from the duo-solid style in general category.
 */
interface PiFaceWinkDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceWinkDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-wink icon',
  ...props
}: PiFaceWinkDuoSolidProps): JSX.Element {
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
      <path d="M12.0001 2.0459C6.39441 2.0459 1.8501 6.59021 1.8501 12.1959C1.8501 17.8016 6.39441 22.3459 12.0001 22.3459C17.6058 22.3459 22.1501 17.8016 22.1501 12.1959C22.1501 6.59021 17.6058 2.0459 12.0001 2.0459Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M13.45 10.6894C13.45 10.4242 13.5553 10.1698 13.7429 9.98231L14.45 9.27528C14.8405 8.88477 15.4737 8.88481 15.8642 9.27535C16.2547 9.66587 16.2547 10.299 15.8642 10.6895C16.2547 11.08 16.2547 11.7132 15.8642 12.1037C15.4736 12.4942 14.8405 12.4942 14.45 12.1037L13.7428 11.3966C13.5553 11.209 13.4499 10.9547 13.45 10.6894Z" fill={color || "currentColor"} /> <path d="M9 9.19664C9.55229 9.19664 10 9.64435 10 10.1966V11.1966C10 11.7489 9.55229 12.1966 9 12.1966C8.44772 12.1966 8 11.7489 8 11.1966L8 10.1966C8 9.64435 8.44772 9.19664 9 9.19664Z" fill={color || "currentColor"} /> <path d="M9.1433 14.0965C8.75668 13.7021 8.12354 13.6958 7.72916 14.0825C7.33477 14.4691 7.32848 15.1022 7.7151 15.4966C8.80289 16.6062 10.3217 17.2966 11.9999 17.2966C13.6781 17.2966 15.1969 16.6062 16.2847 15.4966C16.6714 15.1022 16.6651 14.4691 16.2707 14.0825C15.8763 13.6958 15.2432 13.7021 14.8565 14.0965C14.1294 14.8382 13.1191 15.2966 11.9999 15.2966C10.8807 15.2966 9.87043 14.8382 9.1433 14.0965Z" fill={color || "currentColor"} />
    </svg>
  );
}
