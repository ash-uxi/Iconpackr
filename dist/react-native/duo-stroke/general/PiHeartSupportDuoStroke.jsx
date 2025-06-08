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
 * Piheartsupportduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartsupportduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart support icon",
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
      d="M12 5.4274C8.83207 0.653479 2 3.5018 2 8.94428C2 15.9768 11 21 12 21C12.7369 21 17.8174 18.2726 20.4402 14.0237"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M21.9998 8.94434C21.9998 3.50678 15.1623 0.661714 11.9998 5.42747L9.18993 8.98739C8.50802 9.85133 8.58158 11.0891 9.36102 11.8662C10.2483 12.7508 11.6986 12.7015 12.5236 11.7585L14.4998 9.50006C15.7787 11.7381 17.9451 13.3756 20.4399 14.0237C21.3766 12.5063 21.9998 10.7949 21.9998 8.94434Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piheartsupportduostroke;
