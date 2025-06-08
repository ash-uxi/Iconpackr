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
 * Piarrowleftupsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftupsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left up icon",
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
      d="M6.48489 14.8995L9.80982 11.224L17.884 19.2983C18.2746 19.6888 18.9077 19.6888 19.2983 19.2983C19.6888 18.9077 19.6888 18.2746 19.2983 17.884L11.224 9.80982L14.8995 6.48489C15.1861 6.22554 15.2977 5.82419 15.1859 5.45412C15.0741 5.08406 14.759 4.81157 14.3767 4.75433C11.7043 4.35421 8.99677 4.30159 6.3218 4.59719C5.86911 4.64721 5.46192 4.85033 5.15613 5.15613C4.85033 5.46192 4.64721 5.86911 4.59719 6.3218C4.30159 8.99676 4.35421 11.7043 4.75433 14.3767C4.81157 14.759 5.08405 15.0741 5.45412 15.1859C5.82419 15.2977 6.22554 15.1861 6.48489 14.8995Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowleftupsolid;
