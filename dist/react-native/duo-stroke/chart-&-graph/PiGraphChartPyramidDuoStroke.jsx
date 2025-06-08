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
 * Pigraphchartpyramidduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartpyramidduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart pyramid icon",
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
      d="M14.1939 4.33488C13.984 3.93455 13.6685 3.59929 13.2817 3.36538C12.8949 3.13146 12.4514 3.00781 11.9994 3.00781C11.5474 3.00781 11.1039 3.13146 10.7171 3.36538C10.3303 3.59929 10.0149 3.93455 9.80491 4.33488L7.67991 8.26188C7.63867 8.33806 7.61794 8.42365 7.61974 8.51026C7.62154 8.59687 7.6458 8.68152 7.69017 8.75593C7.73453 8.83033 7.79746 8.89194 7.87279 8.9347C7.94813 8.97747 8.03328 8.99992 8.11991 8.99988H15.8819C15.9685 8.99992 16.0537 8.97747 16.129 8.9347C16.2044 8.89194 16.2673 8.83033 16.3116 8.75593C16.356 8.68152 16.3803 8.59687 16.3821 8.51026C16.3839 8.42365 16.3631 8.33806 16.3219 8.26188L14.1939 4.33488Z"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke={color || "#000"}
    />{" "}
    fill="none">
    <path
      d="M17.5049 11C17.595 11 17.6835 11.0243 17.761 11.0704C17.8384 11.1165 17.902 11.1827 17.9449 11.262L19.5689 14.262C19.6101 14.3382 19.6309 14.4238 19.6291 14.5104C19.6273 14.597 19.603 14.6816 19.5586 14.756C19.5143 14.8305 19.4514 14.8921 19.376 14.9348C19.3007 14.9776 19.2155 15 19.1289 15H4.8699C4.78328 15 4.69812 14.9776 4.62279 14.9348C4.54745 14.8921 4.48452 14.8305 4.44016 14.756C4.3958 14.6816 4.37153 14.597 4.36973 14.5104C4.36793 14.4238 4.38867 14.3382 4.4299 14.262L6.0549 11.262C6.09781 11.1827 6.16136 11.1165 6.23881 11.0704C6.31627 11.0243 6.40475 11 6.4949 11H17.5049ZM2.8059 17.262L2.3199 18.159C1.4249 19.812 2.5169 22.008 4.5149 22.008H19.4849C21.4829 22.008 22.5749 19.812 21.6799 18.159L21.1939 17.262C21.151 17.1827 21.0874 17.1165 21.01 17.0704C20.9325 17.0243 20.844 16.9999 20.7539 17H3.2459C3.15575 16.9999 3.06727 17.0243 2.98981 17.0704C2.91236 17.1165 2.84881 17.1827 2.8059 17.262Z"
      opacity={0.28}
      stroke={color || "#000"}
    />{" "}
    fill="none">
  </Svg>
);

export default Pigraphchartpyramidduostroke;
