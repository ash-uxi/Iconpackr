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
 * Piarrowturnuprightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnuprightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn up right icon",
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
      d="M15.1413 4C16.8942 5.2963 18.4685 6.81065 19.8254 8.50473C19.9418 8.65006 20 8.82503 20 9M15.1413 14C16.8942 12.7037 18.4685 11.1893 19.8254 9.49527C19.9418 9.34994 20 9.17497 20 9M20 9H12C9.19974 9 7.79961 9 6.73005 9.54497C5.78924 10.0243 5.02433 10.7892 4.54497 11.73C4 12.7996 4 14.1997 4 17V20"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowturnuprightstroke;
