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
 * Piaudiobars02stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piaudiobars02stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "audio bars02 icon",
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
      d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piaudiobars02stroke;
