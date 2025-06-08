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
 * Pivolumemuteduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumemuteduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume mute icon",
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
      d="M14 18.9127V5.08767C14 3.37675 12.0661 2.38153 10.6739 3.37599L7.86092 5.38524C7.29344 5.79058 6.6464 6.0709 5.96255 6.20767C3.6585 6.66848 2 8.69152 2 11.0412V12.9592C2 15.3088 3.6585 17.3319 5.96255 17.7927C6.6464 17.9295 7.29344 18.2098 7.86092 18.6151L10.6739 20.6244C12.0661 21.6188 14 20.6236 14 18.9127Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M22 10L19.5 12.5M19.5 12.5L17 15M19.5 12.5L22 15M19.5 12.5L17 10"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivolumemuteduostroke;
