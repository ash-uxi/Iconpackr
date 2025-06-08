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
 * Piarrowbigrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big right icon",
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
    <path d="M3.002 10.6v2.8c0 .56 0 .84.11 1.054a1 1 0 0 0 .436.437c.214.109.494.109 1.054.109h9.924a61 61 0 0 1-.33 4 35.3 35.3 0 0 0 6.557-6.307 1.11 1.11 0 0 0 0-1.386A35.3 35.3 0 0 0 14.195 5q.232 1.995.33 4H4.603c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437c-.109.214-.109.494-.109 1.054" />
    <path
      fill={color}
      d="M3.003 13.4v-2.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.762 9 4.043 9 4.603 9h9.923a61 61 0 0 0-.33-4 35.3 35.3 0 0 1 6.557 6.307 1.11 1.11 0 0 1 0 1.386A35.3 35.3 0 0 1 14.195 19q.232-1.995.33-4H4.604c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437c-.11-.214-.11-.494-.11-1.054"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowbigrightcontrast;
