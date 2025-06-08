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
 * Piearthglobeduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piearthglobeduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "earth globe icon",
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
      d="M16.3463 3.96789C16.3463 6.43274 14.5546 8.54333 12.0137 9.41719C12.2338 9.84436 12.358 10.329 12.358 10.8426C12.358 11.7405 11.9782 12.5498 11.3706 13.1186C11.7547 13.4382 11.9992 13.9198 11.9992 14.4586C11.9992 15.4209 11.2191 16.201 10.2568 16.201C9.29446 16.201 8.51435 15.4209 8.51435 14.4586C8.51435 14.2613 8.54714 14.0716 8.60758 13.8948C7.19014 13.602 6.1246 12.3467 6.1246 10.8426C6.1246 10.2894 6.26873 9.76985 6.52147 9.31948C5.51708 8.93146 4.64099 8.34675 3.96191 7.62351C5.51383 4.77952 8.53125 2.8501 11.9993 2.8501C13.5726 2.8501 15.0532 3.24718 16.3462 3.94659L16.3463 3.96789Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17.4849 14.2334C16.5226 14.2334 15.7425 15.0135 15.7425 15.9759C15.7425 16.3806 15.8805 16.7531 16.112 17.0489C15.7665 17.5508 15.5643 18.1589 15.5643 18.8142C15.5643 19.3394 15.6941 19.8342 15.9235 20.2683C17.77 19.3903 19.2758 17.9121 20.1887 16.0858C19.8897 15.9203 19.5607 15.8024 19.2119 15.7426C19.0979 14.8906 18.3681 14.2334 17.4849 14.2334Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.84961 12.0001C2.84961 17.0535 6.9462 21.1501 11.9996 21.1501C16.9741 21.1501 21.1496 16.9756 21.1496 12.0001C21.1496 6.94669 17.053 2.8501 11.9996 2.8501C6.9462 2.8501 2.84961 6.94669 2.84961 12.0001Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piearthglobeduostroke;
