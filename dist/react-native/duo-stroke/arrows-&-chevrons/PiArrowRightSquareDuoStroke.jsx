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
 * Piarrowrightsquareduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightsquareduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right square icon",
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
      d="M12.0514 8C13.4759 9.03704 14.7553 10.2485 15.8581 11.6038C15.9527 11.72 16 11.86 16 12M12.0514 16C13.4759 14.963 14.7553 13.7515 15.8581 12.3962C15.9527 12.28 16 12.14 16 12M16 12L8 12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3.45672 6.7039C3 7.80653 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06568 18.7663 5.23373 19.9343 6.7039 20.5433C7.80652 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672C16.1935 3 14.7956 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowrightsquareduostroke;
