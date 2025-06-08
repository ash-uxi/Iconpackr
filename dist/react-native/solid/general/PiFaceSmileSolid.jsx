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
 * Pifacesmilesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacesmilesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face smile icon",
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
      d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM16.0001 9.9001C16.0001 9.34781 15.5524 8.9001 15.0001 8.9001C14.4478 8.9001 14.0001 9.34781 14.0001 9.9001V10.9001C14.0001 11.4524 14.4478 11.9001 15.0001 11.9001C15.5524 11.9001 16.0001 11.4524 16.0001 10.9001V9.9001ZM10.0001 9.90049C10.0001 9.3482 9.55241 8.90049 9.00012 8.90049C8.44784 8.90049 8.00012 9.3482 8.00012 9.90049V10.9005C8.00012 11.4528 8.44784 11.9005 9.00012 11.9005C9.55241 11.9005 10.0001 11.4528 10.0001 10.9005V9.90049ZM7.72928 13.886C8.12366 13.4994 8.7568 13.5057 9.14342 13.9001C9.87055 14.6418 10.8809 15.1001 12 15.1001C13.1192 15.1001 14.1295 14.6418 14.8567 13.9001C15.2433 13.5057 15.8764 13.4994 16.2708 13.886C16.6652 14.2726 16.6715 14.9058 16.2849 15.3001C15.1971 16.4098 13.6783 17.1001 12 17.1001C10.3218 17.1001 8.80301 16.4098 7.71522 15.3001C7.3286 14.9058 7.33489 14.2726 7.72928 13.886Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifacesmilesolid;
