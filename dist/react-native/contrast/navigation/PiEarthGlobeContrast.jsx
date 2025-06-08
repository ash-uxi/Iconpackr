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
 * Piearthglobecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piearthglobecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "earth globe icon",
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
      d="M2.85 12A9.15 9.15 0 0 0 12 21.15c4.974 0 9.15-4.174 9.15-9.15a9.15 9.15 0 0 0-18.3 0"
      opacity={0.28}
    />
    <path d="M3.962 7.624a6.9 6.9 0 0 0 2.56 1.695 3.118 3.118 0 0 0 2.086 4.575 1.742 1.742 0 1 0 2.763-.776 3.1 3.1 0 0 0 .987-2.275c0-.514-.124-.999-.344-1.426 2.54-.874 4.333-2.984 4.333-5.45v-.02M3.961 7.624A9.15 9.15 0 0 0 12 21.15a9.1 9.1 0 0 0 3.925-.883M3.962 7.624A9.15 9.15 0 0 1 12 2.85a9.1 9.1 0 0 1 4.346 1.097m0 0A9.15 9.15 0 0 1 21.15 12a9.1 9.1 0 0 1-.961 4.086m-4.265 4.182a3.1 3.1 0 0 1-.36-1.454c0-.655.203-1.263.548-1.765a1.742 1.742 0 1 1 3.1-1.306c.349.06.678.177.977.343m-4.265 4.182a9.2 9.2 0 0 0 4.265-4.182" />
  </Svg>
);

export default Piearthglobecontrast;
