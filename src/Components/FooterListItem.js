//отображение элемента списка
export default function FooterListItem({ link, text, subtext, image }) {
  return (
    <div>
      {image && <img src={image} alt=""></img>}
      {link && <a href={link}>{text}</a>}
      <span style={{ fontSize: "10px" }}> {subtext}</span>
    </div>
  );
}
