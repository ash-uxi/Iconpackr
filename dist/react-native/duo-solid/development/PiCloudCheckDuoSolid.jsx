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
 * Picloudcheckduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudcheckduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud check icon",
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
      d="M12.5 4a7.5 7.5 0 0 0-7.383 6.176A5.502 5.502 0 0 0 6.5 21h10a6.5 6.5 0 0 0 2.965-12.285A7.5 7.5 0 0 0 12.5 4"
      opacity={0.28}
    />{" "}
    <path d="m9 13.597 2.341 2.339A15 15 0 0 1 15.9 11" />
  </Svg>
);

export default Picloudcheckduosolid;
