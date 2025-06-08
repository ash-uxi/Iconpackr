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
 * Pianimation01duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pianimation01duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "animation01 icon",
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
      d="M15.05 1.85a7.1 7.1 0 1 0 0 14.2 7.1 7.1 0 0 0 0-14.2"
    />{" "}
    <path
      d="M15.686 15.018a5.1 5.1 0 0 1-4.771 3.081M8.983 8.314A5.1 5.1 0 0 0 5.9 13.086m0 0a4.102 4.102 0 0 0 1.05 8.064 4.1 4.1 0 0 0 3.964-3.05M5.9 13.084a5.1 5.1 0 0 0 5.014 5.014"
      opacity={0.28}
    />
  </Svg>
);

export default Pianimation01duosolid;
