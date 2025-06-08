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
 * Piarrowbigupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big up icon",
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
      d="M13.4 20.997H10.6C10.0399 20.997 9.75992 20.997 9.54601 20.888C9.35784 20.7921 9.20486 20.6391 9.10899 20.451C9 20.2371 9 19.957 9 19.397V9.47368C7.6643 9.5397 6.33024 9.64983 5 9.80409C6.81482 7.35012 8.93491 5.14609 11.3066 3.2464C11.5101 3.08343 11.755 3.00195 12 3.00195C12.245 3.00195 12.4899 3.08343 12.6934 3.2464C15.0651 5.14609 17.1852 7.35012 19 9.80409C17.6698 9.64983 16.3357 9.5397 15 9.47368V19.397C15 19.957 15 20.2371 14.891 20.451C14.7951 20.6391 14.6421 20.7921 14.454 20.888C14.2401 20.997 13.9601 20.997 13.4 20.997Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigupstroke;
