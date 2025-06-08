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
 * Piacleafduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacleafduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac leaf icon",
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
    <path d="M18 8h-2m-1.198 14 .04-.11a6.13 6.13 0 0 1 2.317-2.963m-.482-2.855c-1.472.85-2.025 2.65-1.383 3.76.64 1.11 2.476 1.532 3.948.682s3.037-3.974 2.716-4.53c-.32-.555-3.809-.762-5.281.088" />{" "}
    <path
      fill={color || "#000"}
      d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3z"
      opacity={0.28}
    />
  </Svg>
);

export default Piacleafduosolid;
