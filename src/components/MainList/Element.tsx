import "./style.css";

import { type chromeTab } from "types/chromeTab";
import TickButton from "components/Buttons/TickButton";

function Element(props: Omit<chromeTab, "id">) {
  const { title, domain } = props;

  return (
    <li className={"element"}>
      <div className="title">
        <span className="title__scroll">{domain || title}</span>
      </div>

      <TickButton onClick={() => {}} isLoading={false} isSuccess={false}>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.25 8.2041L27.1914 8.27441L12.793 25.4346C12.003 26.3757 10.5632 26.5006 9.62207 25.7109L2.83887 20.0195L2.75 19.9443V16.6826L3.16113 17.0273L11.0371 23.6357L26.8086 4.83887L27.25 4.31348V8.2041Z"
            fill="#65CC65"
            stroke="#65CC65"
            stroke-width="0.5"
          />
        </svg>
      </TickButton>

      <TickButton onClick={() => {}} isLoading={false} isSuccess={false}>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 7.37012L17.1025 14.5L26 21.6299V25L14.999 16.1846L4 24.999V21.6289L12.8965 14.5L4 7.37109V4.00098L14.999 12.8154L26 4V7.37012Z"
            fill="#CC6666"
          />
        </svg>
      </TickButton>
    </li>
  );
}

export default Element;
