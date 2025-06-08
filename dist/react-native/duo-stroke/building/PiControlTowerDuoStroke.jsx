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
 * Picontroltowerduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picontroltowerduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "control tower icon",
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
    <path d="M12 3L12 2" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M15 8L14 13"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19.1301 4H4.86993C3.91031 4 3.19748 4.88863 3.40565 5.8254L3.8889 8H20.1111L20.5944 5.8254C20.8025 4.88863 20.0897 4 19.1301 4Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 13L6.5 22M17 13L17.5 22"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7.00546 13H16.9946C18.1663 13 19.1809 12.1862 19.4351 11.0423L20.1111 8H3.88892L4.56499 11.0423C4.81918 12.1862 5.83371 13 7.00546 13Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path d="M9 8L10 13" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Picontroltowerduostroke;
