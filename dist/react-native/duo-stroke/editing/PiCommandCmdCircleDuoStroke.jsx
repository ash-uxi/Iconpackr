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
 * Picommandcmdcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picommandcmdcircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "command cmd circle icon",
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
      d="M10.3333 13.6667H8.66667C7.74619 13.6667 7 14.4129 7 15.3333C7 16.2538 7.74619 17 8.66667 17C9.58714 17 10.3333 16.2538 10.3333 15.3333V13.6667ZM10.3333 13.6667H13.6667M10.3333 13.6667V10.3333M13.6667 13.6667H15.3333C16.2538 13.6667 17 14.4129 17 15.3333C17 16.2538 16.2538 17 15.3333 17C14.4129 17 13.6667 16.2538 13.6667 15.3333V13.6667ZM13.6667 13.6667V10.3333M13.6667 10.3333V8.66667C13.6667 7.74619 14.4129 7 15.3333 7C16.2538 7 17 7.74619 17 8.66667C17 9.58714 16.2538 10.3333 15.3333 10.3333H13.6667ZM13.6667 10.3333H10.3333M10.3333 10.3333H8.66667C7.74619 10.3333 7 9.58714 7 8.66667C7 7.74619 7.74619 7 8.66667 7C9.58714 7 10.3333 7.74619 10.3333 8.66667V10.3333Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21.1501 12C21.1501 17.0534 17.0535 21.15 12.0001 21.15C6.94669 21.15 2.8501 17.0534 2.8501 12C2.8501 6.94657 6.94669 2.84998 12.0001 2.84998C17.0535 2.84998 21.1501 6.94657 21.1501 12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Picommandcmdcircleduostroke;
