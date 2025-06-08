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
 * Piamiesocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piamiesocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "amie so icon",
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
    <path d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0" />
    <path
      fill={color}
      d="M8.21 21c1.494 0 2.84-.628 3.79-1.634A5.21 5.21 0 1 0 19.366 12 5.21 5.21 0 1 0 12 4.634 5.21 5.21 0 1 0 4.634 12a5.21 5.21 0 0 0 3.576 9"
      opacity={0.28}
    />
    <path d="M8.21 21c1.494 0 2.84-.628 3.79-1.634A5.21 5.21 0 1 0 19.366 12 5.21 5.21 0 1 0 12 4.634 5.21 5.21 0 1 0 4.634 12a5.21 5.21 0 0 0 3.576 9" />
  </Svg>
);

export default Piamiesocontrast;
