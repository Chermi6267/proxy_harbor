import "../../styles/style.css";

type DomainItemTitleProps = {
  title: string;
};

function DomainItemTitle({ title }: DomainItemTitleProps) {
  return (
    <div className="domain_title_cont">
      <p className="domain_title">{title}</p>
    </div>
  );
}

export { DomainItemTitle };
