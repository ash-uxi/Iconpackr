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
 * Piclouddefaultsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclouddefaultsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud default icon",
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
      d="M12.5 4C15.6592 4 18.36 5.95271 19.4654 8.71458C21.5626 9.79159 23 11.9769 23 14.5C23 18.0898 20.0899 21 16.5 21H6.5C3.46243 21 1 18.5376 1 15.5C1 12.94 2.74832 10.7895 5.11656 10.1757C5.41101 8.52295 6.24679 7.0576 7.43401 5.96951C8.58426 4.91528 10.0644 4.21521 11.7017 4.04198C11.964 4.01423 12.2304 4 12.5 4Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piclouddefaultsolid;
