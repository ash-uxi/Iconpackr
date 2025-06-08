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
 * Pilistarrowupstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistarrowupstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list arrow up icon",
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
      d="M4 12H12M4 18H12M4 6H20M16 14.3115C16.7402 13.3245 17.599 12.4332 18.5564 11.6574C18.6859 11.5525 18.843 11.5 19 11.5M22 14.3115C21.2598 13.3245 20.401 12.4332 19.4436 11.6574C19.3141 11.5525 19.157 11.5 19 11.5M19 11.5V18.9973"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistarrowupstroke;
