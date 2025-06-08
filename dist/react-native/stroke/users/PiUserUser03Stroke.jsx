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
 * Piuseruser03stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser03stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user03 icon",
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
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.86595 21H18.1341C19.1646 21 20 20.1646 20 19.1341C20 16.0501 17.0608 13.8148 14.0889 14.6387L13.393 14.8317C12.4815 15.0843 11.5185 15.0843 10.607 14.8317L9.91111 14.6387C6.9392 13.8148 4 16.0501 4 19.1341C4 20.1646 4.83541 21 5.86595 21Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuseruser03stroke;
