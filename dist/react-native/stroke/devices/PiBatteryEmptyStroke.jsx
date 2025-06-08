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
 * Pibatteryemptystroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibatteryemptystroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "battery empty icon",
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
      d="M20 14C20.465 14 20.6975 14 20.8882 13.9489C21.4059 13.8102 21.8102 13.4059 21.9489 12.8882C22 12.6975 22 12.465 22 12C22 11.535 22 11.3025 21.9489 11.1118C21.8102 10.5941 21.4059 10.1898 20.8882 10.0511C20.6975 10 20.465 10 20 10M8 18H14C15.8638 18 16.7956 18 17.5307 17.6955C18.5108 17.2895 19.2895 16.5108 19.6955 15.5307C20 14.7956 20 13.8638 20 12C20 10.1362 20 9.20435 19.6955 8.46927C19.2895 7.48915 18.5108 6.71046 17.5307 6.30448C16.7956 6 15.8638 6 14 6H8C6.13623 6 5.20435 6 4.46927 6.30448C3.48915 6.71046 2.71046 7.48915 2.30448 8.46927C2 9.20435 2 10.1362 2 12C2 13.8638 2 14.7956 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C5.20435 18 6.13623 18 8 18Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibatteryemptystroke;
