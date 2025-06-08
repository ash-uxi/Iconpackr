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
 * Piexternallinkcircleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexternallinkcircleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "external link circle icon",
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
      d="M14.387 3.253a19.8 19.8 0 0 1 5.174-.15 1.496 1.496 0 0 1 1.336 1.336 19.8 19.8 0 0 1-.15 5.174 1 1 0 0 1-1.749.49l-1.146-1.347q-.275-.322-.56-.634l-6.585 6.585a1 1 0 0 1-1.414-1.414l6.585-6.585q-.312-.285-.634-.56l-1.347-1.146a1 1 0 0 1 .49-1.75"
    />{" "}
    <path
      d="M19.974 13.5A7.11 7.11 0 0 1 12.89 20H12a8 8 0 0 1-8-8v-.889a7.11 7.11 0 0 1 6.5-7.085"
      opacity={0.28}
    />
  </Svg>
);

export default Piexternallinkcircleduosolid;
