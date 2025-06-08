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
 * Piarrowdowncirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdowncirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down circle icon",
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
      d="M12 2.85a9.15 9.15 0 1 0 0 18.3 9.15 9.15 0 0 0 0-18.3"
      opacity={0.28}
    />
    <path d="M16 12.051a20.3 20.3 0 0 1-3.604 3.807A.63.63 0 0 1 12 16M8 12.05a20.3 20.3 0 0 0 3.604 3.807A.63.63 0 0 0 12 16m0 0V8m-9.15 4a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" />
  </Svg>
);

export default Piarrowdowncirclecontrast;
