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
 * Piarrowturnrightupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnrightupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn right up icon",
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
    <path d="M15 8.351V12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C11.2 20 9.8 20 7 20H4M15 8.351a24 24 0 0 1 3.13.205c.468.062.935.142 1.87.303a25.2 25.2 0 0 0-4.505-4.684.79.79 0 0 0-.99 0A25.2 25.2 0 0 0 10 8.859c.935-.16 1.402-.241 1.87-.303A24 24 0 0 1 15 8.351" />
    <path
      fill={color}
      d="M20 8.859a25.2 25.2 0 0 0-4.505-4.684.79.79 0 0 0-.99 0A25.2 25.2 0 0 0 10 8.859c.935-.16 1.402-.241 1.87-.303a24 24 0 0 1 6.26 0c.468.062.935.142 1.87.303"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowturnrightupcontrast;
