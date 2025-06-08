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
 * Pimicrosoftwindowscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimicrosoftwindowscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "microsoft windows icon",
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
    <path d="M11 4.877v13.778m10-6.89H3m1.78 6.198 14 1.556A2 2 0 0 0 21 17.53V6.001a2 2 0 0 0-2.22-1.989l-14 1.556A2 2 0 0 0 3 7.556v8.42a2 2 0 0 0 1.78 1.987" />
    <path
      fill={color}
      d="m18.78 4.012-14 1.556A2 2 0 0 0 3 7.556v8.42a2 2 0 0 0 1.78 1.987l14 1.556A2 2 0 0 0 21 17.53V6.001a2 2 0 0 0-2.22-1.989"
      opacity={0.28}
    />
  </Svg>
);

export default Pimicrosoftwindowscontrast;
