import Element from "components/MainList/Element";
import { type chromeTab } from "types/chromeTab";

type Props = {
  elements: chromeTab[];
};

function MainList({ elements }: Props) {
  return (
    <div className="elements_cont">
      <ul className="elements">
        {elements.map((el: chromeTab) => {
          return <Element {...el} key={el.id} />;
        })}
      </ul>
    </div>
  );
}

export default MainList;
