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
 * Piarrowdownsquareduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdownsquareduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down square icon",
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
      d="M16 12.0514C14.963 13.4759 13.7515 14.7553 12.3962 15.8581C12.28 15.9527 12.14 16 12 16M8 12.0514C9.03704 13.4759 10.2485 14.7553 11.6038 15.8581C11.72 15.9527 11.86 16 12 16M12 16L12 8"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17.2961 3.45672C16.1935 3 14.7957 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06568 4.06569 5.23373 3.45672 6.7039C3 7.80652 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06568 18.7663 5.23373 19.9343 6.7039 20.5433C7.80652 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7957 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowdownsquareduostroke;
