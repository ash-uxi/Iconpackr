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
 * Pimousescrollupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousescrollupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse scroll up icon",
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
      d="M14 10.5C13.5065 9.842 12.934 9.24779 12.2957 8.73057C12.2094 8.66062 12.1047 8.62564 12 8.62564C11.8953 8.62564 11.7906 8.66062 11.7043 8.73057C11.066 9.24779 10.4935 9.842 10 10.5M19 10V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimousescrollupstroke;
