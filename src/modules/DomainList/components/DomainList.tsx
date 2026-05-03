import DomainItem from "./DomainItem/DomainItem";
import { type ChromeTab } from "@/shared/types/ChromeTab";
import { useDomainStore } from "../store/domains.store";
import { useEffect } from "react";

function DomainList() {
  const { domains, init } = useDomainStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="elements_cont">
      <ul className="elements">
        {domains.map((el: ChromeTab) => {
          return <DomainItem {...el} key={el.id} />;
        })}
        {/* {domains.length > 0 ? (
          <DomainItem {...domains[0]} key={domains[0].id} />
        ) : null} */}
      </ul>
    </div>
  );
}

export default DomainList;
