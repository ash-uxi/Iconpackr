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
 * Piclockdefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclockdefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clock default icon",
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
    <path d="M12 8v4.817a.5.5 0 0 0 .231.421L15 15m6.15-3a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" />
    <path
      fill={color}
      d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"
      opacity={0.28}
    />
  </Svg>
);

export default Piclockdefaultcontrast;
