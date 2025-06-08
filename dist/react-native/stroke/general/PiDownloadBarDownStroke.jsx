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
 * Pidownloadbardownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidownloadbardownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "download bar down icon",
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
      d="M19 20H5M6 10.1696C7.55556 12.273 9.37278 14.1622 11.4057 15.7905C11.5801 15.9302 11.79 16 12 16M18 10.1696C16.4444 12.273 14.6272 14.1622 12.5943 15.7905C12.4199 15.9302 12.21 16 12 16M12 16V4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidownloadbardownstroke;
