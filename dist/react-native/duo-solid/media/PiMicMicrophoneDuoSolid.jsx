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
 * Pimicmicrophoneduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicmicrophoneduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mic microphone icon",
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
      d="M16.64 12.56a1 1 0 0 1-.814-.44l-3.955-3.954a1 1 0 0 1-.432-.809 5.28 5.28 0 1 1 5.201 5.204"
    />{" "}
    <path
      d="M16.679 11.559 6.77 20.424a2.263 2.263 0 0 1-3.195-3.195l8.865-9.908"
      opacity={0.28}
    />
  </Svg>
);

export default Pimicmicrophoneduosolid;
