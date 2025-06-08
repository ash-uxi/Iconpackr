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
 * Piswipelefthandduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswipelefthandduosolid = ({
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
      d="M17.2305 1.57616C17.4647 2.07632 17.2491 2.67165 16.7489 2.90586C16.6235 2.96459 16.4996 3.0261 16.3772 3.09033C18.6403 3.77456 20.6911 4.94622 22.4072 6.48217C22.8187 6.8505 22.8538 7.4827 22.4854 7.89422C22.1171 8.30575 21.4849 8.34077 21.0734 7.97244C19.6627 6.70985 17.9955 5.72969 16.1601 5.11954C16.1984 5.16361 16.2372 5.20733 16.2764 5.2507C16.6469 5.66034 16.6151 6.2927 16.2055 6.66313C15.7958 7.03357 15.1635 7.00178 14.793 6.59215C14.1504 5.88152 13.6033 5.09209 13.1653 4.24362C13.097 4.11127 13.0529 3.97115 13.0322 3.82915C12.9989 3.70161 12.9904 3.56534 13.0115 3.42674C13.0361 3.26452 13.0984 3.11735 13.1882 2.9928C13.2648 2.85706 13.3663 2.73352 13.4906 2.62952C14.2229 2.01687 15.0331 1.50092 15.9008 1.09461C16.4009 0.8604 16.9963 1.076 17.2305 1.57616Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M7.19709 1.71039C8.79753 1.28156 10.4425 2.23133 10.8713 3.83172L12.205 8.80901L16.2137 8.42037C17.2951 8.31557 18.249 8.52561 19.0513 8.995C19.8447 9.45923 20.4323 10.1429 20.8513 10.9013C21.6774 12.3965 21.9124 14.2906 21.7576 15.8825C21.4594 18.9482 19.0157 21.1485 16.3254 22.1184C13.6364 23.0879 10.3344 22.9644 8.0939 20.9487L2.30588 15.7415C1.51142 15.0268 1.51588 13.7797 2.31544 13.0707C3.61199 11.9209 5.46754 11.7057 6.9774 12.4816L5.07577 5.38463C4.64695 3.78423 5.59669 2.13922 7.19709 1.71039Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piswipelefthandduosolid;
