//отображение меню поиска
import SearchMenuItem from "./SearchMenuItem";

export default function SearchMenu({ items }) {
  return (
    <div>
      {items.map((i) => (
        <SearchMenuItem text={i.text} link={i.link} />
      ))}
    </div>
  );
}
