import { useState } from "react";
import { Card } from "../components";

export function Module() {
  const [card, setCard] = useState([
    {
      id: 1,
      image: "/card/1.jpg",
      title: "CYBER SECURITY",
    },
    {
      id: 2,
      image: "/card/2.jpg",
      title: "CYBER SECURITY",
    },
    {
      id: 3,
      image: "/card/3.jpg",
      title: "CYBER SECURITY",
    },
    {
      id: 4,
      image: "/card/4.jpg",
      title: "CYBER SECURITY",
    },
    {
      id: 5,
      image: "/card/5.jpg",
      title: "CYBER SECURITY",
    },
  ]);

  return (
    <div className="module">
      <div className="module__cards">
        {card.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
