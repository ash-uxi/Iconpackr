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
 * Pimousescrolldownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimousescrolldownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mouse scroll down icon",
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
      d="M14 9.5C13.5065 10.158 12.934 10.7522 12.2957 11.2694C12.2094 11.3394 12.1047 11.3744 12 11.3744C11.8953 11.3744 11.7906 11.3394 11.7043 11.2694C11.066 10.7522 10.4935 10.158 10 9.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 14V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimousescrolldownduostroke;
