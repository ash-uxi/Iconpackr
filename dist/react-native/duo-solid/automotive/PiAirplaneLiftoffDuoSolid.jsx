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
 * Piairplaneliftoffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaneliftoffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane liftoff icon",
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
    <path d="M3 20h18" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M7.93 3.374a4 4 0 0 0-3.26-.54L4.051 3a1 1 0 0 0-.555 1.547l4.13 5.777-1.212.325-2.842-.96a2 2 0 0 0-1.158-.039l-.674.18a1 1 0 0 0-.576 1.518L3.46 14.82a4 4 0 0 0 4.373 1.66L21.2 12.898a2 2 0 0 0 1.415-2.45 4 4 0 0 0-4.9-2.827l-2.459.66z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Piairplaneliftoffduosolid;
