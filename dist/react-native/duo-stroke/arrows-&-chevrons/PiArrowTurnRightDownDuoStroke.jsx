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
 * Piarrowturnrightdownduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnrightdownduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn right down icon",
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
      d="M15 20L15 12C15 9.19974 15 7.79961 14.455 6.73005C13.9757 5.78924 13.2108 5.02433 12.27 4.54497C11.2004 4 9.80026 4 7 4H4"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M20 15.1416C18.7037 16.8944 17.1893 18.4687 15.4953 19.8257C15.3499 19.9421 15.175 20.0003 15 20.0003C14.825 20.0003 14.6501 19.9421 14.5047 19.8257C12.8107 18.4687 11.2963 16.8944 10 15.1416"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowturnrightdownduostroke;
