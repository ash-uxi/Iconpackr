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
 * Pikeyright02duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyright02duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right02 icon",
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
      d="M11 10H20L22 12L20 14H17L15.854 12.854C15.8076 12.8074 15.7524 12.7705 15.6916 12.7453C15.6309 12.7201 15.5658 12.7071 15.5 12.7071C15.4342 12.7071 15.3691 12.7201 15.3084 12.7453C15.2476 12.7705 15.1924 12.8074 15.146 12.854L14 14H11"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M11.0001 10H10.5321C10.081 9.09084 9.33588 8.36086 8.41763 7.92859C7.49939 7.49632 6.46198 7.38714 5.47386 7.61879C4.48575 7.85044 3.60495 8.40931 2.9745 9.20465C2.34406 9.99999 2.00098 10.9851 2.00098 12C2.00098 13.0149 2.34406 14 2.9745 14.7954C3.60495 15.5907 4.48575 16.1496 5.47386 16.3812C6.46198 16.6129 7.49939 16.5037 8.41763 16.0714C9.33588 15.6391 10.081 14.9092 10.5321 14H11.0001"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5.5 13V11C5.34475 11.1164 5.21875 11.2674 5.13197 11.441C5.04518 11.6146 5 11.8059 5 12C5 12.1941 5.04518 12.3854 5.13197 12.559C5.21875 12.7326 5.34475 12.8836 5.5 13Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyright02duostroke;
