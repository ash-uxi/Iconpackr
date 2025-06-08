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
 * Piarrowbigturnrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigturnrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big turn right icon",
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
    <path d="M20.759 11.307A35.3 35.3 0 0 0 14.2 5q.232 1.995.33 4C6.998 9 2.998 12 2.998 19c3-4 7-4 11.535-4a61 61 0 0 1-.33 4 35.3 35.3 0 0 0 6.557-6.307 1.11 1.11 0 0 0 0-1.386" />
    <path
      fill={color}
      d="M20.76 11.307A35.3 35.3 0 0 0 14.201 5q.231 1.995.33 4C6.997 9 2.997 12 2.997 19c3-4 7-4 11.535-4a61 61 0 0 1-.33 4 35.3 35.3 0 0 0 6.557-6.307 1.11 1.11 0 0 0 0-1.386"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowbigturnrightcontrast;
