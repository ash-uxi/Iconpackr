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
 * Pifacewink02solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacewink02solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face wink02 icon",
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
      d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM9 8.90039C9.55229 8.90039 10 9.34811 10 9.90039V10.9004C10 11.4527 9.55229 11.9004 9 11.9004C8.44772 11.9004 8 11.4527 8 10.9004V9.90039C8 9.34811 8.44772 8.90039 9 8.90039ZM14.6001 9.40039C14.0478 9.40039 13.6001 9.84811 13.6001 10.4004C13.6001 10.9527 14.0478 11.4004 14.6001 11.4004H15.6001C16.1524 11.4004 16.6001 10.9527 16.6001 10.4004C16.6001 9.84811 16.1524 9.40039 15.6001 9.40039H14.6001ZM9.1433 13.9005C8.75668 13.5062 8.12354 13.4999 7.72916 13.8865C7.33477 14.2731 7.32848 14.9062 7.7151 15.3006C8.80289 16.4103 10.3217 17.1006 11.9999 17.1006C13.6781 17.1006 15.1969 16.4103 16.2847 15.3006C16.6714 14.9062 16.6651 14.2731 16.2707 13.8865C15.8763 13.4999 15.2432 13.5062 14.8565 13.9005C14.1294 14.6423 13.1191 15.1006 11.9999 15.1006C10.8807 15.1006 9.87043 14.6423 9.1433 13.9005Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifacewink02solid;
