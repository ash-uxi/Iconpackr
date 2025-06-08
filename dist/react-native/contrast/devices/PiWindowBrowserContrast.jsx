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
 * Piwindowbrowsercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwindowbrowsercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "window browser icon",
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
      d="M16.2 4.47c1.68 0 2.52 0 3.162.328a3 3 0 0 1 1.311 1.31C21 6.752 21 7.592 21 9.272v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.31c-.642.328-1.482.328-3.162.328H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.19 3 17.35 3 15.67v-6.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 4.47 6.12 4.47 7.8 4.47z"
      opacity={0.28}
    />
    <path d="M16.2 4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 6.28 21 7.12 21 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 20 17.88 20 16.2 20H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 4 6.12 4 7.8 4zM21 10H3M7 7h.01M10 7h.01M13 7h.01" />
  </Svg>
);

export default Piwindowbrowsercontrast;
