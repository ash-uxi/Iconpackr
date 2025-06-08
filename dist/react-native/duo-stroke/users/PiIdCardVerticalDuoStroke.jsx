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
 * Piidcardverticalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piidcardverticalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "id card vertical icon",
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
      d="M17 3H7C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7 6H13M7 10H10M15.667 16H12.333C11.597 16 11 16.597 11 17.333C11 17.702 11.299 18 11.667 18H16.333C16.4206 18 16.5073 17.9827 16.5882 17.9492C16.6692 17.9157 16.7427 17.8666 16.8046 17.8046C16.8666 17.7427 16.9157 17.6692 16.9492 17.5882C16.9827 17.5073 17 17.4206 17 17.333C17 16.597 16.403 16 15.667 16ZM15 12C15 12.2652 14.8946 12.5196 14.7071 12.7071C14.5196 12.8946 14.2652 13 14 13C13.7348 13 13.4804 12.8946 13.2929 12.7071C13.1054 12.5196 13 12.2652 13 12C13 11.7348 13.1054 11.4804 13.2929 11.2929C13.4804 11.1054 13.7348 11 14 11C14.2652 11 14.5196 11.1054 14.7071 11.2929C14.8946 11.4804 15 11.7348 15 12Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piidcardverticalduostroke;
