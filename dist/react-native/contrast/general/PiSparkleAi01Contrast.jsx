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
 * Pisparkleai01contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisparkleai01contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sparkle ai01 icon",
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
      <path d="M12.9 3c.64 5.037 2.63 8.142 8.1 9-5.19.814-7.43 3.728-8.1 9-.67-5.272-2.91-8.186-8.1-9 5.19-.814 7.43-3.728 8.1-9M5.7 3c.248 1.506 1.151 2.445 2.7 2.7-1.549.255-2.452 1.194-2.7 2.7C5.452 6.894 4.548 5.955 3 5.7 4.506 5.452 5.445 4.548 5.7 3" />
    </g>
    <path d="M5 17.65V19m0 0v1.35M5 19h1.35M5 19H3.65M12.9 3c.64 5.037 2.63 8.142 8.1 9-5.19.814-7.43 3.728-8.1 9-.67-5.272-2.91-8.186-8.1-9 5.19-.814 7.43-3.728 8.1-9M5.7 3c.248 1.506 1.151 2.445 2.7 2.7-1.549.255-2.452 1.194-2.7 2.7C5.452 6.894 4.548 5.955 3 5.7 4.506 5.452 5.445 4.548 5.7 3" />
  </Svg>
);

export default Pisparkleai01contrast;
