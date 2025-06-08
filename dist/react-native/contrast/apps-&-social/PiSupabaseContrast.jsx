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
 * Pisupabasecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisupabasecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "supabase icon",
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
      d="M12 15H7.127c-2.186 0-3.279 0-3.83-.446a2 2 0 0 1-.74-1.588c.011-.708.713-1.546 2.117-3.221l5.913-7.058c.435-.52.653-.78.843-.807a.5.5 0 0 1 .441.16C12 2.183 12 2.522 12 3.2V9m0 6 .002 5.799c0 .678 0 1.017.129 1.16a.5.5 0 0 0 .441.16c.19-.027.408-.287.844-.806l5.912-7.058c1.404-1.676 2.106-2.514 2.118-3.222a2 2 0 0 0-.742-1.588C20.154 9 19.061 9 16.875 9H12"
      opacity={0.28}
    />
    <path d="M12 15H7.127c-2.186 0-3.279 0-3.83-.446a2 2 0 0 1-.74-1.588c.011-.708.713-1.546 2.117-3.221l5.913-7.058c.435-.52.653-.78.843-.807a.5.5 0 0 1 .441.16C12 2.183 12 2.522 12 3.2V9m0 6V9m0 6 .002 5.799c0 .678 0 1.017.129 1.16a.5.5 0 0 0 .441.16c.19-.027.408-.287.844-.806l5.912-7.058c1.404-1.676 2.106-2.514 2.118-3.222a2 2 0 0 0-.742-1.588C20.154 9 19.061 9 16.875 9H12" />
  </Svg>
);

export default Pisupabasecontrast;
