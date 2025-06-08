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
 * Pimousescrolldownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousescrolldownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse scroll down icon",
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
      d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10ZM10.8 8.9C10.4686 8.45817 9.84183 8.36863 9.4 8.7C8.95817 9.03137 8.86863 9.65817 9.2 10.1C9.74285 10.8238 10.3726 11.4774 11.0747 12.0464C11.3439 12.2645 11.6723 12.3744 12 12.3744C12.3277 12.3744 12.6561 12.2645 12.9253 12.0464C13.6274 11.4774 14.2572 10.8238 14.8 10.1C15.1314 9.65817 15.0418 9.03137 14.6 8.7C14.1582 8.36863 13.5314 8.45817 13.2 8.9C12.8437 9.37505 12.4417 9.81317 12 10.2082C11.5583 9.81317 11.1563 9.37505 10.8 8.9Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimousescrolldownsolid;
