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
 * Piairplanetouchdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplanetouchdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane touchdown icon",
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
    <path d="M3 20h18" />
    <path
      fill={color}
      d="m5.468 13.633 13.366 3.582a1 1 0 0 0 1.224-.707 3 3 0 0 0-2.12-3.675l-2.899-.776-4.09-8.318a3 3 0 0 0-1.915-1.574L8.417 2l.827 8.504-2.898-.777-2.18-2.48a1 1 0 0 0-.493-.306L3 6.76l.25 4.154a3 3 0 0 0 2.218 2.718z"
      opacity={0.28}
    />
    <path d="m5.468 13.633 13.366 3.582a1 1 0 0 0 1.224-.707 3 3 0 0 0-2.12-3.675l-2.899-.776-4.09-8.318a3 3 0 0 0-1.915-1.574L8.417 2l.827 8.504-2.898-.777-2.18-2.48a1 1 0 0 0-.493-.306L3 6.76l.25 4.154a3 3 0 0 0 2.218 2.718z" />
  </Svg>
);

export default Piairplanetouchdowncontrast;
