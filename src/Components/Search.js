//отображение части, связанной с поиском
import SearchInput from "./SearchInput";
import SearchMenu from "./SearchMenu";

export default function Search() {
  const items = [
    {
      text: "Видео",
      link: "/",
    },
    {
      text: "Картинки",
      link: "/",
    },
    {
      text: "Новости",
      link: "/",
    },
    {
      text: "еще",
      link: "/",
    },
  ];
  return (
    <div>
      <SearchMenu items={items} />
      <SearchInput text={"фаза луны сегодня"} />
    </div>
  );
}
