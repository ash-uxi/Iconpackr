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
 * Pibankduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibankduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bank icon",
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
      d="M12.764 1.099a3 3 0 0 0-1.528 0c-.572.15-1.07.524-1.635.95l-.121.091L1.4 8.2A1 1 0 0 0 1 9v1a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V9a1 1 0 0 0-.4-.8l-8.08-6.06-.12-.09c-.567-.427-1.064-.8-1.636-.951M2 20a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"
    />{" "}
    <path d="M4 13v5m5-5v5m6-5v5m5-5v5" opacity={0.28} />
  </Svg>
);

export default Pibankduosolid;
