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
 * Pibearappstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibearappstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bear app icon",
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
      d="M10.9649 4.23647C10.6024 3.64749 9.10732 2.764 8.35976 3.0585C7.73097 3.3062 7.79342 4.14585 7.79342 5.4371C6.66075 7.00019 6.33894 7.18143 5.50543 9.03901C4.3568 11.5989 3.14947 14.7024 2.42456 21H10.1267H17.8289C16.9001 19.0971 15.5409 17.9871 14.7254 14.6344C14.1487 12.2637 17.557 12.7995 18.8256 12.3237C20.502 11.6951 21.3456 10.3529 21.4987 9.40145C21.8013 7.52121 21.1589 7.89499 20.4114 7.7704C19.324 7.58917 17.3532 6.59242 15.8354 5.0973C14.799 4.07641 13.1849 4.05524 10.9649 4.23647Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibearappstroke;
