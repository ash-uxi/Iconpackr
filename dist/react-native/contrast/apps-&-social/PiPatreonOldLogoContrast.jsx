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
 * Pipatreonoldlogocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipatreonoldlogocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "patreon old logo icon",
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
      <path d="M11 8.15a5.15 5.15 0 1 1 10.3 0 5.15 5.15 0 0 1-10.3 0M5 4.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C5.801 3 6.034 3 6.5 3s.699 0 .883.076a1 1 0 0 1 .54.541C8 3.801 8 4.034 8 4.5v15c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C7.199 21 6.966 21 6.5 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541C5 20.199 5 19.966 5 19.5z" />
    </g>
    <path d="M11 8.15a5.15 5.15 0 1 1 10.3 0 5.15 5.15 0 0 1-10.3 0M5 4.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C5.801 3 6.034 3 6.5 3s.699 0 .883.076a1 1 0 0 1 .54.541C8 3.801 8 4.034 8 4.5v15c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C7.199 21 6.966 21 6.5 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541C5 20.199 5 19.966 5 19.5z" />
  </Svg>
);

export default Pipatreonoldlogocontrast;
