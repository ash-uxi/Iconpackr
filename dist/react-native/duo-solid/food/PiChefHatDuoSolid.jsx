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
 * Pichefhatduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichefhatduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chef hat icon",
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
    <path d="M10 17h4m-4 0v-3m0 3H7m7 0v-5m0 5h3" />{" "}
    <path
      fill={color || "#000"}
      d="M12 2a5 5 0 0 0-4.584 3A5.5 5.5 0 0 0 6 15.794v2.843c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023h5.273c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093c.166-.325.224-.656.25-.968.023-.292.023-.642.023-1.03v-2.844A5.502 5.502 0 0 0 16.584 5 5 5 0 0 0 12 2"
      opacity={0.28}
    />
  </Svg>
);

export default Pichefhatduosolid;
