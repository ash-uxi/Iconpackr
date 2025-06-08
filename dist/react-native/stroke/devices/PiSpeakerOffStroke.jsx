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
 * Pispeakeroffstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispeakeroffstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "speaker off icon",
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
      d="M22 2L19.6442 4.3558M2 22L4.3558 19.6442M7.71525 21.9406C8.39136 22 9.24743 22 10.4 22H13.6C15.8402 22 16.9603 22 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C20 18.9603 20 17.8402 20 15.6V9.65588M10.8298 18.8261C11.1999 18.9392 11.5929 19 12 19C14.2091 19 16 17.2091 16 15C16 14.5929 15.9392 14.1999 15.8261 13.8298M19.6442 4.3558C19.6193 4.29725 19.5926 4.24008 19.564 4.18404C19.1805 3.43139 18.5686 2.81947 17.816 2.43597C16.9603 2 15.8402 2 13.6 2H10.4C8.15979 2 7.03969 2 6.18404 2.43597C5.43139 2.81947 4.81947 3.43139 4.43597 4.18404C4 5.03968 4 6.15979 4 8.4V15.6C4 17.6935 4 18.8088 4.3558 19.6442M19.6442 4.3558L12.8987 11.1013M12.8987 11.1013C12.6098 11.035 12.309 11 12 11C9.79086 11 8 12.7909 8 15C8 15.309 8.03503 15.6098 8.10135 15.8987M12.8987 11.1013L8.10135 15.8987M8.10135 15.8987L4.3558 19.6442M12 6.50098H12.01M12 7.00342C11.7239 7.00342 11.5 6.77956 11.5 6.50342C11.5 6.22728 11.7239 6.00342 12 6.00342C12.2761 6.00342 12.5 6.22728 12.5 6.50342C12.5 6.77956 12.2761 7.00342 12 7.00342Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pispeakeroffstroke;
