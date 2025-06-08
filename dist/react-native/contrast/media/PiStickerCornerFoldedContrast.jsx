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
 * Pistickercornerfoldedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistickercornerfoldedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sticker corner folded icon",
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
    <path d="M21 9c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C18.719 13 18.146 13 17 13h-1.046c-1.034 0-1.551 0-1.946.201-.347.177-.63.46-.807.807-.201.395-.201.912-.201 1.946V17c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C10.719 21 10.146 21 9 21" />
    <path
      fill={color}
      d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z"
      opacity={0.28}
    />
    <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z" />
  </Svg>
);

export default Pistickercornerfoldedcontrast;
