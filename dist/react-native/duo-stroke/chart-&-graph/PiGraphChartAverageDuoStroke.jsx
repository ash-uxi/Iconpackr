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
 * Pigraphchartaverageduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartaverageduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart average icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 7.00009L7.22319 6.72376C8.61414 5.00163 11.3274 5.32756 12.2709 7.33012L15.7291 14.6701C16.6726 16.6726 19.3859 16.9986 20.7768 15.2764L21 15.0001M6 11.0001H6.01M10 11.0001H10.01M18 11.0001H18.01M22 11.0001H22.01"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartaverageduostroke;
