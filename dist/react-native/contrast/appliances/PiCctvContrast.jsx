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
 * Picctvcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picctvcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cctv icon",
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
    <path d="M2 21v-6m0 3 5.417-.903a1 1 0 0 0 .779-.655l1.663-4.735m11.385-2.995-1.294 4.83M9.86 11.707l5.977 1.601a1 1 0 0 0 1.225-.707l1.323-4.937a1 1 0 0 0-.707-1.225L6.772 3.518a2 2 0 0 0-2.45 1.414l-.804 3.005a2 2 0 0 0 1.414 2.45z" />
    <path
      fill={color}
      d="M4.323 4.932a2 2 0 0 1 2.45-1.414l10.904 2.921a1 1 0 0 1 .707 1.225l-1.323 4.937a1 1 0 0 1-1.225.707L4.932 10.386a2 2 0 0 1-1.414-2.45z"
      opacity={0.28}
    />
  </Svg>
);

export default Picctvcontrast;
