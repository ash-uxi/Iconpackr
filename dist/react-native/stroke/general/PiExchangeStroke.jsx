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
 * Piexchangestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchangestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange icon",
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
      d="M10.0001 15.8116C9.25988 14.8246 8.40113 13.9333 7.44369 13.1575C7.3142 13.0525 7.15716 13.0001 7.00012 13.0001M4.00012 15.8116C4.74037 14.8246 5.59912 13.9333 6.55655 13.1575C6.68604 13.0525 6.84308 13.0001 7.00012 13.0001M7.00012 13.0001L7.00012 21.0001M20.0001 8.18854C19.2599 9.17553 18.4011 10.0669 17.4437 10.8427C17.3142 10.9476 17.1572 11.0001 17.0001 11.0001M14.0001 8.18854C14.7404 9.17553 15.5991 10.0669 16.5566 10.8427C16.686 10.9476 16.8431 11.0001 17.0001 11.0001M17.0001 11.0001L17.0001 3.00007M7.0001 2.8501C5.2604 2.8501 3.8501 4.2604 3.8501 6.0001C3.8501 7.73979 5.2604 9.1501 7.0001 9.1501C8.73979 9.1501 10.1501 7.73979 10.1501 6.0001C10.1501 4.2604 8.73979 2.8501 7.0001 2.8501ZM17.0001 14.8501C15.2604 14.8501 13.8501 16.2604 13.8501 18.0001C13.8501 19.7398 15.2604 21.1501 17.0001 21.1501C18.7398 21.1501 20.1501 19.7398 20.1501 18.0001C20.1501 16.2604 18.7398 14.8501 17.0001 14.8501Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piexchangestroke;
