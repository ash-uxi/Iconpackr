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
 * Pivoicerecordingduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivoicerecordingduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "voice recording icon",
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
      d="M18 6.7A5.15 5.15 0 1 0 18 17a5.15 5.15 0 0 0 0-10.3"
    />{" "}
    <path d="M6 16h12" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M6 6.7A5.15 5.15 0 1 0 6 17 5.15 5.15 0 0 0 6 6.7"
    />
  </Svg>
);

export default Pivoicerecordingduosolid;
