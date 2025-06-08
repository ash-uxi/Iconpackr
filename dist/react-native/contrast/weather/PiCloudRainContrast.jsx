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
 * Picloudraincontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudraincontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud rain icon",
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
      d="M19.292 17.24a5.501 5.501 0 0 0-.624-9.796A6.5 6.5 0 0 0 6.017 9.026a4.5 4.5 0 0 0-1.203 8.648l.37-.64A3 3 0 0 1 5 16v-2a3 3 0 0 1 5.529-1.615A3 3 0 0 1 12 12c.535 0 1.037.14 1.471.385A3 3 0 0 1 19 14v2q0 .308-.06.599z"
      opacity={0.28}
    />
    <path d="M8 14v2m4-1v2m4-3v2m-8 3v1m4 0v1m4-2v1M6.017 9.026A7 7 0 0 0 6 9.5m.017-.474a4.5 4.5 0 0 0-1.758 8.377m1.758-8.377a6.5 6.5 0 0 1 12.651-1.582 5.5 5.5 0 0 1 1.252 9.364" />
  </Svg>
);

export default Picloudraincontrast;
