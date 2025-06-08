import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pisunsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisunsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sun icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M0 12C0 11.4477 0.447715 11 1 11H2C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13H1C0.447715 13 0 12.5523 0 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12 0C12.5523 0 13 0.447715 13 1V2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2V1C11 0.447715 11.4477 0 12 0Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12 21C12.5523 21 13 21.4477 13 22V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V22C11 21.4477 11.4477 21 12 21Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M18.364 18.364C18.7545 17.9734 19.3876 17.9734 19.7782 18.364L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0948 20.8758 19.4616 20.8758 19.0711 20.4853L18.364 19.7782C17.9734 19.3876 17.9734 18.7545 18.364 18.364Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L19.7782 5.63604C19.3876 6.02656 18.7545 6.02656 18.364 5.63604C17.9734 5.24551 17.9734 4.61235 18.364 4.22183L19.0711 3.51472C19.4616 3.12419 20.0948 3.12419 20.4853 3.51472Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M21 12C21 11.4477 21.4477 11 22 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H22C21.4477 13 21 12.5523 21 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3.51472 3.51472C3.90524 3.12419 4.53841 3.12419 4.92893 3.51472L5.63604 4.22183C6.02656 4.61235 6.02656 5.24551 5.63604 5.63604C5.24551 6.02656 4.61235 6.02656 4.22183 5.63604L3.51472 4.92893C3.12419 4.53841 3.12419 3.90524 3.51472 3.51472Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M5.63604 18.364C6.02656 18.7545 6.02656 19.3876 5.63604 19.7782L4.92893 20.4853C4.53841 20.8758 3.90524 20.8758 3.51472 20.4853C3.12419 20.0948 3.12419 19.4616 3.51472 19.0711L4.22183 18.364C4.61235 17.9734 5.24551 17.9734 5.63604 18.364Z"
      fill={color}
      stroke="none"
    />
    <rect width="24" height="24" fill={color} stroke="none" />
  </Svg>
);

export default Pisunsolid;
