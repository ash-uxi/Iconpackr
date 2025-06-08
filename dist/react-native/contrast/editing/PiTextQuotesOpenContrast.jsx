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
 * Pitextquotesopencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotesopencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes open icon",
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
    <path d="M14 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 18 6.3M4 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 8 6.3" />
    <path
      fill={color}
      fillRule="evenodd"
      d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pitextquotesopencontrast;
