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
 * Piprioritycriticalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprioritycriticalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority critical icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16" />
      <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16" />
    </g>
    <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16" />
  </Svg>
);

export default Piprioritycriticalcontrast;
