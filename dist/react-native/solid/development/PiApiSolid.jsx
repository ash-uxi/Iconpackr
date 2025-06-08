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
 * Piapisolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piapisolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "api icon",
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
      d="M14.5 12H13V9H14.5C15.3284 9 16 9.67157 16 10.5C16 11.3284 15.3284 12 14.5 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M5 4C2.79086 4 1 5.79086 1 8V16C1 18.2091 2.79086 20 5 20H19C21.2091 20 23 18.2091 23 16V8C23 5.79086 21.2091 4 19 4H5ZM12 7C11.4477 7 11 7.44772 11 8V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14H14.5C16.433 14 18 12.433 18 10.5C18 8.567 16.433 7 14.5 7H12ZM20 7C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16V8C19 7.44772 19.4477 7 20 7ZM7.39132 7.27956C6.81915 7.05069 6.18085 7.05069 5.60868 7.27956C4.03313 7.90978 3 9.43574 3 11.1327V16.0001C3 16.5524 3.44772 17.0001 4 17.0001C4.55228 17.0001 5 16.5524 5 16.0001V14L8 14.0001V16.0001C8 16.5524 8.44772 17.0001 9 17.0001C9.55228 17.0001 10 16.5524 10 16.0001V11.1327C10 9.43574 8.96687 7.90978 7.39132 7.27956Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M8 12.0001L5 12V11.1327C5 10.2536 5.53522 9.46301 6.35146 9.13652C6.44681 9.09837 6.55319 9.09837 6.64854 9.13652C7.46478 9.46301 8 10.2536 8 11.1327V12.0001Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piapisolid;
