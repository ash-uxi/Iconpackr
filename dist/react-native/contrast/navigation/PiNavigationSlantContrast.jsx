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
 * Pinavigationslantcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationslantcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation slant icon",
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
      d="m9.308 12.486-5.84-1.348a.591.591 0 0 1-.183-1.077l.485-.305a51.2 51.2 0 0 1 16.548-6.734.556.556 0 0 1 .66.66 51.2 51.2 0 0 1-6.734 16.548l-.305.485a.592.592 0 0 1-1.077-.183l-1.348-5.84a2.94 2.94 0 0 0-2.206-2.206"
      opacity={0.28}
    />
    <path d="m9.308 12.486-5.84-1.348a.591.591 0 0 1-.183-1.077l.485-.305a51.2 51.2 0 0 1 16.548-6.734.556.556 0 0 1 .66.66 51.2 51.2 0 0 1-6.734 16.548l-.305.485a.592.592 0 0 1-1.077-.183l-1.348-5.84a2.94 2.94 0 0 0-2.206-2.206" />
  </Svg>
);

export default Pinavigationslantcontrast;
