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
 * Piswipelefthandstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswipelefthandstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swipe left hand icon",
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
      d="M16.3247 2C15.535 2.36981 14.798 2.83923 14.1321 3.3963C14.075 3.44409 14.0383 3.5081 14.0245 3.57671L14.0238 3.58032M15.5346 5.92119C14.9497 5.27439 14.4521 4.5562 14.0538 3.78471C14.0203 3.71969 14.011 3.64788 14.0238 3.58032M14.0238 3.58032L14 3.57671M14.0238 3.58032C16.9637 4.02937 19.6227 5.33188 21.7402 7.22707M8.76272 20.2048L2.9747 14.9976C2.62393 14.6821 2.62591 14.1315 2.97894 13.8185C4.0646 12.8557 5.66618 12.7554 6.86348 13.5752L8.62989 14.7846L6.0417 5.12534C5.75581 4.05841 6.38898 2.96174 7.45591 2.67585C8.52287 2.38996 9.61952 3.02313 9.9054 4.09007L11.4583 9.88562L16.3102 9.41524C19.8677 9.07048 21.0441 12.8878 20.7623 15.7853C20.2659 20.8887 12.5224 23.5873 8.76272 20.2048Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piswipelefthandstroke;
