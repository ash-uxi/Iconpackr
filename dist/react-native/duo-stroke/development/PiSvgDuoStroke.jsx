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
 * Pisvgduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisvgduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "svg icon",
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
      d="M12 5V12M12 12V19M12 12L19 12M12 12L5 12M12 12L17.2927 17.2931M12 12L6.7071 6.70711M12 12L6.70735 17.2931M12 12L17.2931 6.70735"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18C17 17.724 17.1118 17.4741 17.2927 17.2931C17.4736 17.112 17.7237 17 18 17C18.5523 17 19 17.4477 19 18Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 6C19 6.55228 18.5523 7 18 7C17.724 7 17.4741 6.88817 17.2931 6.70735C17.112 6.52637 17 6.27627 17 6C17 5.44772 17.4477 5 18 5C18.5523 5 19 5.44772 19 6Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21 12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.27627 17 6.52637 17.112 6.70735 17.2931C6.88817 17.4741 7 17.724 7 18Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 6C7 6.27614 6.88807 6.52615 6.7071 6.70711C6.52614 6.88807 6.27614 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pisvgduostroke;
