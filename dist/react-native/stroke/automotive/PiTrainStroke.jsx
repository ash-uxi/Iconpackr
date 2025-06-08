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
 * Pitrainstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrainstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "train icon",
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
    <path d="M12 3V13" stroke={color} strokeWidth="2" fill="none" />
    <path d="M16 16H17" stroke={color} strokeWidth="2" fill="none" />
    <path d="M16 19L18 22" stroke={color} strokeWidth="2" fill="none" />
    <path d="M4 13H20" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M4 9.4C4 7.15979 4 6.03968 4.43597 5.18404C4.81947 4.43139 5.43139 3.81947 6.18404 3.43597C7.03968 3 8.15979 3 10.4 3H13.6C15.8402 3 16.9603 3 17.816 3.43597C18.5686 3.81947 19.1805 4.43139 19.564 5.18404C20 6.03968 20 7.15979 20 9.4V15.8C20 16.9201 20 17.4802 19.782 17.908C19.5903 18.2843 19.2843 18.5903 18.908 18.782C18.4802 19 17.9201 19 16.8 19H7.2C6.07989 19 5.51984 19 5.09202 18.782C4.71569 18.5903 4.40973 18.2843 4.21799 17.908C4 17.4802 4 16.9201 4 15.8V9.4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path d="M7 16H8" stroke={color} strokeWidth="2" fill="none" />
    <path d="M8 19L6 22" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pitrainstroke;
