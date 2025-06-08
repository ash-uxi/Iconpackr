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
 * Piforkknifecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piforkknifecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "fork knife icon",
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
      d="M19.004 3.83v12.244c-.624 0-.936 0-1.19-.044a3 3 0 0 1-2.476-2.693c-.022-.258.004-.569.055-1.19l.491-5.9a4.15 4.15 0 0 1 1.831-3.106.829.829 0 0 1 1.288.69"
      opacity={0.28}
    />
    <path d="m5 3-.453 3.624A3.48 3.48 0 0 0 8 10.536M11 3l.453 3.624A3.48 3.48 0 0 1 8 10.536m0 0V21m0-10.464V3m11.003 18v-4.926m0 0V3.83a.829.829 0 0 0-1.288-.69 4.15 4.15 0 0 0-1.83 3.106l-.492 5.9c-.052.621-.078.932-.055 1.19a3 3 0 0 0 2.476 2.693c.255.044.566.044 1.19.044" />
  </Svg>
);

export default Piforkknifecontrast;
