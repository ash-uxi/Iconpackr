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
 * Pipiechartringstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartringstroke = ({
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
      d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 9.59145 20.2194 7.40018 18.698 5.76627M12.0001 21.1501V15.0001M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001M2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C14.6449 2.8501 17.0275 3.97219 18.698 5.76627M2.8501 12.0001H9.0001M12.0001 15.0001C13.657 15.0001 15.0001 13.657 15.0001 12.0001C15.0001 11.2899 14.7533 10.6373 14.3408 10.1235M12.0001 15.0001C10.3432 15.0001 9.0001 13.657 9.0001 12.0001M9.0001 12.0001C9.0001 10.3432 10.3432 9.0001 12.0001 9.0001C12.9468 9.0001 13.791 9.43856 14.3408 10.1235M14.3408 10.1235L18.698 5.76627"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipiechartringstroke;
