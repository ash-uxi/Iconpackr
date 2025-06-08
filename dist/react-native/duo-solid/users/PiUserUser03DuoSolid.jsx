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
 * Piuseruser03duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseruser03duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user user03 icon",
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
      d="M10.1783 13.6752C6.56927 12.6747 3 15.3891 3 19.1342C3 20.717 4.28313 22.0002 5.86595 22.0002H18.1341C19.7169 22.0002 21 20.717 21 19.1342C21 15.3891 17.4307 12.6747 13.8217 13.6752L13.1258 13.8682C12.3892 14.0724 11.6108 14.0724 10.8742 13.8682L10.1783 13.6752Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piuseruser03duosolid;
