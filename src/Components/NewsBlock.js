//отображение новостного блока со списком новостей
import News from "./News";

export default function NewsBlock({ newsList, country }) {
  const date = `${new Date()}`;
  return (
    <div>
      <span style={{ fontSize: "20px" }}>Сейчас в СМИ {country}</span>
      <span style={{ fontSize: "10px" }}> {date}</span>
      <br />
      {newsList.map((i) => (
        <News image={i.image} text={i.text} key={i.id} />
      ))}
    </div>
  );
}
