//отображение блока в нижней части страницы
export default function FooterBlock({ header, children }) {
  return (
    <div>
      <h3>{header}</h3>
      {children}
    </div>
  );
}
