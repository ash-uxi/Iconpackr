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
 * Pibarcodescanstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibarcodescanstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "barcode scan icon",
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
      d="M16 9V15M12 13V9M8 15V9"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21 15.604C20.9734 16.9908 20.8761 17.8493 20.5189 18.5502C20.087 19.3979 19.3979 20.087 18.5502 20.5189C17.8493 20.8761 16.9908 20.9734 15.604 21M21 8.39602C20.9734 7.00919 20.8761 6.15072 20.5189 5.44981C20.087 4.60214 19.3979 3.91297 18.5502 3.48106C17.8493 3.12393 16.9908 3.02655 15.604 3M8.39601 3C7.00918 3.02655 6.15071 3.12393 5.44981 3.48106C4.60214 3.91297 3.91297 4.60214 3.48106 5.44981C3.12393 6.15072 3.02655 7.00919 3 8.39602M3 15.604C3.02655 16.9908 3.12393 17.8493 3.48106 18.5502C3.91297 19.3979 4.60214 20.087 5.44981 20.5189C6.15071 20.8761 7.00918 20.9734 8.39601 21"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibarcodescanstroke;
