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
 * Pikeyright02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyright02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right02 icon",
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
      fill={color}
      d="m19.999 10 2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L13.999 14h-3.468a4.5 4.5 0 1 1 0-4z"
      opacity={0.28}
    />
    <path d="m20 10 2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L14 14h-3.468a4.5 4.5 0 1 1 0-4z" />
    <path d="M5.5 13v-2a1.25 1.25 0 0 0 0 2" />
  </Svg>
);

export default Pikeyright02contrast;
