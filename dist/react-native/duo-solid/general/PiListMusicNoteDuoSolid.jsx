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
 * Pilistmusicnoteduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistmusicnoteduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list music note icon",
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
      fill={color || "#000"}
      d="M19 13.024c0-.763-.38-1.468-1-1.889v6.366a2.5 2.5 0 1 1-2-2.45v-4.23a1.82 1.82 0 0 1 2.634-1.627A4.28 4.28 0 0 1 21 13.024c0 .65-.134 1.295-.4 1.887a1 1 0 0 1-1.824-.822c.146-.325.224-.688.224-1.065"
    />{" "}
    <path d="M4 12h6m-6 6h6M4 6h16" opacity={0.28} />
  </Svg>
);

export default Pilistmusicnoteduosolid;
