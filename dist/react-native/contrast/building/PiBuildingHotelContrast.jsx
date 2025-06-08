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
 * Pibuildinghotelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibuildinghotelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "building hotel icon",
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
      fill={color}
      d="M19 19.5V4.19a14.67 14.67 0 0 0-14 0V19.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5"
      opacity={0.28}
    />
    <path d="M19 4.19V19.5a1.5 1.5 0 0 1-1.5 1.5H14m5-16.81a14.67 14.67 0 0 0-14 0m14 0c.692.377 1.362.814 2 1.31M5 4.19V19.5A1.5 1.5 0 0 0 6.5 21H10M5 4.19q-1.041.566-2 1.31M10 21h4m-4 0v-4.435M14 21v-4.435m.829.636a4 4 0 0 0-.83-.636m-4.827.636a4 4 0 0 1 .828-.636m4 0a4 4 0 0 0-4 0M8 7v.01M8 10v.01M8 13v.01M12 7v.01M12 10v.01M12 13v.01M16 7v.01M16 10v.01M16 13v.01" />
  </Svg>
);

export default Pibuildinghotelcontrast;
