import React from 'react';

/**
 * PiChatTypingStroke icon from the stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChatTypingStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chat-typing icon',
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
      <path d="M8 12.0001H8.01M12 12.0001H12.01M16 12.0001H16.01M20.188 15.7371C20.7232 14.5639 21.0001 13.2895 21 12.0001C20.9987 10.7652 20.7433 9.54391 20.2497 8.41203C19.7562 7.28016 19.0349 6.26196 18.1309 5.42078C17.227 4.57961 16.1596 3.93345 14.9951 3.52252C13.8307 3.11158 12.5942 2.94466 11.3624 3.03213C10.1307 3.11961 8.9302 3.4596 7.83553 4.03098C6.74086 4.60235 5.77548 5.39287 4.99945 6.35335C4.22341 7.31384 3.65333 8.42374 3.32466 9.61401C2.99599 10.8043 2.91577 12.0495 3.089 13.2721C3.259 14.4761 3.345 15.0771 3.357 15.2361C3.377 15.4931 3.373 15.4011 3.371 15.6591C3.371 15.8191 3.357 15.9991 3.331 16.3611L3.178 18.5141C3.116 19.3711 3.086 19.8011 3.238 20.1211C3.371 20.4021 3.598 20.6291 3.879 20.7621C4.2 20.9141 4.629 20.8841 5.486 20.8221L7.639 20.6691C8.001 20.6431 8.18199 20.6291 8.34099 20.6291C8.59899 20.6271 8.507 20.6231 8.764 20.6431C8.923 20.6551 9.52499 20.7401 10.728 20.9101C12.652 21.1848 14.6132 20.8294 16.3184 19.8969C18.0236 18.9645 19.3811 17.5051 20.188 15.7371Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
