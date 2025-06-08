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
 * Pilisttextwrapstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilisttextwrapstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list text wrap icon",
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
      d="M4 12H17C18.6569 12 20 13.3431 20 15C20 16.6569 18.6569 18 17 18H11M4 18H6.5M4 6H20M13.8115 21C12.8245 20.2598 11.9332 19.401 11.1574 18.4436C11.0525 18.3141 11 18.157 11 18M13.8115 15C12.8245 15.7402 11.9332 16.599 11.1574 17.5564C11.0525 17.6859 11 17.843 11 18"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilisttextwrapstroke;
