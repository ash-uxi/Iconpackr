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
 * Piarrowleftdownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftdownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left down icon",
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
      d="M6.48489 9.10027L9.80982 12.7757L17.884 4.70146C18.2746 4.31094 18.9077 4.31094 19.2983 4.70146C19.6888 5.09199 19.6888 5.72515 19.2983 6.11568L11.224 14.1899L14.8995 17.5148C15.1861 17.7742 15.2977 18.1755 15.1859 18.5456C15.0741 18.9157 14.759 19.1882 14.3767 19.2454C11.7043 19.6455 8.99677 19.6981 6.3218 19.4025C5.86911 19.3525 5.46192 19.1494 5.15613 18.8436C4.85033 18.5378 4.64721 18.1306 4.59719 17.6779C4.30159 15.003 4.35421 12.2955 4.75433 9.62306C4.81157 9.24074 5.08405 8.92566 5.45412 8.81386C5.82419 8.70207 6.22554 8.81359 6.48489 9.10027Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowleftdownsolid;
