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
 * Pigooglestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigooglestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "google icon",
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
      d="M18.0543 4.51753C16.5373 3.46708 14.6867 2.8501 12.6894 2.8501C7.54259 2.8501 3.25 6.78097 3.25 12C3.25 17.0534 7.43253 21.0996 12.6894 21.0996C18.0543 21.0996 21.4965 16.9741 21.2362 12H12.6894"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigooglestroke;
