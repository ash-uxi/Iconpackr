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
 * Pimoonduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimoonduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "moon icon",
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
      d="M16 14.0001C18.0722 14.0001 19.899 12.9497 20.977 11.3522C20.9923 11.5661 21 11.7822 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12.2179 3 12.434 3.00775 12.6481 3.02298C11.0505 4.10098 10 5.92787 10 8.00012C10 11.3138 12.6863 14.0001 16 14.0001Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M20.977 11.3522C19.899 12.9496 18.0722 14.0001 16 14.0001C12.6863 14.0001 10 11.3138 10 8.0001C10 5.92784 11.0505 4.10095 12.6481 3.02295"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimoonduostroke;
