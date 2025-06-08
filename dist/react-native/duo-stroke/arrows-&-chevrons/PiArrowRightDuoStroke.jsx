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
 * Piarrowrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right icon",
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
      d="M15.1697 6C17.2731 7.55556 19.1622 9.37278 20.7906 11.4057C20.9302 11.5801 21.0001 11.79 21.0001 12C21.0001 12.21 20.9302 12.4199 20.7906 12.5943C19.1622 14.6272 17.2731 16.4444 15.1697 18"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21 12H3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowrightduostroke;
