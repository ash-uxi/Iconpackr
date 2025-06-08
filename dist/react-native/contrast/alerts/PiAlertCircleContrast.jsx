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
 * Pialertcirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialertcirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alert circle icon",
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
    <path d="M12 12.624v-4M12 16V16m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <path
      fill={color}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.28}
    />
  </Svg>
);

export default Pialertcirclecontrast;
