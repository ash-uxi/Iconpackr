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
 * Piidcardhorizontalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piidcardhorizontalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "id card horizontal icon",
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
    <path d="M13 10h5m-3 4h3m-8.333 0H7.333C6.597 14 6 14.597 6 15.333c0 .368.298.667.667.667h3.666a.667.667 0 0 0 .667-.667C11 14.597 10.403 14 9.667 14M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M22 8.8v-.041c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.29 2 7.954 2 8.758v6.484c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C6.29 21 6.954 21 7.758 21h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01z"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Piidcardhorizontalduosolid;
