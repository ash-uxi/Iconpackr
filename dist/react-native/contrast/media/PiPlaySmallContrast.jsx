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
 * Piplaysmallcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaysmallcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "play small icon",
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
      d="M7 11.808c0-2.643 0-3.964.552-4.702a2.77 2.77 0 0 1 2.02-1.102c.918-.065 2.03.649 4.253 2.078l.298.192c1.93 1.24 2.894 1.86 3.227 2.649a2.77 2.77 0 0 1 0 2.155c-.333.788-1.298 1.408-3.227 2.648l-.298.192c-2.223 1.429-3.335 2.143-4.254 2.078a2.77 2.77 0 0 1-2.019-1.102C7 16.156 7 14.834 7 12.192z"
      opacity={0.28}
    />
    <path d="M7 11.808c0-2.643 0-3.964.552-4.702a2.77 2.77 0 0 1 2.02-1.102c.918-.065 2.03.649 4.253 2.078l.298.192c1.93 1.24 2.894 1.86 3.227 2.649a2.77 2.77 0 0 1 0 2.155c-.333.788-1.298 1.408-3.227 2.648l-.298.192c-2.223 1.429-3.335 2.143-4.254 2.078a2.77 2.77 0 0 1-2.019-1.102C7 16.156 7 14.834 7 12.192z" />
  </Svg>
);

export default Piplaysmallcontrast;
