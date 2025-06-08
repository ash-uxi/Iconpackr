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
 * Piscalecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscalecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "scale icon",
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
      fill={color}
      d="M20.344 6.202 17.8 3.656c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-9.617 9.617c-.792.792-1.188 1.188-1.336 1.644a2 2 0 0 0 0 1.236c.148.457.544.853 1.336 1.645l2.546 2.546c.792.792 1.188 1.188 1.645 1.336.401.13.834.13 1.236 0 .457-.148.853-.544 1.645-1.336l9.616-9.617c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.456-.545-.852-1.337-1.644"
      opacity={0.28}
    />
    <path d="m4.222 12.707 3.536 3.535M9.879 7.05l3.536 3.536m-.707-6.364 2.121 2.12M7.05 9.88l2.122 2.12m-5.516 5.8 2.546 2.545c.792.792 1.188 1.188 1.645 1.336.401.13.834.13 1.236 0 .457-.148.853-.544 1.645-1.336l9.616-9.617c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.456-.545-.852-1.337-1.644L17.8 3.656c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-9.617 9.617c-.792.792-1.188 1.188-1.336 1.644a2 2 0 0 0 0 1.236c.148.457.544.853 1.336 1.645" />
  </Svg>
);

export default Piscalecontrast;
