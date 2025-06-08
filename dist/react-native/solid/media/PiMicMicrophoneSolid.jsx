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
 * Pimicmicrophonesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicmicrophonesolid = ({
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
      d="M20.4533 11.0148C19.5119 11.9562 18.3019 12.468 17.0711 12.5498L7.43807 21.1688C6.14764 22.3234 4.18 22.2688 2.9556 21.0444C1.73119 19.82 1.67658 17.8524 2.83118 16.5619L11.4502 6.92893C11.532 5.69807 12.0438 4.4881 12.9852 3.5467C15.0474 1.48443 18.391 1.48443 20.4533 3.5467C22.5156 5.60896 22.5156 8.95255 20.4533 11.0148ZM12.4812 8.77599L15.224 11.5188L6.10448 19.6783C5.6051 20.1252 4.84364 20.104 4.36981 19.6302C3.89598 19.1564 3.87484 18.3949 4.32166 17.8955L12.4812 8.77599Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pimicmicrophonesolid;
