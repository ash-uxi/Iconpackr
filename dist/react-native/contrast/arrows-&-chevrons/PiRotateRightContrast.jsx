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
 * Pirotaterightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotaterightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate right icon",
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
      d="M18.832 6.396a15 15 0 0 0-1.049-3.726l-.242.539a24 24 0 0 1-2.412 4.177l-.346.48a15 15 0 0 0 3.57-.884c.264-.101.528-.251.479-.586"
      opacity={0.28}
    />
    <path d="M19.748 14a8 8 0 1 1-3.302-8.652m0 0q.6-1.042 1.095-2.139l.242-.54a15 15 0 0 1 1.049 3.727c.049.335-.215.485-.479.586-1.148.44-2.347.737-3.57.884l.346-.48q.71-.986 1.317-2.038" />
  </Svg>
);

export default Pirotaterightcontrast;
