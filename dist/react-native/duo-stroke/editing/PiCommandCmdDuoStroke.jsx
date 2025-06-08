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
 * Picommandcmdduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picommandcmdduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "command cmd icon",
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
    <g opacity={0.28} fill="none">
      <path
        d="M9.33333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333C4 18.8061 5.19391 20 6.66667 20C8.13943 20 9.33333 18.8061 9.33333 17.3333V14.6667Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M17.3333 14.6667H14.6667V17.3333C14.6667 18.8061 15.8606 20 17.3333 20C18.8061 20 20 18.8061 20 17.3333C20 15.8606 18.8061 14.6667 17.3333 14.6667Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14.6667 6.66667V9.33333H17.3333C18.8061 9.33333 20 8.13943 20 6.66667C20 5.19391 18.8061 4 17.3333 4C15.8606 4 14.6667 5.19391 14.6667 6.66667Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M6.66667 9.33333H9.33333V6.66667C9.33333 5.19391 8.13943 4 6.66667 4C5.19391 4 4 5.19391 4 6.66667C4 8.13943 5.19391 9.33333 6.66667 9.33333Z"
        stroke={color || "#000"}
        strokeWidth="2"
        fill="none"
      />
    </g>
    <path
      d="M14.6668 14.6666H9.3335V9.33331H14.6668V14.6666Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picommandcmdduostroke;
