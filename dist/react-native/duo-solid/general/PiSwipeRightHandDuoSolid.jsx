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
 * Piswiperighthandduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswiperighthandduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swipe right hand icon",
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
      d="M16.2265 1.07921C14.6431 0.59117 12.9639 1.4791 12.4759 3.06244L10.3117 10.0838C9.44569 8.62377 7.75995 7.81911 6.05047 8.10321C4.99625 8.27837 4.3292 9.33202 4.62185 10.3598L6.75388 17.8478C7.57917 20.7465 10.3097 22.6072 13.1025 23.2164C15.8966 23.8259 19.1363 23.2623 21.0193 20.8248C21.997 19.5591 22.8054 17.83 22.9011 16.1244C22.9496 15.2594 22.8156 14.3679 22.3907 13.5528C21.9609 12.7286 21.2649 12.0434 20.2933 11.557L16.6919 9.75404L18.2097 4.82978C18.6977 3.24644 17.8098 1.56725 16.2265 1.07921Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M6.50985 1.57615C6.74407 1.07599 7.33939 0.860399 7.83956 1.09461C8.70724 1.50092 9.51737 2.01687 10.2497 2.62952C10.3741 2.73352 10.4755 2.85706 10.5521 2.99279C10.6419 3.11735 10.7042 3.26451 10.7289 3.42674C10.7499 3.56533 10.7415 3.7016 10.7081 3.82914C10.6874 3.97114 10.6433 4.11126 10.575 4.24362C10.137 5.09208 9.58992 5.88151 8.94729 6.59215C8.57686 7.00178 7.9445 7.03356 7.53486 6.66313C7.12523 6.2927 7.09345 5.66033 7.46388 5.2507C7.5031 5.20733 7.54188 5.1636 7.58022 5.11953C5.74479 5.72969 4.0776 6.70985 2.66692 7.97244C2.2554 8.34077 1.6232 8.30574 1.25488 7.89422C0.886548 7.48269 0.921569 6.8505 1.3331 6.48217C3.0492 4.94622 5.09997 3.77455 7.36309 3.09033C7.24074 3.0261 7.11682 2.96459 6.9914 2.90586C6.49124 2.67165 6.27564 2.07632 6.50985 1.57615Z"
      fill={color || "#000"}
      opacity={0.28}
    />
  </Svg>
);

export default Piswiperighthandduosolid;
