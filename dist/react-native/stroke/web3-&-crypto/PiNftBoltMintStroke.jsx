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
 * Pinftboltmintstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinftboltmintstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "nft bolt mint icon",
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
      d="M17 15.7487L15 18.9987H19L17 22.2487M11.5312 21H10.7463C9.97316 21 9.41659 21 8.96837 20.9645M21.3594 11H19.0372C18.1022 11 17.6347 11 17.2405 11.0342C12.8595 11.4149 9.38614 14.8646 9.00286 19.2156C8.96882 19.602 8.96838 20.0595 8.96837 20.9645M21.3594 11C21.2082 10.4811 20.9015 9.9329 20.3544 8.95471L18.8648 6.29189C18.1946 5.09379 17.8596 4.49474 17.3829 4.05853C16.9613 3.67263 16.4616 3.38059 15.9171 3.20194C15.3017 3 14.6117 3 13.2317 3L10.7463 3C9.3663 3 8.6763 3 8.0609 3.20194C7.51647 3.38059 7.01673 3.67263 6.59509 4.05853C6.11848 4.49474 5.78339 5.09379 5.1132 6.29189L3.65881 8.89189C3.02425 10.0263 2.70696 10.5935 2.58257 11.1942C2.47248 11.7258 2.47248 12.2742 2.58257 12.8058C2.70696 13.4065 3.02425 13.9737 3.65882 15.1081L5.1132 17.7081C5.78339 18.9062 6.11848 19.5053 6.59509 19.9415C7.01673 20.3274 7.51647 20.6194 8.0609 20.7981C8.33152 20.8869 8.61657 20.9366 8.96837 20.9645M21.3594 11C21.3802 11.0713 21.398 11.142 21.4132 11.2132C21.5241 11.7352 21.5288 12.2739 21.4269 12.7977C21.3378 13.2563 21.1366 13.6968 20.77 14.3946M8.96837 10C8.41229 10 7.96149 9.55228 7.96149 9C7.96149 8.44772 8.41229 8 8.96837 8C9.52446 8 9.97526 8.44772 9.97526 9C9.97526 9.55228 9.52446 10 8.96837 10Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinftboltmintstroke;
