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
 * Piarrowturnleftupduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnleftupduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn left up icon",
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
      d="M4 8.85867C5.2963 7.10583 6.81065 5.53153 8.50473 4.1746C8.65006 4.0582 8.82503 4 9 4C9.17497 4 9.34994 4.0582 9.49526 4.1746C11.1893 5.53153 12.7037 7.10583 14 8.85867"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 4V12C9 14.8003 9 16.2004 9.54497 17.27C10.0243 18.2108 10.7892 18.9757 11.73 19.455C12.7996 20 14.1997 20 17 20H20"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowturnleftupduostroke;
