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
 * Piaudiobars01stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piaudiobars01stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "audio bars01 icon",
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
      d="M3 10V14M7.5 7V17M21 10V14M12 3V21M16.5 7V17"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piaudiobars01stroke;
