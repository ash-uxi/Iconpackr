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
 * Pispatialscreencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialscreencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial screen icon",
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
    <path d="M16 21h-5m-9-7V7m19-1.4v9.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 17 19.96 17 19.4 17H6.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C5 16.24 5 15.96 5 15.4V5.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C5.76 4 6.04 4 6.6 4h12.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 4.76 21 5.04 21 5.6" />
    <path
      fill={color}
      d="M21 15.4V5.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 4 19.96 4 19.4 4H6.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C5 4.76 5 5.04 5 5.6v9.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 17 6.04 17 6.6 17h12.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 16.24 21 15.96 21 15.4"
      opacity={0.35}
    />
  </Svg>
);

export default Pispatialscreencontrast;
