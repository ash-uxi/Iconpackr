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
 * Pistopcirclesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistopcirclesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "stop circle icon",
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
      d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pistopcirclesolid;
