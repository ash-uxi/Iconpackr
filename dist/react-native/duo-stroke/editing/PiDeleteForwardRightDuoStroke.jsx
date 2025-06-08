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
 * Pideleteforwardrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pideleteforwardrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "delete forward right icon",
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
      d="M21.794 11.3066C20.4842 9.36639 19.0028 7.59456 17.3749 6.02049C17.0171 5.6745 16.8381 5.50151 16.5895 5.35316C16.383 5.22993 16.114 5.12112 15.8798 5.06616C15.598 5 15.319 5 14.7611 5H7C5.59987 5 4.8998 5 4.36502 5.27248C3.89462 5.51217 3.51217 5.89462 3.27248 6.36502C3 6.8998 3 7.59987 3 9V15C3 16.4001 3 17.1002 3.27248 17.635C3.51217 18.1054 3.89462 18.4878 4.36502 18.7275C4.8998 19 5.59987 19 7 19H14.7611C15.319 19 15.598 19 15.8798 18.9338C16.114 18.8789 16.383 18.7701 16.5895 18.6468C16.8381 18.4985 17.0171 18.3255 17.3749 17.9795C19.0028 16.4054 20.4842 14.6336 21.794 12.6934C21.9313 12.4899 22 12.245 22 12C22 11.755 21.9313 11.5101 21.794 11.3066Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8 15L11 12M11 12L14 9M11 12L8 9M11 12L14 15"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pideleteforwardrightduostroke;
