//отображение строки поиска
export default function SearchInput({ text }) {
  return (
    <div>
      <input></input>
      <button>Найти</button>
      <div>
        Найдется все, например, <a href="/">{text}</a>
      </div>
    </div>
  );
}
