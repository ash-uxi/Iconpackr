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
 * Piexchange02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange02 icon",
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
      <path d="M12.145 8.604A20.6 20.6 0 0 1 16.031 5l-.165 2.2a24 24 0 0 0 0 3.6l.165 2.2a20.6 20.6 0 0 1-3.886-3.604.62.62 0 0 1 0-.792M7.97 11a20.6 20.6 0 0 1 3.885 3.604.62.62 0 0 1 0 .792A20.6 20.6 0 0 1 7.97 19l.166-2.2a24 24 0 0 0 0-3.6z" />
    </g>
    <path d="M15.798 9H20m-4.202 0q0-.9.067-1.8l.166-2.2a20.6 20.6 0 0 0-3.886 3.604.62.62 0 0 0 0 .792A20.6 20.6 0 0 0 16.03 13l-.166-2.2q-.067-.9-.067-1.8m-7.596 6H4m4.202 0q0-.9-.067-1.8L7.969 11a20.6 20.6 0 0 1 3.886 3.604.62.62 0 0 1 0 .792A20.6 20.6 0 0 1 7.97 19l.166-2.2q.067-.9.067-1.8" />
  </Svg>
);

export default Piexchange02contrast;
