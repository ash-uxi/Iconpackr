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
 * Piarrowdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down icon",
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
      d="M6 14.1696C7.55556 16.273 9.37278 18.1622 11.4057 19.7905C11.5801 19.9302 11.79 20 12 20M18 14.1696C16.4444 16.273 14.6272 18.1622 12.5943 19.7905C12.4199 19.9302 12.21 20 12 20M12 20L12 4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowdownstroke;
