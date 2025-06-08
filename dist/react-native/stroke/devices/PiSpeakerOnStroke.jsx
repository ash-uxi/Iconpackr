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
 * Pispeakeronstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispeakeronstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "speaker on icon",
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
      d="M12 6.50098H12.01M10.4 22H13.6C15.8402 22 16.9603 22 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C20 18.9603 20 17.8402 20 15.6V8.4C20 6.15979 20 5.03968 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43597C16.9603 2 15.8402 2 13.6 2H10.4C8.15979 2 7.03968 2 6.18404 2.43597C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4 5.03968 4 6.15979 4 8.4V15.6C4 17.8402 4 18.9603 4.43597 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C7.03968 22 8.15979 22 10.4 22ZM12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15C16 17.2091 14.2091 19 12 19ZM12 7.00342C11.7239 7.00342 11.5 6.77956 11.5 6.50342C11.5 6.22728 11.7239 6.00342 12 6.00342C12.2761 6.00342 12.5 6.22728 12.5 6.50342C12.5 6.77956 12.2761 7.00342 12 7.00342Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pispeakeronstroke;
