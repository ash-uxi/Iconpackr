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
 * Pistopbigstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistopbigstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "stop big icon",
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
      d="M6 9.2C6 8.07989 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.0799 18 9.2V14.8C18 15.9201 18 16.4802 17.782 16.908C17.5903 17.2843 17.2843 17.5903 16.908 17.782C16.4802 18 15.9201 18 14.8 18H9.2C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V9.2Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pistopbigstroke;
