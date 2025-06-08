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
 * Piballtenniscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piballtenniscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ball tennis icon",
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
    <path d="M20.405 8.382a6.003 6.003 0 0 0-2.935 10.954m2.935-10.954a9.13 9.13 0 0 0-6.037-5.22A9.13 9.13 0 0 0 6.53 4.665m13.875 3.717a9.1 9.1 0 0 1 .433 5.986 9.1 9.1 0 0 1-3.368 4.968m0 0a9.13 9.13 0 0 1-7.838 1.502 9.13 9.13 0 0 1-6.037-5.22M6.53 4.665a6.002 6.002 0 0 1-2.935 10.953M6.53 4.665a9.1 9.1 0 0 0-3.368 4.967 9.1 9.1 0 0 0 .433 5.986" />
    <path
      fill={color}
      d="M9.633 20.838a9.13 9.13 0 0 0 7.838-1.502 9.1 9.1 0 0 0 3.368-4.968 9.1 9.1 0 0 0-.433-5.986 9.13 9.13 0 0 0-6.037-5.22 9.13 9.13 0 0 0-7.838 1.503 9.1 9.1 0 0 0-3.368 4.967 9.1 9.1 0 0 0 .433 5.986 9.13 9.13 0 0 0 6.037 5.22"
      opacity={0.28}
    />
  </Svg>
);

export default Piballtenniscontrast;
