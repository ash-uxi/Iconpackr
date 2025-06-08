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
 * Pimedicinepillcapsuleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimedicinepillcapsuleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "medicine pill capsule icon",
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
      d="M15.7138 15.7136L8.28662 8.28644M13.4085 8.47029L15.1763 6.70252C15.6381 6.24071 16.3261 6.14297 16.8837 6.40932"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4.22181 19.7783C2.17085 17.7273 2.17085 14.4021 4.22181 12.3511L12.351 4.22194C14.4019 2.17098 17.7272 2.17098 19.7782 4.22194C21.8291 6.2729 21.8291 9.59816 19.7782 11.6491L11.649 19.7783C9.59804 21.8292 6.27277 21.8292 4.22181 19.7783Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pimedicinepillcapsuleduostroke;
