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
 * Pifile02starcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02starcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 star icon",
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
      d="M16 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4"
      opacity={0.28}
    />
    <path d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m9 8v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8m-8 1c-.004.1-.005.151-.008.195a3 3 0 0 1-2.797 2.797L9 14c.1.004.151.005.195.008a3 3 0 0 1 2.797 2.797L12 17c.004-.1.005-.151.008-.195a3 3 0 0 1 2.797-2.797L15 14c-.1-.004-.151-.005-.195-.008a3 3 0 0 1-2.797-2.797z" />
  </Svg>
);

export default Pifile02starcontrast;
