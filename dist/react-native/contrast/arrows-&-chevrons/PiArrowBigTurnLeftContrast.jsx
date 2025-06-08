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
 * Piarrowbigturnleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigturnleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big turn left icon",
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
    <path d="M3.241 11.307A35.3 35.3 0 0 1 9.8 5a61 61 0 0 0-.33 4c7.534 0 11.534 3 11.534 10-3-4-7-4-11.535-4q.1 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386" />
    <path
      fill={color}
      d="M3.241 11.307A35.3 35.3 0 0 1 9.798 5a61 61 0 0 0-.33 4c7.535 0 11.535 3 11.535 10-3-4-7-4-11.535-4q.099 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowbigturnleftcontrast;
