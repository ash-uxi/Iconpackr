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
 * Pifacebookcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacebookcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "facebook icon",
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
    <path d="M14.596 8c-1.26 0-1.89 0-2.371.28-.423.247-.768.64-.983 1.124-.246.55-.246 1.27-.246 2.71V13m0 0v7.999m0-7.999h-2.25m2.25 0h3.75m-3.75 7.999V21m0-.001L12 21c2.514 0 3.77 0 4.78-.354a6.3 6.3 0 0 0 3.866-3.865C21 15.77 21 14.514 21 12s0-3.77-.354-4.78a6.3 6.3 0 0 0-3.865-3.866C15.77 3 14.514 3 12 3s-3.77 0-4.78.354a6.3 6.3 0 0 0-3.866 3.865C3 8.23 3 9.486 3 12s0 3.77.354 4.78a6.3 6.3 0 0 0 3.865 3.866c.866.303 1.913.347 3.777.353" />
    <path
      fill={color}
      d="M3.354 7.22C3 8.23 3 9.485 3 12s0 3.77.354 4.78a6.3 6.3 0 0 0 3.865 3.866C8.23 21 9.486 21 12 21s3.77 0 4.78-.354a6.3 6.3 0 0 0 3.866-3.865C21 15.77 21 14.514 21 12s0-3.77-.354-4.78a6.3 6.3 0 0 0-3.865-3.866C15.77 3 14.514 3 12 3s-3.77 0-4.78.354a6.3 6.3 0 0 0-3.866 3.865"
      opacity={0.28}
    />
  </Svg>
);

export default Pifacebookcontrast;
