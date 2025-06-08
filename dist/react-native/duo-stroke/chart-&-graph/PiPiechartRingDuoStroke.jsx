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
 * Pipiechartringduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartringduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart ring icon",
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
      d="M12 21.1499C17.0534 21.1499 21.15 17.0533 21.15 11.9999C21.15 9.5913 20.2193 7.40002 18.6979 5.76611L14.3407 10.1235C14.7532 10.6374 15 11.2899 15 12.0001C15 13.657 13.6569 15.0001 12 15.0001V21.1499Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C14.6449 2.8501 17.0275 3.97219 18.698 5.76627L14.3408 10.1235C13.791 9.43856 12.9468 9.0001 12.0001 9.0001C10.3432 9.0001 9.0001 10.3432 9.0001 12.0001M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501V15.0001C10.3432 15.0001 9.0001 13.657 9.0001 12.0001M2.8501 12.0001H9.0001"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipiechartringduostroke;
