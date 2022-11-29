//отображение каждого отдельного элемента меню поиска
export default function SearchMenuItem({ link, text }) {
  return <a href={link}>{text} </a>;
}
