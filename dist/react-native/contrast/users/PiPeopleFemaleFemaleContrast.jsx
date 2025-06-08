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
 * Pipeoplefemalefemalecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipeoplefemalefemalecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "people female female icon",
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
      <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.181 12.365a2.867 2.867 0 0 1 5.647.003l.964 5.458A1 1 0 0 1 8.808 19H8.77a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1A1 1 0 0 0 3.233 19h-.04a1 1 0 0 1-.984-1.175zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.181 12.365a2.867 2.867 0 0 1 5.647.003l.965 5.458A1 1 0 0 1 20.808 19h-.038a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1a1 1 0 0 0-.966-.741h-.04a1 1 0 0 1-.984-1.175z" />
    </g>
    <path d="M15.181 12.365a2.867 2.867 0 0 1 5.647.003l.965 5.458A1 1 0 0 1 20.808 19h-.038a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1a1 1 0 0 0-.966-.741h-.04a1 1 0 0 1-.984-1.175zM20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.181 12.365a2.867 2.867 0 0 1 5.647.003l.964 5.458A1 1 0 0 1 8.808 19H8.77a1 1 0 0 0-.967.745l-.288 1.09a1.563 1.563 0 0 1-3.021.006l-.295-1.1A1 1 0 0 0 3.233 19h-.04a1 1 0 0 1-.984-1.175zM8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </Svg>
);

export default Pipeoplefemalefemalecontrast;
