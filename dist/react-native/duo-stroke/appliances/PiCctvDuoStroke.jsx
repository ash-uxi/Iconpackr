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
 * Picctvduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picctvduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cctv icon",
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
      d="M22.21 8.971a1 1 0 0 0-1.932-.518l-1.294 4.83a1 1 0 0 0 1.932.518z"
      fill="none"
    />
    <path
      d="M4.323 4.932a2 2 0 0 1 2.45-1.414l10.904 2.921a1 1 0 0 1 .707 1.225l-1.323 4.937a1 1 0 0 1-1.225.707L4.932 10.386a2 2 0 0 1-1.414-2.45z"
      opacity={0.28}
      fill="none"
    />
    <path
      d="m8.558 12.393 1.937.52-1.355 3.86a2 2 0 0 1-1.559 1.31l-4.58.764V21a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v1.82l4.252-.71z"
      fill="none"
    />
  </Svg>
);

export default Picctvduostroke;
