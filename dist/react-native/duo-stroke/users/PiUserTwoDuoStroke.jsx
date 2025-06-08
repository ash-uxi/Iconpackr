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
 * Piusertwoduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusertwoduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user two icon",
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
      d="M16.4043 3.48145C17.6527 4.15837 18.5003 5.48025 18.5003 7.00012C18.5003 8.51999 17.6527 9.84187 16.4043 10.5188M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.3949 21.0001H20.5003C21.6049 21.0001 22.5003 20.1047 22.5003 19.0001C22.5003 17.2332 21.3546 15.7338 19.7656 15.2044M6 15H13C15.2091 15 17 16.7909 17 19C17 20.1046 16.1046 21 15 21H4C2.89543 21 2 20.1046 2 19C2 16.7909 3.79086 15 6 15Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piusertwoduostroke;
