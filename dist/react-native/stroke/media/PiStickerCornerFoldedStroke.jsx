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
 * Pistickercornerfoldedstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pistickercornerfoldedstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sticker corner folded icon",
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
      d="M21 9C21 10.146 21 10.7191 20.833 11.1779C20.553 11.9471 19.9471 12.553 19.1779 12.833C18.7191 13 18.146 13 17 13H15.9538C14.9199 13 14.4029 13 14.008 13.2012C13.6606 13.3782 13.3782 13.6606 13.2012 14.008C13 14.4029 13 14.9199 13 15.9538L13 17C13 18.146 13 18.7191 12.833 19.1779C12.553 19.9471 11.9471 20.553 11.1779 20.833C10.7191 21 10.146 21 9 21"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V13C21 17.4183 17.4183 21 13 21H7C4.79086 21 3 19.2091 3 17V7Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pistickercornerfoldedstroke;
