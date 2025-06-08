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
 * Pikeybottomleft02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeybottomleft02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key bottom left02 icon",
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
    <path d="M17.304 8.11 15.89 6.696a1.25 1.25 0 0 1 1.414 1.414" />
    <path
      fill={color}
      d="M4.93 16.243v2.828h2.827L9.88 16.95v-1.622a.5.5 0 0 1 .5-.5H12l2.452-2.452a4.5 4.5 0 1 0-2.828-2.828z"
      opacity={0.28}
    />
    <path d="M4.93 16.243v2.828h2.827L9.88 16.95v-1.622a.5.5 0 0 1 .5-.5H12l2.452-2.452a4.5 4.5 0 1 0-2.828-2.828z" />
  </Svg>
);

export default Pikeybottomleft02contrast;
