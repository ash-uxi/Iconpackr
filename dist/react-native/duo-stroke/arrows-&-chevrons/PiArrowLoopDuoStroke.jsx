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
 * Piarrowloopduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowloopduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow loop icon",
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
      d="M16.2228 17.6287C16.4699 17.4135 16.7126 17.1872 16.9497 16.95C20.855 13.0447 21.8047 7.66285 19.0711 4.92918C17.239 3.09707 14.2174 2.91944 11.248 4.17715M7.78588 6.36428C7.53574 6.58175 7.29021 6.81054 7.05025 7.0505C3.14501 10.9557 2.19526 16.3376 4.92893 19.0713C6.76104 20.9034 9.78264 21.081 12.752 19.8233"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M3.65234 6.20545C4.87368 6.03097 6.11117 6.00794 7.33677 6.13635C7.51483 6.15501 7.67256 6.23895 7.78581 6.36403C7.88342 6.47183 7.948 6.6102 7.96408 6.76366C8.09249 7.98926 8.06946 9.22675 7.89498 10.4481M16.113 13.5438C15.9385 14.7651 15.9155 16.0026 16.0439 17.2282C16.06 17.3819 16.1248 17.5205 16.2227 17.6284C16.3359 17.7532 16.4934 17.8369 16.6712 17.8555C17.8968 17.9839 19.1343 17.9609 20.3556 17.7864"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowloopduostroke;
