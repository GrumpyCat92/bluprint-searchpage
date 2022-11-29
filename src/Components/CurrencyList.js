// отображение списка курса валют
import Currency from "./Currency";

export default function CurrencyList({ currencyList }) {
  return (
    <div>
      {currencyList.map((i) => (
        <Currency name={i.name} amount={i.amount} diff={i.diff} />
      ))}
    </div>
  );
}
