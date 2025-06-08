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
 * Pikeyleft02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyleft02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key left02 icon",
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
      fillRule="evenodd"
      d="M12.468 10c0-.154.036-.307.105-.445a5.5 5.5 0 1 1 0 4.89A1 1 0 0 1 12.47 14h-2.468l-1.146-1.146a.5.5 0 0 0-.708 0L7.001 14h-3l-2-2 2-2z"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M13.001 10h-9l-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10.001 14h3" />{" "}
    <path strokeWidth="2.2" d="M18.501 13v-2a1.25 1.25 0 0 1 0 2" />
  </Svg>
);

export default Pikeyleft02duosolid;
