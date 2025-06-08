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
 * Pidangerskullsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidangerskullsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "danger skull icon",
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
      d="M4 10C4 5.58173 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V14.4188C20 15.7935 19.1204 17.014 17.8162 17.4487C17.3288 17.6111 17 18.0673 17 18.5811V18.6754C17 20.5115 15.5115 22 13.6754 22H10.3246C8.48846 22 7 20.5115 7 18.6754V18.5811C7 18.0673 6.67122 17.6111 6.18377 17.4487C4.87964 17.014 4 15.7935 4 14.4188V10ZM9.30005 9C8.19548 9 7.30005 9.89543 7.30005 11C7.30005 12.1046 8.19548 13 9.30005 13C10.4046 13 11.3 12.1046 11.3 11C11.3 9.89543 10.4046 9 9.30005 9ZM14.7 9C13.5955 9 12.7 9.89543 12.7 11C12.7 12.1046 13.5955 13 14.7 13C15.8046 13 16.7 12.1046 16.7 11C16.7 9.89543 15.8046 9 14.7 9Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pidangerskullsolid;
