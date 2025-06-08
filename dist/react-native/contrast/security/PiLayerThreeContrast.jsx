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
 * Pilayerthreecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayerthreecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layer three icon",
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
    <path d="M21 12c-.12.254-.49.441-1.233.816l-6.325 3.196c-.529.267-.793.4-1.07.453a2 2 0 0 1-.743 0c-.278-.052-.542-.186-1.07-.453l-6.326-3.196C3.49 12.441 3.119 12.254 3 12m18 4.5c-.12.254-.49.441-1.233.816l-6.325 3.196c-.529.267-.793.4-1.07.453a2 2 0 0 1-.743 0c-.278-.052-.542-.186-1.07-.453l-6.326-3.196C3.49 16.941 3.119 16.754 3 16.5m10.43-4.953 6.27-2.966c.737-.348 1.105-.522 1.223-.757a.72.72 0 0 0 0-.648c-.118-.235-.486-.41-1.222-.757l-6.272-2.966c-.524-.248-.786-.372-1.06-.42a2.1 2.1 0 0 0-.737 0c-.275.048-.537.172-1.061.42L4.299 6.419c-.736.348-1.104.522-1.222.757a.72.72 0 0 0 0 .648c.118.235.486.41 1.222.757l6.272 2.966c.524.248.786.372 1.06.42.244.044.494.044.737 0 .275-.048.537-.172 1.061-.42" />
    <path
      fill={color}
      d="M4.3 8.581c-.737-.348-1.105-.522-1.223-.757a.72.72 0 0 1 0-.648c.118-.235.486-.41 1.222-.757l6.272-2.966c.524-.248.786-.372 1.06-.42a2.1 2.1 0 0 1 .737 0c.275.048.537.172 1.061.42l6.272 2.966c.736.348 1.104.522 1.222.757a.72.72 0 0 1 0 .648c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42z"
      opacity={0.28}
    />
  </Svg>
);

export default Pilayerthreecontrast;
