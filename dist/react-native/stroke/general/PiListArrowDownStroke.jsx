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
 * Pilistarrowdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistarrowdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list arrow down icon",
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
      d="M4 12H12M4 18H12M4 6H20M16 16.1858C16.7402 17.1728 17.599 18.0641 18.5564 18.8399C18.6859 18.9449 18.843 18.9973 19 18.9973M22 16.1858C21.2598 17.1728 20.401 18.0641 19.4436 18.8399C19.3141 18.9448 19.157 18.9973 19 18.9973M19 18.9973V11.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistarrowdownstroke;
