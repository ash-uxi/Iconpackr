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
 * Pispatialcurvedscreenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialcurvedscreenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial curved screen icon",
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
    <path d="M16 20.997h-5m-2.99 0H8" />{" "}
    <path
      fill={color || "#000"}
      d="M20.496 2.405A2 2 0 0 1 23 4.383V16.61l-.001.116a2 2 0 0 1-2.503 1.862l-.111-.032-.01-.003-.638-.19a28 28 0 0 0-16.112.19l-.01.003-.111.032a2 2 0 0 1-2.503-1.862L1 16.61V4.383l.001-.116a2 2 0 0 1 2.503-1.862l.111.032.01.003.638.19a28 28 0 0 0 16.112-.19l.01-.003c.034-.01.074-.023.111-.032"
      opacity={0.35}
    />
  </Svg>
);

export default Pispatialcurvedscreenduosolid;
