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
 * Piwindowdocktopleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwindowdocktopleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "window dock top left icon",
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
      d="M10.2 5.99996H10.223C10.343 5.99996 10.484 5.99996 10.61 6.00996C10.8086 6.0231 11.0027 6.07544 11.181 6.16396C11.463 6.30772 11.6922 6.53699 11.836 6.81896C11.9245 6.99728 11.9768 7.19133 11.99 7.38996C12 7.51596 12 7.65796 12 7.77696V11.223C12 11.343 12 11.484 11.99 11.61C11.978 11.755 11.947 11.963 11.836 12.181C11.6922 12.4629 11.463 12.6922 11.181 12.836C10.963 12.948 10.755 12.978 10.61 12.99C10.485 13 10.342 13 10.223 13H6.777C6.657 13 6.515 13 6.39 12.99C6.245 12.978 6.037 12.948 5.819 12.836C5.53703 12.6922 5.30776 12.4629 5.164 12.181C5.052 11.963 5.022 11.755 5.01 11.61C5 11.485 5 11.342 5 11.223V7.77696C5 7.65696 5 7.51596 5.01 7.38996C5.02283 7.1914 5.07483 6.99733 5.163 6.81896C5.30702 6.53684 5.53666 6.30755 5.819 6.16396C5.99729 6.07542 6.19136 6.02307 6.39 6.00996C6.51882 6.00156 6.64792 5.99822 6.777 5.99996H10.2Z"
      fill={color || "#000"}
      fillRule="evenodd"
      clipRule="evenodd"
    />{" "}
    <path
      d="M2 8.8V8.759C2 7.954 2 7.289 2.044 6.749C2.09 6.186 2.189 5.669 2.436 5.184C2.81949 4.43139 3.43139 3.81949 4.184 3.436C4.669 3.189 5.186 3.09 5.748 3.044C6.29 3 6.954 3 7.758 3H16.242C17.047 3 17.712 3 18.252 3.044C18.815 3.09 19.332 3.189 19.817 3.436C20.5696 3.81949 21.1815 4.43139 21.565 5.184C21.812 5.669 21.911 6.186 21.957 6.748C22 7.29 22 7.954 22 8.758V15.242C22 16.047 22 16.712 21.956 17.252C21.91 17.815 21.811 18.332 21.564 18.817C21.1805 19.5696 20.5686 20.1815 19.816 20.565C19.331 20.812 18.814 20.911 18.252 20.957C17.71 21 17.046 21 16.242 21H7.759C6.954 21 6.289 21 5.749 20.956C5.186 20.91 4.669 20.811 4.184 20.564C3.43139 20.1805 2.81949 19.5686 2.436 18.816C2.189 18.331 2.09 17.814 2.044 17.252C2 16.711 2 16.046 2 15.242V8.8Z"
      fill={color || "#000"}
      opacity={0.28}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default Piwindowdocktopleftduosolid;
