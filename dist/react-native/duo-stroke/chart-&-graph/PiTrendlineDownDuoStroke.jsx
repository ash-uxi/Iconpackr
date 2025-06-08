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
 * Pitrendlinedownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrendlinedownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trendline down icon",
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
      d="M2 7.14795L2.72917 8.08546C4.52868 10.3991 6.77699 12.3254 9.33921 13.7489C9.65601 13.9249 10.0549 13.8282 10.2559 13.5267L13.4676 8.70917C13.6741 8.39932 14.1004 8.33015 14.3943 8.55877C16.9557 10.5509 18.9953 13.135 20.338 16.089L20.6593 16.7959"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M22.0001 12.1741C21.819 13.6772 21.4412 15.1496 20.8768 16.5533C20.8338 16.6603 20.7555 16.7444 20.6594 16.7958C20.5725 16.8422 20.471 16.8619 20.3679 16.8472C18.87 16.6341 17.406 16.2251 16.0137 15.6303"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitrendlinedownduostroke;
