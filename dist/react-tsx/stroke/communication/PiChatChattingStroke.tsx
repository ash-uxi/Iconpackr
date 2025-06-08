import React from 'react';

/**
 * PiChatChattingStroke icon from the stroke style in communication category.
 */
interface PiChatChattingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChatChattingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'chat-chatting icon',
  ...props
}: PiChatChattingStrokeProps): JSX.Element {
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
      <path d="M17.0499 18.7179L18.7902 18.8422C19.5524 18.8966 19.9335 18.9238 20.2185 18.7887C20.4686 18.6701 20.6701 18.4686 20.7887 18.2185C20.9238 17.9335 20.8966 17.5524 20.8422 16.7902L20.7179 15.0499C20.6979 14.7705 20.6879 14.6308 20.6859 14.4882C20.6822 14.2301 20.679 14.366 20.6949 14.1083C20.7037 13.966 20.7835 13.2966 20.9433 11.9577C20.9807 11.6437 21 11.3241 21 11C21 6.58172 17.4183 3 13 3C10.2503 3 7.82466 4.38723 6.38468 6.5M13.8 15.6C13.8 12.6176 11.3823 10.2 8.4 10.2C7.1159 10.2 5.93648 10.6482 5.00966 11.3967C4.94279 11.4507 4.87722 11.5063 4.81303 11.5633C3.70072 12.5525 3 13.9944 3 15.6C3 15.8913 3.02307 16.1772 3.06748 16.456C3.16295 17.0554 3.21068 17.3551 3.21896 17.4476C3.23137 17.5865 3.23003 17.5555 3.22967 17.6949C3.22944 17.7878 3.22147 17.8994 3.20553 18.1225L3.10654 19.5084C3.06979 20.0228 3.05142 20.2801 3.14262 20.4724C3.22268 20.6413 3.35867 20.7773 3.52753 20.8573C3.71989 20.9485 3.97712 20.9302 4.49158 20.8934L5.8774 20.7944C6.10057 20.7785 6.21216 20.7705 6.30504 20.7703C6.44444 20.7699 6.41347 20.7686 6.55232 20.781C6.64482 20.7893 6.94471 20.837 7.54395 20.9325C7.82276 20.9769 8.10869 21 8.4 21C10.0056 21 11.4475 20.2992 12.4366 19.1869C12.4937 19.1227 12.5493 19.0572 12.6032 18.9903C13.3518 18.0635 13.8 16.8841 13.8 15.6Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
