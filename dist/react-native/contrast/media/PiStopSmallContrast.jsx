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
 * Pistopsmallcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistopsmallcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "stop small icon",
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
      d="M9 10.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 9 10.04 9 10.6 9h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 9.76 15 10.04 15 10.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C14.24 15 13.96 15 13.4 15h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C9 14.24 9 13.96 9 13.4z"
      opacity={0.28}
    />
    <path d="M9 10.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 9 10.04 9 10.6 9h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 9.76 15 10.04 15 10.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C14.24 15 13.96 15 13.4 15h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C9 14.24 9 13.96 9 13.4z" />
  </Svg>
);

export default Pistopsmallcontrast;
