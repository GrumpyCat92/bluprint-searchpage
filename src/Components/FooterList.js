//отобращение списка элементов в футере страницы
import FooterListItem from "./FooterListItem";

export default function FooterList({ items }) {
  return (
    <div>
      {items.map((i) => (
        <FooterListItem
          key={i.id}
          link={i.link}
          image={i.image}
          text={i.text}
          subtext={i.subtext}
        />
      ))}
    </div>
  );
}
