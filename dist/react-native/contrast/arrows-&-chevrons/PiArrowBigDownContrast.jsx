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
 * Piarrowbigdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big down icon",
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
      d="M10.6 3.003h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.213.109.494.109 1.054v9.923a61 61 0 0 0 4-.33 35.3 35.3 0 0 1-6.307 6.557 1.11 1.11 0 0 1-1.386 0A35.3 35.3 0 0 1 5 14.195q1.995.232 4 .33V4.604c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.11.494-.11 1.054-.11"
      opacity={0.28}
    />
    <path d="M13.4 3.002h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 3.762 9 4.042 9 4.602v9.923a61 61 0 0 1-4-.33 35.3 35.3 0 0 0 6.307 6.558 1.11 1.11 0 0 0 1.386 0A35.3 35.3 0 0 0 19 14.195q-1.995.231-4 .33V4.602c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.11-.494-.11-1.054-.11" />
  </Svg>
);

export default Piarrowbigdowncontrast;
