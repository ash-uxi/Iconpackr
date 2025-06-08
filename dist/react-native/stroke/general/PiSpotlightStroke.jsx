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
 * Pispotlightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispotlightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spotlight icon",
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
      d="M9 20.5c0 .828 3.134 2 7 2s7-1.172 7-2c0-.258-.304-.549-.838-.828M9 20.5c0-.829 3.134-2 7-2 2.663 0 4.979.556 6.162 1.172M9 20.5 4.718 10m4.61-3 12.834 12.673M6.614 4.319 5.467 2.681A2 2 0 0 0 2.19 4.975l1.147 1.639z"
      fill="none"
    />
    <rect width="24" height="24" fill="none" />
  </Svg>
);

export default Pispotlightstroke;
