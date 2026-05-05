import "../../styles/style.css";

type BrowserTabTitleProps = {
  title: string;
};

function BrowserTabTitle({ title }: BrowserTabTitleProps) {
  return (
    <div className="domain_title_cont">
      <p className="domain_title">{title}</p>
    </div>
  );
}

export { BrowserTabTitle };
