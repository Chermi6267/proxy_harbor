import { type chromeTab } from "types/chromeTab";
import { useEffect, useState } from "react";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";
import { getDomain } from "utils/getDomain";
import MainList from "components/MainList/MainList";
import "./style.css";

const devData: chromeTab[] = [
  {
    id: 0,
    domain: getDomain("http://localhost:3000"),
    title: "Dev",
  },
  {
    id: 1,
    domain: getDomain("https://www.google.com/search?q=typescript+tutorial"),
    title: "typescript tutorial - Google Search",
  },
  {
    id: 2,
    domain: getDomain("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    title: "Never Gonna Give You Up - YouTube",
  },
  {
    id: 3,
    domain: getDomain("https://github.com/microsoft/TypeScript/issues/58243"),
    title:
      "Bug: Type inference issue with generics · Issue #58243 · microsoft/TypeScript",
  },
  {
    id: 4,
    domain: getDomain(
      "https://stackoverflow.com/questions/762011/whats-the-difference-between-let-and-var"
    ),
    title:
      "javascript - What's the difference between let and var? - Stack Overflow",
  },
  {
    id: 5,
    domain: getDomain(
      "https://www.reddit.com/r/programming/comments/abc123/interesting_discussion_about_ai/"
    ),
    title: "Interesting discussion about AI future : programming",
  },
  {
    id: 6,
    domain: getDomain(
      "https://twitter.com/typescript/status/1234567890123456789"
    ),
    title: "TypeScript on Twitter: 'New features in v5.0...'",
  },
  {
    id: 7,
    domain: getDomain(
      "https://www.linkedin.com/jobs/view/software-engineer-at-google-1234567890"
    ),
    title: "Software Engineer at Google | LinkedIn",
  },
  {
    id: 8,
    domain: getDomain(
      "https://www.amazon.com/gp/product/B08N5WRWNW/ref=ppx_yo_dt_b_search_asin_title"
    ),
    title: "Amazon.com: Mechanical Keyboard - 65% Layout",
  },
];

function Main() {
  const [tabs, setTabs] = useState<chromeTab[]>(devData);
  const [menuState, setMenuState] = useState<string>("tabs");

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({}, (tabs) => {
        let validTabs = tabs.map((t) => {
          return {
            id: t.id || 404,
            domain: t.url === undefined ? "fuck" : getDomain(t.url),
            title: t.title === undefined ? "fuck" : t.title,
          };
        });

        setTabs(validTabs);
      });
    } else {
      console.warn("chrome API недоступен (запусти как расширение)");
    }
  }, []);

  return (
    <main className="main">
      <NavigationMenu menuState={menuState} setMenuState={setMenuState} />
      <MainList elements={tabs} />
    </main>
  );
}

export default Main;
