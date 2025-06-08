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
 * Pinftarrowrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinftarrowrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "nft arrow right icon",
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
      d="M10.54 21c-.668 0-1.164-.003-1.572-.035a3.8 3.8 0 0 1-.907-.167 4 4 0 0 1-1.466-.856c-.477-.437-.812-1.036-1.482-2.234l-1.454-2.6c-.635-1.134-.952-1.702-1.076-2.302a4 4 0 0 1 0-1.612c.124-.6.441-1.168 1.076-2.302l1.454-2.6c.67-1.198 1.005-1.797 1.482-2.233a4 4 0 0 1 1.466-.857C8.676 3 9.366 3 10.746 3h2.486c1.38 0 2.07 0 2.685.202.545.179 1.044.47 1.466.857.477.436.812 1.035 1.482 2.233l1.49 2.663c.546.978.853 1.526 1.004 2.045q.032.107.054.213c.111.522.116 1.06.014 1.585-.072.369-.216.726-.461 1.216"
      opacity={0.28}
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M16.79 15.83a1 1 0 0 1 1.4-.2 13.9 13.9 0 0 1 2.451 2.362 1.6 1.6 0 0 1 0 2.02 13.9 13.9 0 0 1-2.451 2.36 1 1 0 0 1-1.2-1.6q.482-.361.926-.77H14a1 1 0 1 1 0-2h3.917q-.443-.41-.926-.772a1 1 0 0 1-.2-1.4"
      clipRule="evenodd"
      fill="none"
    />
    <path
      d="M19.791 10h-.818c-.875 0-1.382 0-1.82.038-4.86.422-8.72 4.25-9.147 9.09-.015.17-.024.35-.03.558q.192.095.396.162c.333.11.719.142 1.6.15.003-.305.01-.51.027-.695.34-3.862 3.425-6.933 7.328-7.273.34-.03.754-.03 1.71-.03h1.462a3 3 0 0 0-.064-.579c-.071-.334-.228-.666-.644-1.421"
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M6.96 9c0-1.111.906-2 2.008-2s2.007.889 2.007 2-.905 2-2.007 2A2.003 2.003 0 0 1 6.96 9"
      clipRule="evenodd"
      fill="none"
    />
  </Svg>
);

export default Pinftarrowrightduostroke;
