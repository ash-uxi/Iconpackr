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
 * Pivisionpro3dstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivisionpro3dstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "vision pro3 d icon",
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
      d="M2.41277 14.5C2.13706 13.7157 2.01233 12.8508 2.0231 12C2.09096 6.64182 7.91218 6.50001 11.9999 6.5C16.0876 6.49999 21.9089 6.64174 21.9768 12C21.9876 12.8508 21.8647 13.7156 21.5904 14.5M6.02246 16.5C6.11768 17.0675 6.61127 17.5 7.20587 17.5H9.0131C9.83753 17.5 10.5059 16.8317 10.5059 16.0072C10.5059 14.9635 9.50586 14.5 8.50586 14.5C9.50586 14.5 10.5059 14.0383 10.5059 12.994C10.5059 12.1689 9.83698 11.5 9.01187 11.5H7.20587C6.61127 11.5 6.11768 11.9325 6.02246 12.5M13.5059 12.4V16.6C13.5059 17.0971 13.9088 17.5 14.4059 17.5H15.7559C16.9985 17.5 18.0059 16.4926 18.0059 15.25V13.75C18.0059 12.5074 16.9985 11.5 15.7559 11.5H14.4059C13.9088 11.5 13.5059 11.9029 13.5059 12.4Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivisionpro3dstroke;
