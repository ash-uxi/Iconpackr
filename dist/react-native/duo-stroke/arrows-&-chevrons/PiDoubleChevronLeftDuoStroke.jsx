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
 * Pidoublechevronleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron left icon",
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
      d="M11 8C9.53812 9.06206 8.22872 10.3071 7.1058 11.7021C6.96473 11.8774 6.96473 12.1226 7.1058 12.2979C8.22872 13.6929 9.53812 14.9379 11 16"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17 8C15.5381 9.06206 14.2287 10.3071 13.1058 11.7021C12.9647 11.8774 12.9647 12.1226 13.1058 12.2979C14.2287 13.6929 15.5381 14.9379 17 16"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pidoublechevronleftduostroke;
