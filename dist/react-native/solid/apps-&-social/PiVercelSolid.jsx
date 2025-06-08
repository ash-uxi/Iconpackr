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
 * Pivercelsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivercelsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vercel icon",
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
      d="M13.7238 2.95862C12.9505 1.644 11.0494 1.644 10.2761 2.95862L2.02453 16.9863C1.24025 18.3196 2.20156 20.0003 3.7484 20.0003H20.2516C21.7984 20.0003 22.7597 18.3196 21.9754 16.9863L13.7238 2.95862Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pivercelsolid;
