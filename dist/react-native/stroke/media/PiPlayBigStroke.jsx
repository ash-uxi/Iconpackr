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
 * Piplaybigstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaybigstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "play big icon",
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
      d="M5 11.7229C5 7.9046 5 5.99546 5.79793 4.92964C6.4933 4.00082 7.55771 3.41971 8.71503 3.33705C10.0431 3.24219 11.649 4.27458 14.8608 6.33934L15.2923 6.61668C18.0794 8.40838 19.4729 9.30423 19.9542 10.4433C20.3748 11.4387 20.3748 12.5618 19.9542 13.5571C19.4729 14.6962 18.0794 15.5921 15.2923 17.3838L14.8608 17.6611C11.649 19.7259 10.0431 20.7583 8.71503 20.6634C7.55771 20.5807 6.4933 19.9996 5.79793 19.0708C5 18.005 5 16.0958 5 12.2776V11.7229Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piplaybigstroke;
