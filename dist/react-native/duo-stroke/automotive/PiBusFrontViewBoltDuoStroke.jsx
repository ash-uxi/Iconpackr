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
 * Pibusfrontviewboltduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibusfrontviewboltduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bus front view bolt icon",
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
    <path d="M12 8.5 9.846 12h4.308L12 15.5" fill="none" />
    <path
      d="M17 19h1a1 1 0 0 0-1-1zM7 19v-1a1 1 0 0 0-1 1zM17.77 3.413l.441-.897zm1.817 1.818.897-.442zM6.231 3.413l-.442-.897zM4.413 5.23l-.897-.442zM4 10a1 1 0 0 0 0-2zm16-2a1 1 0 1 0 0 2zm-9.667-4h3.334V2h-3.334zM19 9.333V20.5h2V9.333zM5 20.5V9.333H3V20.5zM17 18H7v2h10zM6 19v1.5h2V19zm12 1.5V19h-2v1.5zm.5.5a.5.5 0 0 1-.5-.5h-2a2.5 2.5 0 0 0 2.5 2.5zm-13 2A2.5 2.5 0 0 0 8 20.5H6a.5.5 0 0 1-.5.5zM3 20.5A2.5 2.5 0 0 0 5.5 23v-2a.5.5 0 0 1-.5-.5zm16 0a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5zM13.667 4c1.104 0 1.874 0 2.475.048.588.047.928.135 1.185.261l.884-1.793c-.579-.286-1.202-.405-1.911-.461C15.602 1.999 14.74 2 13.667 2zM21 9.333c0-1.072 0-1.935-.055-2.633-.056-.709-.175-1.332-.46-1.911l-1.794.884c.127.257.214.597.26 1.185.048.6.049 1.37.049 2.475zM10.333 2C9.261 2 8.398 2 7.7 2.055c-.709.056-1.332.175-1.911.46l.884 1.794c.257-.126.597-.214 1.185-.26C8.458 4 9.228 4 10.333 4zM5 9.333c0-1.104 0-1.874.048-2.475.047-.588.135-.928.261-1.185L3.516 4.79C3.23 5.368 3.11 5.99 3.055 6.7 2.999 7.398 3 8.26 3 9.333zM1 8v.5h2V8zm1.5 2H4V8H2.5zM21 8v.5h2V8zm.5 0H20v2h1.5zm-.5.5a.5.5 0 0 1 .5-.5v2A1.5 1.5 0 0 0 23 8.5zm-20 0A1.5 1.5 0 0 0 2.5 10V8a.5.5 0 0 1 .5.5zM3 8a2 2 0 0 1 1.674-1.974l-.321-1.974A4 4 0 0 0 1 8zm2.789-5.484a5 5 0 0 0-2.147 2.033l1.743.98a3 3 0 0 1 1.288-1.22zM3.642 4.549a5 5 0 0 0-.126.24l1.793.884q.036-.073.076-.144zM23 8a4 4 0 0 0-3.353-3.948l-.321 1.974A2 2 0 0 1 21 8zm-5.673-3.69a3 3 0 0 1 1.288 1.22l1.743-.98a5 5 0 0 0-2.147-2.034zm1.288 1.22q.04.07.076.143l1.793-.884a5 5 0 0 0-.126-.24z"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibusfrontviewboltduostroke;
