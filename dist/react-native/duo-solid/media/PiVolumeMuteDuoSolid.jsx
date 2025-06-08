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
 * Pivolumemuteduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumemuteduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume mute icon",
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
      d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009C12.147 22.905 15 21.437 15 18.913z"
      opacity={0.28}
    />{" "}
    <path d="m22 10-2.5 2.5m0 0L17 15m2.5-2.5L22 15m-2.5-2.5L17 10" />
  </Svg>
);

export default Pivolumemuteduosolid;
