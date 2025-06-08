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
 * Pibatterychargingduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibatterychargingduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "battery charging icon",
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
      d="M11.9999 6L8.16862 10.9807C7.80165 11.4577 7.61816 11.6963 7.62728 11.88C7.63519 12.0395 7.71879 12.1856 7.85227 12.2732C8.0061 12.3742 8.30471 12.3369 8.90195 12.2622L13.0978 11.7378C13.6951 11.6631 13.9937 11.6258 14.1475 11.7268C14.281 11.8144 14.3646 11.9605 14.3725 12.12C14.3816 12.3037 14.1981 12.5423 13.8312 13.0193L9.9999 18"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 14C20.465 14 20.6975 14 20.8882 13.9489C21.4059 13.8102 21.8102 13.4059 21.9489 12.8882C22 12.6975 22 12.465 22 12C22 11.535 22 11.3025 21.9489 11.1118C21.8102 10.5941 21.4059 10.1898 20.8882 10.0511C20.6975 9.99999 20.465 9.99999 20 9.99999M16 6.02686C16.6545 6.06034 17.1229 6.13554 17.5307 6.30447C18.5108 6.71045 19.2895 7.48914 19.6955 8.46925C20 9.20434 20 10.1362 20 12C20 13.8638 20 14.7956 19.6955 15.5307C19.2895 16.5108 18.5108 17.2895 17.5307 17.6955C16.9407 17.9399 16.2238 17.9881 15 17.9976M7 6.00244C5.77617 6.01196 5.05932 6.06018 4.46927 6.30458C3.48915 6.71056 2.71046 7.48926 2.30448 8.46937C2 9.20445 2 10.1363 2 12.0001C2 13.8639 2 14.7958 2.30448 15.5308C2.71046 16.511 3.48915 17.2896 4.46927 17.6956C4.87709 17.8645 5.34549 17.9398 6 17.9732"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibatterychargingduostroke;
