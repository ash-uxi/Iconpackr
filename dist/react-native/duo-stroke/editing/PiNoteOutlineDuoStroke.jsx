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
 * Pinoteoutlineduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinoteoutlineduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "note outline icon",
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
      d="M16.2 4H7.80002C6.11986 4 5.27978 4 4.63804 4.32698C4.07356 4.6146 3.61462 5.07354 3.327 5.63803C3.05659 6.16873 3.0098 6.83507 3.00171 8H20.9983C20.9902 6.83507 20.9434 6.16873 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7203 4 17.8802 4 16.2 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.9983 8C21 8.24373 21 8.50929 21 8.8V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8C3 8.50929 3 8.24373 3.00169 8"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pinoteoutlineduostroke;
