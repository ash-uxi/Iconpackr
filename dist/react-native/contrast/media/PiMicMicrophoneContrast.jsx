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
 * Pimicmicrophonecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicmicrophonecontrast = ({
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
    <path d="m16.676 11.561.003-.002-4.238-4.238-.002.003m4.237 4.237-9.905 8.863a2.263 2.263 0 0 1-3.195-3.195l8.863-9.905m4.237 4.237a4.28 4.28 0 1 0-4.238-4.237m4.238 4.237h-.021m-4.216-4.237v.019" />
    <path
      fill={color}
      d="M19.746 4.254a4.28 4.28 0 0 0-7.307 3.089l4.216 4.218a4.28 4.28 0 0 0 3.091-7.307"
      opacity={0.28}
    />
  </Svg>
);

export default Pimicmicrophonecontrast;
