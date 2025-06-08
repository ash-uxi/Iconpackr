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
 * Pikeyright02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyright02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right02 icon",
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
    <path d="M12 10h9l2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L15 14h-3" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M12.533 10a1 1 0 0 0-.105-.445 5.5 5.5 0 1 0 0 4.89 1 1 0 0 0 .104-.445H15l1.146-1.146a.5.5 0 0 1 .708 0L18 14h3l2-2-2-2z"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path strokeWidth="2.2" d="M6.5 13v-2a1.25 1.25 0 0 0 0 2" />
  </Svg>
);

export default Pikeyright02duosolid;
