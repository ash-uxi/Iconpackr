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
 * Picloudaiduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudaiduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud ai icon",
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
      fill={color || "#000"}
      d="M12.5 4c3.16 0 5.86 1.953 6.965 4.715A6.5 6.5 0 0 1 16.5 21h-10a5.5 5.5 0 0 1-1.383-10.824A7.5 7.5 0 0 1 7.434 5.97 7.47 7.47 0 0 1 12.5 4"
      opacity={0.28}
    />{" "}
    <path d="M9 17zM13 10c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" />
  </Svg>
);

export default Picloudaiduosolid;
