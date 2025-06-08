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
 * Pipiechart01contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechart01contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart01 icon",
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
      fill={color}
      d="M12.044 10.6V4.27c0-.75.61-1.368 1.351-1.257a9.05 9.05 0 0 1 7.592 7.592c.111.74-.507 1.351-1.256 1.351H13.4c-.75 0-1.357-.607-1.357-1.356"
      opacity={0.28}
    />
    <path d="M20.335 15.574A9.044 9.044 0 1 1 8.426 3.665m3.618.604v6.33c0 .75.607 1.357 1.356 1.357h6.33c.75 0 1.368-.61 1.257-1.351a9.05 9.05 0 0 0-7.591-7.592c-.741-.111-1.352.507-1.352 1.256" />
  </Svg>
);

export default Pipiechart01contrast;
