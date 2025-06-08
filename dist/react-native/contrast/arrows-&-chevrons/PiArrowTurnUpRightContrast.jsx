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
 * Piarrowturnuprightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnuprightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn up right icon",
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
      d="M15.141 4a25.2 25.2 0 0 1 4.684 4.505.79.79 0 0 1 0 .99A25.2 25.2 0 0 1 15.141 14c.16-.935.241-1.402.303-1.87a24 24 0 0 0 0-6.26c-.062-.468-.142-.935-.303-1.87"
      opacity={0.28}
    />
    <path d="M15.649 9H12c-2.8 0-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 12.8 4 14.2 4 17v3M15.649 9q0-1.57-.205-3.13c-.062-.468-.142-.935-.303-1.87a25.2 25.2 0 0 1 4.684 4.505.79.79 0 0 1 0 .99A25.2 25.2 0 0 1 15.141 14c.16-.935.241-1.402.303-1.87q.204-1.56.205-3.13" />
  </Svg>
);

export default Piarrowturnuprightcontrast;
