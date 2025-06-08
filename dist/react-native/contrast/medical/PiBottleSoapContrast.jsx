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
 * Pibottlesoapcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibottlesoapcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bottle soap icon",
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
      <path d="M18 15.978c-6 1.608-6.248-3.541-12-1.486V20.5A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5zM15 7V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1" />
    </g>
    <path d="M12 5V2M15 8V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2M18 15.978c-6 1.608-6.248-3.541-12-1.486V20.5A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5z" />
    <path d="M6 11a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5zM9.5 2h6.919c.944 0 1.782.604 2.081 1.5" />
  </Svg>
);

export default Pibottlesoapcontrast;
