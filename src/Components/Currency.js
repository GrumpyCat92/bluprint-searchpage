//отображение каждого отдельного курса валют
export default function Currency({ name, amount, diff }) {
  return (
    <span>
      {name} {amount} {diff}
    </span>
  );
}
