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
 * Pipindefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipindefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pin default icon",
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
    <path d="M12 15.693V21m0-5.307c-2.201 0-4.39-.184-6.567-.495a.504.504 0 0 1-.433-.5 4.54 4.54 0 0 1 2.194-3.886c.63-.381 1.034-1.029.85-1.788l-.986-4.092a1.6 1.6 0 0 1 1.406-1.967c2.366-.22 4.706-.22 7.072 0a1.6 1.6 0 0 1 1.406 1.967l-.986 4.092c-.183.76.22 1.407.85 1.788A4.54 4.54 0 0 1 19 14.698a.504.504 0 0 1-.433.5c-2.178.31-4.366.495-6.567.495" />
    <path
      fill={color}
      d="M7.058 4.932a1.6 1.6 0 0 1 1.406-1.967c2.366-.22 4.706-.22 7.072 0a1.6 1.6 0 0 1 1.406 1.967l-.986 4.092c-.183.76.22 1.407.85 1.788A4.54 4.54 0 0 1 19 14.698a.504.504 0 0 1-.433.5c-2.178.31-4.366.495-6.567.495s-4.39-.184-6.567-.495a.504.504 0 0 1-.433-.5 4.54 4.54 0 0 1 2.194-3.886c.63-.381 1.034-1.029.85-1.788z"
      opacity={0.28}
    />
  </Svg>
);

export default Pipindefaultcontrast;
