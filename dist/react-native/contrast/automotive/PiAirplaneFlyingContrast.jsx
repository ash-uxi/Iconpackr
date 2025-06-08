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
 * Piairplaneflyingcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaneflyingcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane flying icon",
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
    <path d="M3 20h18M6.162 16H20a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-3L8.896 5.025A3 3 0 0 0 6.64 4H6l3 8H6l-2.748-1.832A1 1 0 0 0 2.697 10H2l1.316 3.949A3 3 0 0 0 6.162 16" />
    <path
      fill={color}
      d="M6.162 16H20a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-3L8.896 5.025A3 3 0 0 0 6.64 4H6l3 8H6l-2.748-1.832A1 1 0 0 0 2.697 10H2l1.316 3.949A3 3 0 0 0 6.162 16"
      opacity={0.28}
    />
  </Svg>
);

export default Piairplaneflyingcontrast;
