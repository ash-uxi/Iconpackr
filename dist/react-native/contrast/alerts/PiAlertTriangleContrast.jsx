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
 * Pialerttrianglecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialerttrianglecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alert triangle icon",
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
    <path d="M12 13V9m0 7.375v.001M10.61 3.284a3.55 3.55 0 0 1 2.78 0c2.651 1.128 8.915 11.138 8.731 13.813a3.63 3.63 0 0 1-1.424 2.645c-2.212 1.677-15.182 1.677-17.394 0a3.63 3.63 0 0 1-1.424-2.645c-.184-2.675 6.08-12.685 8.731-13.813" />
    <path
      fill={color}
      d="M13.39 3.284a3.55 3.55 0 0 0-2.78 0C7.96 4.412 1.695 14.422 1.88 17.097a3.63 3.63 0 0 0 1.424 2.645c2.212 1.677 15.182 1.677 17.394 0a3.63 3.63 0 0 0 1.424-2.645c.184-2.675-6.08-12.685-8.731-13.813"
      opacity={0.28}
    />
  </Svg>
);

export default Pialerttrianglecontrast;
