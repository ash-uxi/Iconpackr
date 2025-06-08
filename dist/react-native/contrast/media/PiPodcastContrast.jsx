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
 * Pipodcastcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipodcastcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "podcast icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M10.633 17.897a1.442 1.442 0 1 1 2.735 0L12 22zM11 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    </g>
    <path d="M8 14a5 5 0 1 1 8 0m1 4.483a9 9 0 1 0-10 0M12 22l1.367-4.103a1.441 1.441 0 1 0-2.735 0zm0-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);

export default Pipodcastcontrast;
