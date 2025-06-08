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
 * Pimiconcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimiconcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mic on icon",
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
    <path d="M12 20a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 8v2m4-15v5a4 4 0 0 1-8 0V7a4 4 0 1 1 8 0" />
    <path fill={color} d="M8 7a4 4 0 1 1 8 0v5a4 4 0 0 1-8 0z" opacity={0.28} />
  </Svg>
);

export default Pimiconcontrast;
