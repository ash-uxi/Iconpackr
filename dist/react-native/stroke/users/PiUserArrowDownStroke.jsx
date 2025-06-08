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
 * Piuserarrowdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow down icon",
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
      d="M15 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H12.4311M22 19.1885C21.2598 20.1755 20.401 21.0668 19.4436 21.8426C19.3141 21.9475 19.157 22 19 22M16 19.1885C16.7402 20.1755 17.599 21.0668 18.5564 21.8426C18.6859 21.9475 18.843 22 19 22M19 22V15M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuserarrowdownstroke;
