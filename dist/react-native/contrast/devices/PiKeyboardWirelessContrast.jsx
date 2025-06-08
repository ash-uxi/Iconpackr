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
 * Pikeyboardwirelesscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyboardwirelesscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "keyboard wireless icon",
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
      d="M15.6 5H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 8.04 2 9.16 2 11.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 19 6.16 19 8.4 19h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 15.96 22 14.84 22 12.6v-1.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 5 17.84 5 15.6 5"
      opacity={0.28}
    />
    <path d="M16 15H8M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8.4 19h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 15.96 22 14.84 22 12.6v-1.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 5 17.84 5 15.6 5H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 8.04 2 9.16 2 11.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 19 6.16 19 8.4 19" />
  </Svg>
);

export default Pikeyboardwirelesscontrast;
