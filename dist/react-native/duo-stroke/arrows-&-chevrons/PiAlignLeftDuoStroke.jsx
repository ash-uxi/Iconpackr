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
 * Pialignleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align left icon",
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
      d="M12.0309 7.91669C10.5767 8.97533 9.2706 10.2121 8.14485 11.5956C8.04828 11.7142 8 11.8571 8 12M12.0309 16.0834C10.5767 15.0247 9.2706 13.788 8.14485 12.4045C8.04828 12.2858 8 12.1429 8 12M8 12L20 12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 5V19"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pialignleftduostroke;
