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
 * Pidooropencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidooropencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "door open icon",
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
    <path d="M11 20.713V3.308c0-.775 0-1.163.163-1.412a1 1 0 0 1 .619-.43c.29-.064.653.072 1.38.344l3.242 1.216c.936.351 1.404.527 1.749.83.305.269.54.608.684.987.163.43.163.93.163 1.929v10.512c0 1.008 0 1.513-.166 1.945a2.5 2.5 0 0 1-.693.99c-.35.305-.823.477-1.77.823l-3.223 1.174c-.723.264-1.084.396-1.373.33a1 1 0 0 1-.614-.43C11 21.865 11 21.481 11 20.712" />
    <path
      fill={color}
      d="M11 20.713V3.308c0-.775 0-1.163.163-1.412a1 1 0 0 1 .619-.43c.29-.064.653.072 1.38.344l3.242 1.216c.936.351 1.404.527 1.749.83.305.269.54.608.684.987.163.43.163.93.163 1.929v10.512c0 1.008 0 1.513-.166 1.945a2.5 2.5 0 0 1-.693.99c-.35.305-.823.477-1.77.823l-3.223 1.174c-.723.264-1.084.396-1.373.33a1 1 0 0 1-.614-.43C11 21.865 11 21.481 11 20.712"
      opacity={0.28}
    />
    <path d="M14.947 11.618h-.918M2 20h9m8 0h3M5 20V7.98c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C6.9 3.98 7.6 3.98 9 3.98h2" />
  </Svg>
);

export default Pidooropencontrast;
