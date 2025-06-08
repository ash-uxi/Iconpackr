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
 * Pilabflaskroundduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilabflaskroundduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lab flask round icon",
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
      d="M10 3H14M10 3H9M10 3V6.128C10 6.802 9.542 7.38 8.927 7.657C7.77099 8.17701 6.76546 8.98123 6.00413 9.9947C5.24281 11.0082 4.75046 12.1979 4.573 13.453C12 10 14 17.5 19.486 14.966C19.5812 13.4434 19.2099 11.9281 18.4216 10.622C17.6333 9.31593 16.4655 8.28126 15.074 7.656C14.457 7.38 14 6.803 14 6.129V3M14 3H15"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 16.0005H9.01M4.5 14.5005C4.49792 16.4507 5.25551 18.325 6.61212 19.7259C7.96874 21.1269 9.81769 21.9443 11.7669 22.005C13.7161 22.0656 15.6123 21.3646 17.0533 20.0506C18.4943 18.7366 19.3669 16.9131 19.486 14.9665C14 17.5005 12 10.0005 4.573 13.4535C4.52446 13.8004 4.50007 14.1503 4.5 14.5005Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilabflaskroundduostroke;
