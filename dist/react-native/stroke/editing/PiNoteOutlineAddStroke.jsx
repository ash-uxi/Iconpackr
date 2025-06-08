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
 * Pinoteoutlineaddstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinoteoutlineaddstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "note outline add icon",
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
      d="M20 22V19M20 19V16M20 19H17M20 19H23M21 11.53V8.8C21 8.50929 21 8.24373 20.9983 8M11.9947 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8C3 8.50929 3 8.24373 3.00169 8M20.9983 8C20.9902 6.83507 20.9434 6.16873 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3.05658 6.16873 3.00979 6.83507 3.00169 8M20.9983 8H3.00169"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinoteoutlineaddstroke;
