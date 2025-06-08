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
 * Pisteeringwheelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisteeringwheelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "steering wheel icon",
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
    <path d="M12 19.5a7.5 7.5 0 0 1 9.148-7.318M12 19.5a7.5 7.5 0 0 0-9.149-7.318M12 19.5c0 .566.062 1.118.181 1.648M12 19.5c0 .566-.063 1.118-.182 1.648m.363 0a9 9 0 0 1-.363 0m.363 0a9.15 9.15 0 0 0 8.967-8.966m-9.33 8.966a9.15 9.15 0 0 1-8.967-8.966m0 0a9 9 0 0 1 0-.31m0 0A15.93 15.93 0 0 1 12 9c3.402 0 6.556 1.062 9.149 2.872m-18.299 0a9.15 9.15 0 0 1 18.299 0m0 0a9 9 0 0 1-.001.31M12 12.01V12" />
    <path
      fill={color}
      d="M19.5 12a7.5 7.5 0 0 0-7.319 9.148 9 9 0 0 1-.363 0q.18-.797.182-1.648a7.5 7.5 0 0 0-9.149-7.318 9 9 0 0 1 0-.31A15.93 15.93 0 0 1 12 9c3.402 0 6.556 1.062 9.149 2.872a9 9 0 0 1-.001.31A7.5 7.5 0 0 0 19.5 12"
      opacity={0.28}
    />
  </Svg>
);

export default Pisteeringwheelcontrast;
