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
 * Pidrawhighlighterangleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidrawhighlighterangleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "draw highlighter angle icon",
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
      d="M17.1639 15.9074L15.7143 17.357C15.3238 17.7475 14.6906 17.7475 14.3001 17.357L8.64324 11.7001C8.25271 11.3096 8.25271 10.6764 8.64323 10.2859L10.0928 8.83634M17.1639 15.9074C18.1346 16.5505 19.4553 16.4444 20.3105 15.5892L22.7854 13.1143M17.1639 15.9074C17.0265 15.8164 16.896 15.7103 16.775 15.5892L10.411 9.22525C10.2899 9.10417 10.1839 8.97376 10.0928 8.83634M10.0928 8.83634C9.44971 7.86565 9.55577 6.54495 10.411 5.68972L12.8859 3.21484"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M7.0707 12.9297L3.58579 16.4146C3.21071 16.7897 3 17.2984 3 17.8288L3 19.0004C3 19.5527 3.44772 20.0004 4 20.0004H11.5858C11.851 20.0004 12.1054 19.895 12.2929 19.7075L13.0707 18.9297"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pidrawhighlighterangleduostroke;
