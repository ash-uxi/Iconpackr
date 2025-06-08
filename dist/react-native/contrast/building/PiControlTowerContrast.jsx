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
 * Picontroltowercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picontroltowercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "control tower icon",
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
    <path d="M12 4V2M15 8l-1 5" />
    <path
      fill={color}
      d="M3.406 5.825A1.5 1.5 0 0 1 4.87 4h14.26a1.5 1.5 0 0 1 1.464 1.825l-1.159 5.217A2.5 2.5 0 0 1 16.995 13h-9.99a2.5 2.5 0 0 1-2.44-1.958z"
      opacity={0.28}
    />
    <path d="M3.406 5.825A1.5 1.5 0 0 1 4.87 4h14.26a1.5 1.5 0 0 1 1.464 1.825l-1.159 5.217A2.5 2.5 0 0 1 16.995 13h-9.99a2.5 2.5 0 0 1-2.44-1.958zM4 8h16M7 13l-.5 9M17 13l.5 9M9 8l1 5" />
  </Svg>
);

export default Picontroltowercontrast;
