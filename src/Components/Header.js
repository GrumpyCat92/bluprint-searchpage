// отображение верхней части поисковой страницы
import NewsBlock from "./NewsBlock";
import CurrencyList from "./CurrencyList";

export default function Header() {
  const news = [
    { image: "", text: "новость 1", link: "/", id: 1 },
    { image: "", text: "новость 2", link: "/", id: 2 },
  ];

  const currencies = [
    {
      name: "USD MOEX",
      amount: 60,
      diff: "+0.09",
    },
    {
      name: "EUR MOEX",
      amount: 60,
      diff: "+0.11",
    },
  ];

  return (
    <>
      <NewsBlock country="В Германии" newsList={news} />
      <CurrencyList currencyList={currencies} />
    </>
  );
}
