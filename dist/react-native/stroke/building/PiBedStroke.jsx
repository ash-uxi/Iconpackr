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
 * Pibedstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibedstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bed icon",
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
    <path d="M12 6L12.0006 11" stroke={color} strokeWidth="2" fill="none" />
    <path d="M3 18H21" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M3 20V15C3 13.5999 3 12.8998 3.27248 12.365C3.51217 11.8946 3.89462 11.5122 4.36502 11.2725C4.8998 11 5.59987 11 7 11H17C18.4001 11 19.1002 11 19.635 11.2725C20.1054 11.5122 20.4878 11.8946 20.7275 12.365C21 12.8998 21 13.5999 21 15V20"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 11V9.2C5 8.0799 5 7.51984 5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799C6.51984 6 7.0799 6 8.2 6H15.8C16.9201 6 17.4802 6 17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202C19 7.51984 19 8.0799 19 9.2V11"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibedstroke;
