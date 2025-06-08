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
 * Piserverexclamationmarksolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piserverexclamationmarksolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "server exclamation mark icon",
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
      d="M20 18.9996C20 19.5519 19.5523 19.9996 19 19.9996C18.4477 19.9996 18 19.5519 18 18.9996V14.9996C18 14.4474 18.4477 13.9996 19 13.9996C19.5523 13.9996 20 14.4474 20 14.9996V18.9996Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M20 22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V21.9989C18 21.4466 18.4477 20.9989 19 20.9989C19.5523 20.9989 20 21.4466 20 21.9989V22Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M5.4 13C3.52223 13 2 14.5222 2 16.4V17.6C2 19.4778 3.52223 21 5.4 21H16.1703C16.2321 20.8251 16.3096 20.6576 16.4011 20.4993C16.146 20.0581 16 19.5459 16 18.9996V14.9996C16 14.2315 16.2887 13.5307 16.7636 13H5.4ZM13 17C13 16.4477 13.4477 16 14 16H14.01C14.5623 16 15.01 16.4477 15.01 17C15.01 17.5523 14.5623 18 14.01 18H14C13.4477 18 13 17.5523 13 17Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M5.4 3C3.52223 3 2 4.52223 2 6.4V7.6C2 9.47777 3.52223 11 5.4 11H18.6C20.4778 11 22 9.47777 22 7.6V6.4C22 4.52223 20.4778 3 18.6 3H5.4ZM13 7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8C13.4477 8 13 7.55228 13 7ZM17 7C17 6.44772 17.4477 6 18 6C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8C17.4477 8 17 7.55228 17 7Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piserverexclamationmarksolid;
