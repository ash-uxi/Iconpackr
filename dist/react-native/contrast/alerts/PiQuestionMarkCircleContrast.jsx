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
 * Piquestionmarkcirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piquestionmarkcirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "question mark circle icon",
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.28}
    />
    <path d="M9.281 9.719A2.719 2.719 0 1 1 13.478 12c-.724.47-1.478 1.137-1.478 2m0 3zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
  </Svg>
);

export default Piquestionmarkcirclecontrast;
