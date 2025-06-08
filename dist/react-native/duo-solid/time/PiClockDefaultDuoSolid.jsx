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
 * Piclockdefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclockdefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clock default icon",
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
      d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15c5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85"
      opacity={0.28}
    />{" "}
    <path d="M12 7.9v4.916a.5.5 0 0 0 .232.422l2.812 1.79" />
  </Svg>
);

export default Piclockdefaultduosolid;
