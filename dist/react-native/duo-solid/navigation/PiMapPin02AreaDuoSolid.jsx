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
 * Pimappin02areaduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimappin02areaduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "map pin02 area icon",
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
      d="M12 2a5 5 0 0 0-1 9.9V17a1 1 0 1 0 2 0v-5.1A5.002 5.002 0 0 0 12 2"
    />{" "}
    <path
      d="M7 15.164c-2.989.562-5 1.613-5 2.816 0 1.794 4.477 3.25 10 3.25s10-1.456 10-3.25c0-1.203-2.011-2.254-5-2.816"
      opacity={0.28}
    />
  </Svg>
);

export default Pimappin02areaduosolid;
