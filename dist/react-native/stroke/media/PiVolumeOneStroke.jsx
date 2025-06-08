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
 * Pivolumeonestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumeonestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume one icon",
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
      d="M18 14.0002C18.317 13.7375 18.5685 13.4257 18.7401 13.0826C18.9117 12.7394 19 12.3716 19 12.0002C19 11.6287 18.9117 11.2609 18.7401 10.9178C18.5685 10.5746 18.317 10.2628 18 10.0002M14 5.08767V18.9127C14 20.6236 12.0661 21.6188 10.6739 20.6244L7.86092 18.6151C7.29344 18.2098 6.6464 17.9295 5.96255 17.7927C3.6585 17.3319 2 15.3088 2 12.9592V11.0412C2 8.69152 3.6585 6.66848 5.96255 6.20767C6.6464 6.0709 7.29344 5.79058 7.86092 5.38524L10.6739 3.37599C12.0661 2.38153 14 3.37675 14 5.08767Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivolumeonestroke;
