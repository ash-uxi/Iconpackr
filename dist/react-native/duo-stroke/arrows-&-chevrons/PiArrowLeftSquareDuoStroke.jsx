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
 * Piarrowleftsquareduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftsquareduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left square icon",
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
      d="M11.9486 8C10.5241 9.03704 9.24467 10.2485 8.1419 11.6038C8.0473 11.72 8 11.86 8 12M11.9486 16C10.5241 14.963 9.24467 13.7515 8.1419 12.3962C8.0473 12.28 8 12.14 8 12M8 12L16 12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowleftsquareduostroke;
