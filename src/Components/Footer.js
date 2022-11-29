//отображение нижней части страницы
import FooterBlock from "./FooterBlock";
import FooterList from "./FooterList";

export default function Footer() {
  const visited = [
    {
      link: "/",
      text: "Недвижимость - о сталинках",
      id: 1,
    },
    {
      link: "/",
      text: "Маркет - люстры и светильники",
      id: 2,
    },
  ];
  const programm = [
    {
      id: 1,
      link: "/",
      text: "02:00 Программа 1",
      subtext: "CNN",
    },
    {
      id: 2,
      link: "/",
      text: "02:10 Программа 2",
      subtext: "TNT",
    },
    {
      id: 3,
      link: "/",
      text: "02:11 Программа 3",
      subtext: "FOX",
    },
    {
      id: 4,
      link: "/",
      text: "02:20 Программа 4",
      subtext: "Discovery",
    },
  ];
  const online = [
    {
      id: 1,
      image: "",
      link: "/",
      text: "Эфир 1",
      subtext: "Успех",
    },
    {
      id: 2,
      image: "",
      link: "/",
      text: "Эфир 2",
      subtext: "Cовершенно секретно",
    },
  ];
  return (
    <div>
      <FooterBlock header={"Погода"}>
        Утром + 7 <br />
        Днем +5
      </FooterBlock>
      <FooterBlock header={"Посещаемое"}>
        <FooterList items={visited} />
      </FooterBlock>
      <FooterBlock header={"Карта Германии"}>
        <a href="/">Расписание</a>
      </FooterBlock>
      <FooterBlock header={"Телепрограмма"}>
        <FooterList items={programm} />
      </FooterBlock>
      <FooterBlock header={"Эфир"}>
        <FooterList items={online} />
      </FooterBlock>
    </div>
  );
}
