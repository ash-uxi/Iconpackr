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
 * Picloudwindcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudwindcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud wind icon",
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
    <path d="M2 14h11a2 2 0 1 0-1-3.732M2 18h8a2 2 0 1 1-1 3.732M12.5 3a6.5 6.5 0 0 1 6.168 4.444A5.501 5.501 0 0 1 16.5 18h-.918M12.5 3a6.5 6.5 0 0 0-6.483 6.026A4.5 4.5 0 0 0 3.671 10M12.5 3c-3.738 0-6.764 3.285-6.481 7" />
    <path
      fill={color}
      d="M22 12.5a5.5 5.5 0 0 1-5.5 5.5h-1.915c-.171-.39-.39-.756-.65-1.087a5.002 5.002 0 1 0-3.437-9.242A3 3 0 0 0 9.091 11H3.67v-1a4.5 4.5 0 0 1 2.347-.974 6.5 6.5 0 0 1 12.65-1.582 5.5 5.5 0 0 1 3.333 5.056"
      opacity={0.28}
    />
  </Svg>
);

export default Picloudwindcontrast;
