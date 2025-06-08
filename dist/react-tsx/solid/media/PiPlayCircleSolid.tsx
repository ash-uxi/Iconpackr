import React from 'react';

/**
 * PiPlayCircleSolid icon from the solid style in media category.
 */
interface PiPlayCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlayCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'play-circle icon',
  ...props
}: PiPlayCircleSolidProps): JSX.Element {
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
      <path d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM13.3215 9.65944C12.729 9.27855 12.2695 8.98317 11.896 8.78874C11.522 8.59408 11.1956 8.47903 10.8753 8.50191C10.369 8.53807 9.90332 8.79231 9.5991 9.19867C9.40668 9.45568 9.32695 9.79246 9.28845 10.2123C9.25 10.6317 9.25 11.1779 9.25 11.8823V12.1176C9.25 12.822 9.25 13.3682 9.28845 13.7876C9.32695 14.2075 9.40668 14.5442 9.5991 14.8013C9.90332 15.2076 10.369 15.4619 10.8753 15.498C11.1956 15.5209 11.522 15.4058 11.896 15.2112C12.2695 15.0168 12.729 14.7214 13.3215 14.3405L13.506 14.2219C14.0191 13.892 14.4189 13.635 14.7117 13.4067C15.0068 13.1765 15.2229 12.9537 15.3381 12.6811C15.5221 12.2456 15.5221 11.7543 15.3381 11.3188C15.2229 11.0462 15.0068 10.8234 14.7117 10.5933C14.4188 10.3649 14.0191 10.1079 13.5059 9.77801L13.3215 9.65944Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
