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
 * Pisupportmoneydonationstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisupportmoneydonationstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "support money donation icon",
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
      d="M15.4235 14H19.8946C21.2582 14 23.3624 15.6872 21.845 16.997C17.5 21 10.5 21 6 16.9133M10 16H14.8384C15.6018 16 16.0983 15.1966 15.7569 14.5138C15.293 13.586 14.3448 13 13.3075 13H12.1853C12.0634 13 11.9433 12.9716 11.8343 12.9171C10.0284 12.0142 8.00087 11.6533 5.99624 11.8764M5.99624 11.8764C5.93243 10.8294 5.06307 10 4 10C2.89543 10 2 10.8954 2 12V17C2 18.1046 2.89543 19 4 19C5.10457 19 6 18.1046 6 17V16.9133M5.99624 11.8764C5.99874 11.9173 6 11.9585 6 12V16.9133M19.5 3.62734C20.4067 4.25982 21 5.31063 21 6.5C21 8.26324 19.6961 9.72194 18 9.96456M17 5.5C17 7.433 15.433 9 13.5 9C11.567 9 10 7.433 10 5.5C10 3.567 11.567 2 13.5 2C15.433 2 17 3.567 17 5.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisupportmoneydonationstroke;
