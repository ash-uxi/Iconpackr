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
 * Pimousedefaultsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousedefaultsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse default icon",
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
      d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10ZM13 7.95C13 7.39772 12.5523 6.95 12 6.95C11.4477 6.95 11 7.39772 11 7.95V10.05C11 10.6023 11.4477 11.05 12 11.05C12.5523 11.05 13 10.6023 13 10.05V7.95Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimousedefaultsolid;
