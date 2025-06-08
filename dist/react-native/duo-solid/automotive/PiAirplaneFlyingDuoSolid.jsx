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
 * Piairplaneflyingduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaneflyingduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane flying icon",
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
      d="M6 3a1 1 0 0 0-.936 1.351l2.493 6.65L6.303 11 3.807 9.336A2 2 0 0 0 2.697 9H2a1 1 0 0 0-.949 1.316l1.317 3.949A4 4 0 0 0 6.162 17H20a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-2.546L9.649 4.366A4 4 0 0 0 6.639 3z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Piairplaneflyingduosolid;
