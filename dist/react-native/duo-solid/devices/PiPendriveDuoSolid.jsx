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
 * Pipendriveduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipendriveduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pendrive icon",
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
      d="M16 8V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C14.861 2 14.441 2 13.6 2h-3.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C8 3.139 8 3.559 8 4.4V8"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M8 7a1 1 0 0 0-.272.037c-.37.036-.736.11-1.09.29a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C5 10.18 5 10.635 5 11.161V16.1c0 .833 0 1.371.074 1.839a6 6 0 0 0 4.987 4.987c.468.074 1.006.074 1.84.074h.199c.833 0 1.371 0 1.839-.074a6 6 0 0 0 4.987-4.987c.074-.468.074-1.006.074-1.84v-4.937c0-.528 0-.982-.03-1.357-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.354-.18-.72-.254-1.09-.29A1 1 0 0 0 16 7z"
    />
  </Svg>
);

export default Pipendriveduosolid;
