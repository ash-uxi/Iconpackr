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
 * Pimicmicrophonestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicmicrophonestroke = ({
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
      d="M16.6549 11.561C17.7718 11.5777 18.894 11.1599 19.7462 10.3077C21.4179 8.63597 21.4179 5.92554 19.7462 4.25381C18.0745 2.58207 15.364 2.58206 13.6923 4.2538C12.8407 5.10541 12.4229 6.22654 12.4389 7.34261M12.4409 7.3214L16.6786 11.5591L6.77128 20.4236C5.87637 21.2243 4.51182 21.1864 3.6627 20.3373C2.81359 19.4882 2.77571 18.1236 3.57642 17.2287L12.4409 7.3214Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimicmicrophonestroke;
