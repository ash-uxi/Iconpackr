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
 * Pikeytopright02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeytopright02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key top right02 icon",
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
      d="M16.243 4.93h2.828v2.828l-2.121 2.12h-1.621a.5.5 0 0 0-.5.5V12l-2.453 2.452a4.5 4.5 0 1 1-2.828-2.828z"
      opacity={0.28}
    />
    <path d="M16.243 4.93h2.828v2.828l-2.121 2.12h-1.621a.5.5 0 0 0-.5.5V12l-2.453 2.452a4.5 4.5 0 1 1-2.828-2.828z" />
    <path d="M8.11 17.304 6.697 15.89a1.25 1.25 0 0 0 1.415 1.414z" />
  </Svg>
);

export default Pikeytopright02contrast;
