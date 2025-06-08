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
 * Pimicoffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicoffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mic off icon",
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
    <path d="M20 12a8 8 0 0 1-8 8m0 0v2m0-2a8 8 0 0 1-2.091-.276m-3.566-2.067L2 22m4.343-4.343A7.98 7.98 0 0 1 4 12m2.343 5.657 2.829-2.829m0 0A3.99 3.99 0 0 1 8 12V7a4 4 0 1 1 8 0v1m-6.828 6.828L16 8m6-6-6 6m-.29 5.5a4.01 4.01 0 0 1-2.21 2.21" />
    <path
      fill={color}
      d="M8 7v5c0 1.105.448 2.105 1.172 2.828L16 8V7a4 4 0 0 0-8 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pimicoffcontrast;
