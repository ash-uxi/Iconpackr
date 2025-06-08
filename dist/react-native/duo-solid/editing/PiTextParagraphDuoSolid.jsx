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
 * Pitextparagraphduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextparagraphduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text paragraph icon",
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
    <path d="M18 3v18" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M9.03 2a7.03 7.03 0 1 0 0 14.058H12V21a1 1 0 0 0 2 0V4h7a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Pitextparagraphduosolid;
