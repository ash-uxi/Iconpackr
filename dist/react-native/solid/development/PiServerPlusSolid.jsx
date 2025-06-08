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
 * Piserverplussolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piserverplussolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "server plus icon",
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
      d="M2 16.4C2 14.5222 3.52223 13 5.4 13H18.6C18.6693 13 18.738 13.0021 18.8063 13.0062C17.2397 13.106 16 14.4082 16 16C14.3431 16 13 17.3431 13 19C13 19.7684 13.2889 20.4692 13.7639 21H5.4C3.52223 21 2 19.4778 2 17.6V16.4Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M2 6.4C2 4.52223 3.52223 3 5.4 3H18.6C20.4778 3 22 4.52223 22 6.4V7.6C22 9.47777 20.4778 11 18.6 11H5.4C3.52223 11 2 9.47777 2 7.6V6.4ZM14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6ZM18 6C17.4477 6 17 6.44772 17 7C17 7.55228 17.4477 8 18 8C18.5523 8 19 7.55228 19 7C19 6.44772 18.5523 6 18 6Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H18V22C18 22.5523 18.4477 23 19 23C19.5523 23 20 22.5523 20 22V20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H20V16Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piserverplussolid;
