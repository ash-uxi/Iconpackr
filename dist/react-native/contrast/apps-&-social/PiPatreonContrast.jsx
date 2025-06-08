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
 * Pipatreoncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipatreoncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "patreon icon",
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
      d="M21.13 8.008c-.003-2.553-1.992-4.647-4.325-5.402-2.899-.937-6.72-.801-9.487.504-3.354 1.582-4.407 5.049-4.446 8.506-.033 2.843.251 10.33 4.474 10.384 3.137.039 3.605-4.004 5.056-5.951 1.034-1.385 2.364-1.777 4.001-2.182 2.814-.696 4.732-2.917 4.728-5.859"
      opacity={0.28}
    />
    <path d="M21.13 8.008c-.003-2.553-1.992-4.647-4.325-5.402-2.899-.937-6.72-.801-9.487.504-3.354 1.582-4.407 5.049-4.446 8.506-.033 2.843.251 10.33 4.474 10.384 3.137.039 3.605-4.004 5.056-5.951 1.034-1.385 2.364-1.777 4.001-2.182 2.814-.696 4.732-2.917 4.728-5.859" />
  </Svg>
);

export default Pipatreoncontrast;
