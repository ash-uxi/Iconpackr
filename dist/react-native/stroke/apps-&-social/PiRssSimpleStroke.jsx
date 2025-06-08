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
 * Pirsssimplestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirsssimplestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rss simple icon",
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
      d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20M4 11.5789C5.10587 11.5789 6.20091 11.7968 7.2226 12.22C8.24429 12.6432 9.17262 13.2634 9.95458 14.0454C10.7366 14.8274 11.3568 15.7557 11.78 16.7774C12.2032 17.7991 12.4211 18.8941 12.4211 20M4.40982 19.5789H4.42105"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pirsssimplestroke;
