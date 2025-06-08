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
 * Pifireplacecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifireplacecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fireplace icon",
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
      fillRule="evenodd"
      d="M19 7h.5A1.5 1.5 0 0 0 21 5.5v-1A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7H19m-8 6.808c.82 0 1.34-1.514 1.616-2.808.94.57 2.384 2.09 2.384 3.84 0 1.483-1 2.967-3 2.967s-3-1.483-3-2.967c0-.885.369-1.71.855-2.385A12 12 0 0 0 11 13.808"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M3 21h2m0 0V7m0 14h14M5 7h-.5A1.5 1.5 0 0 1 3 5.5v-1A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v1A1.5 1.5 0 0 1 19.5 7H19M5 7h14m0 14h2m-2 0V7m-8 6.808c.82 0 1.34-1.514 1.616-2.808.94.57 2.384 2.09 2.384 3.84 0 1.483-1 2.967-3 2.967s-3-1.483-3-2.967c0-.885.369-1.71.855-2.385A12 12 0 0 0 11 13.808" />
  </Svg>
);

export default Pifireplacecontrast;
