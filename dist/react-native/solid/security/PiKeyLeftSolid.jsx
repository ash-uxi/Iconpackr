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
 * Pikeyleftsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyleftsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key left icon",
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
      d="M18 7C15.581 7 13.5633 8.71776 13.1 11H2C1.44772 11 1 11.4477 1 12V15C1 15.5523 1.44772 16 2 16C2.55228 16 3 15.5523 3 15V13H5V14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14V13H13.1C13.5633 15.2822 15.581 17 18 17C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pikeyleftsolid;
