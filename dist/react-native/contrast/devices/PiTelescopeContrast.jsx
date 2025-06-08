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
 * Pitelescopecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitelescopecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "telescope icon",
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
    <g fill={color} opacity={0.28}>
      <path d="m18.008 11.798-4.047.806Q14 12.797 14 13a2 2 0 0 1-3.963.386L3.84 14.622a1 1 0 0 1-1.161-.722l-.551-2.053a1 1 0 0 1 .646-1.206L16.455 6z" />
      <path d="m22.32 12.433-1.932.517a2 2 0 0 1-2.45-1.415l-1.413-5.272a2 2 0 0 1 1.415-2.45l1.931-.517z" />
    </g>
    <path d="M12.901 14.803 16 21m-8 0 3.099-6.197M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0M16.525 6.262a2 2 0 0 1 1.414-2.45l1.932-.517 2.448 9.136-1.932.518a2 2 0 0 1-2.45-1.414zM4.513 10.05l-1.741.59a1 1 0 0 0-.645 1.206l.55 2.054a1 1 0 0 0 1.162.722l6.154-1.227m-5.48-3.345 11.942-4.048M4.513 10.05 4.098 8.5m13.91 3.297-4.008.8" />
  </Svg>
);

export default Pitelescopecontrast;
