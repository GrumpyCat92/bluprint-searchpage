//Отображение каждой отдельной новости
export default function News({ image, text, link }) {
  return (
    <div>
      <img src={image} />
      <a href={link}>{text}</a>
    </div>
  );
}
