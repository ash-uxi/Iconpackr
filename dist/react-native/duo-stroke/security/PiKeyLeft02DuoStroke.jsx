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
 * Pikeyleft02duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyleft02duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key left02 icon",
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
      d="M13.0009 10H13.4689C13.9199 9.09084 14.6651 8.36086 15.5833 7.92859C16.5016 7.49632 17.539 7.38714 18.5271 7.61879C19.5152 7.85044 20.396 8.40931 21.0265 9.20465C21.6569 9.99999 22 10.9851 22 12C22 13.0149 21.6569 14 21.0265 14.7954C20.396 15.5907 19.5152 16.1496 18.5271 16.3812C17.539 16.6129 16.5016 16.5037 15.5833 16.0714C14.6651 15.6391 13.9199 14.9092 13.4689 14H13.0009"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M13.001 10H4.00098L2.00098 12L4.00098 14H7.00098L8.14698 12.854C8.19342 12.8074 8.2486 12.7705 8.30934 12.7453C8.37009 12.7201 8.43521 12.7071 8.50098 12.7071C8.56674 12.7071 8.63186 12.7201 8.69261 12.7453C8.75335 12.7705 8.80853 12.8074 8.85498 12.854L10.001 14H13.001"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18.501 13V11C18.6562 11.1164 18.7822 11.2674 18.869 11.441C18.9558 11.6146 19.001 11.8059 19.001 12C19.001 12.1941 18.9558 12.3854 18.869 12.559C18.7822 12.7326 18.6562 12.8836 18.501 13Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pikeyleft02duostroke;
