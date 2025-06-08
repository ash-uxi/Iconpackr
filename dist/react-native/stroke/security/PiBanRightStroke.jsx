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
 * Pibanrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibanrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ban right icon",
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
      d="M18.4696 5.53007C16.8138 3.87425 14.5263 2.8501 11.9996 2.8501C6.9462 2.8501 2.84961 6.94669 2.84961 12.0001C2.84961 14.5268 3.87376 16.8143 5.52958 18.4701M18.4696 5.53007C20.1255 7.18589 21.1496 9.47339 21.1496 12.0001C21.1496 17.0535 17.053 21.1501 11.9996 21.1501C9.47291 21.1501 7.18541 20.1259 5.52958 18.4701M18.4696 5.53007L5.52958 18.4701"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibanrightstroke;
