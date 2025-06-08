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
 * Pishieldbugduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldbugduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield bug icon",
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
      d="M13.2576 9.01801C13.3067 8.879 13.3334 8.72941 13.3334 8.57357C13.3334 7.83719 12.7365 7.24023 12.0001 7.24023C11.2637 7.24023 10.6668 7.83719 10.6668 8.57357C10.6668 8.72941 10.6935 8.879 10.7426 9.01801M13.2576 9.01801H14.1153C14.3256 9.22702 14.5089 9.46681 14.6589 9.73069M13.2576 9.01801H10.7426M10.7426 9.01801H9.88494C9.67462 9.22702 9.49132 9.46681 9.34128 9.73069M16.0001 7.55742V8.36938C16.0001 9.00496 15.5515 9.55218 14.9283 9.67683L14.6589 9.73069M8.00011 7.55742V8.36938C8.00011 9.00496 8.44872 9.55218 9.07195 9.67683L9.34128 9.73069M16.4446 15.2402V14.1111C16.4446 13.4755 15.9959 12.9283 15.3727 12.8036L14.8873 12.7066M7.55566 15.2402V14.1111C7.55566 13.4755 8.00428 12.9283 8.62751 12.8036L9.11292 12.7066M14.8873 12.7066C15.0317 12.3221 15.1112 11.9022 15.1112 11.4625C15.1112 10.8282 14.9459 10.2354 14.6589 9.73069M14.8873 12.7066C14.4271 13.9313 13.3079 14.7958 12.0001 14.7958C10.6924 14.7958 9.57307 13.9313 9.11292 12.7066M9.11292 12.7066C8.96849 12.3221 8.889 11.9022 8.889 11.4625C8.889 10.8282 9.05431 10.2354 9.34128 9.73069"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.4961 4.31331L10.8837 2.36779C11.5422 2.13001 12.2631 2.13001 12.9216 2.36779L18.3868 4.34135C19.4967 4.74214 20.2685 5.75636 20.359 6.93292L20.586 9.88342C20.9189 14.212 18.6748 18.3316 14.8575 20.3993L13.3689 21.2056C12.4571 21.6995 11.3549 21.6875 10.454 21.1739L8.93337 20.3068C5.36929 18.2747 3.23232 14.4279 3.39 10.3283L3.51725 7.01967C3.56421 5.79876 4.34691 4.7283 5.4961 4.31331Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pishieldbugduostroke;
