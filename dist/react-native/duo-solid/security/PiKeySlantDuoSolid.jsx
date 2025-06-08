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
 * Pikeyslantduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyslantduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key slant icon",
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
      d="M15.766 7.228 18.595 4.4l2.121 2.121m-4.95.707-5.657 5.657m5.657-5.657 1.414 1.415"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M3.745 12.178a5 5 0 1 1 7.07 7.071 5 5 0 0 1-7.07-7.07"
    />
  </Svg>
);

export default Pikeyslantduosolid;
