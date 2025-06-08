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
 * Pikeyleft02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyleft02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key left02 icon",
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
    <path d="M18.501 13v-2a1.25 1.25 0 0 1 0 2" />
    <path
      fill={color}
      d="m4 10-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10 14h3.468a4.5 4.5 0 1 0 0-4z"
      opacity={0.28}
    />
    <path d="m4.001 10-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10.001 14h3.468a4.5 4.5 0 1 0 0-4z" />
  </Svg>
);

export default Pikeyleft02contrast;
