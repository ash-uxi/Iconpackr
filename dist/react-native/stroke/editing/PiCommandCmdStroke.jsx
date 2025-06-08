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
 * Picommandcmdstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picommandcmdstroke = ({
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
    <path
      d="M9.33333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333C4 18.8061 5.19391 20 6.66667 20C8.13943 20 9.33333 18.8061 9.33333 17.3333V14.6667ZM9.33333 14.6667H14.6667M9.33333 14.6667V9.33333M14.6667 14.6667H17.3333C18.8061 14.6667 20 15.8606 20 17.3333C20 18.8061 18.8061 20 17.3333 20C15.8606 20 14.6667 18.8061 14.6667 17.3333V14.6667ZM14.6667 14.6667V9.33333M14.6667 9.33333V6.66667C14.6667 5.19391 15.8606 4 17.3333 4C18.8061 4 20 5.19391 20 6.66667C20 8.13943 18.8061 9.33333 17.3333 9.33333H14.6667ZM14.6667 9.33333H9.33333M9.33333 9.33333H6.66667C5.19391 9.33333 4 8.13943 4 6.66667C4 5.19391 5.19391 4 6.66667 4C8.13943 4 9.33333 5.19391 9.33333 6.66667V9.33333Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picommandcmdstroke;
