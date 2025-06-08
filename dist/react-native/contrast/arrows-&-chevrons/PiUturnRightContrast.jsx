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
 * Piuturnrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn right icon",
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
    <path d="M16.205 8H9a5 5 0 1 0 0 10h3m4.205-10q0-.884-.065-1.764l-.17-2.32a20.8 20.8 0 0 1 3.885 3.679.64.64 0 0 1 0 .809 20.8 20.8 0 0 1-3.886 3.679l.171-2.32A24 24 0 0 0 16.205 8" />
    <path
      fill={color}
      d="M19.855 7.595a20.8 20.8 0 0 0-3.886-3.679l.171 2.32a24 24 0 0 1 0 3.527l-.17 2.32a20.8 20.8 0 0 0 3.885-3.68.64.64 0 0 0 0-.808"
      opacity={0.28}
    />
  </Svg>
);

export default Piuturnrightcontrast;
