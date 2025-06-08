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
 * Pisendplanehorizontalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisendplanehorizontalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "send plane horizontal icon",
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
      d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.9 53.9 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12s-1.474 2.207-2.605 2.933a53.9 53.9 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628z"
      opacity={0.28}
    />
    <path d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.9 53.9 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12s-1.474 2.207-2.605 2.933a53.9 53.9 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628zm0 0h4.9" />
  </Svg>
);

export default Pisendplanehorizontalcontrast;
