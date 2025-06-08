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
 * Piarrowturnleftdownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnleftdownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn left down icon",
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
      d="M4 15.1416C5.2963 16.8944 6.81065 18.4687 8.50473 19.8257C8.65006 19.9421 8.82503 20.0003 9 20.0003C9.17497 20.0003 9.34994 19.9421 9.49526 19.8257C11.1893 18.4687 12.7037 16.8944 14 15.1416"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 20V12C9 9.19974 9 7.79961 9.54497 6.73005C10.0243 5.78924 10.7892 5.02433 11.73 4.54497C12.7996 4 14.1997 4 17 4H20"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowturnleftdownduostroke;
