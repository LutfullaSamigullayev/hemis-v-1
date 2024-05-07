import { useState } from "react";

export function CabinetHome() {
  // const staffRoom = [
  //   {
  //     id: 1,
  //     title: "Adepoju Ademola ",
  //     content: "Hello, Mr John i am yet to get your class b res...",
  //     img: "/cabinet/staffRoom.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Adepoju Ademola ",
  //     content: "Hello, Mr John i am yet to get your class b res...",
  //     img: "/cabinet/staffRoom.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Adepoju Ademola ",
  //     content: "Hello, Mr John i am yet to get your class b res...",
  //     img: "/cabinet/staffRoom.png",
  //   },
  // ];
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Adepoju Ademola ",
      content: "Hello, Mr John i am yet to get your class b res...",
      img: "/cabinet/staffRoom.png",
    },
    {
      id: 2,
      title: "Adepoju Ademola ",
      content: "Hello, Mr John i am yet to get your class b res...",
      img: "/cabinet/staffRoom.png",
    },
    {
      id: 3,
      title: "Adepoju Ademola ",
      content: "Hello, Mr John i am yet to get your class b res...",
      img: "/cabinet/staffRoom.png",
    },
  ]);

  return (
    <div className="cabinetHome">
      <div className="about">
        <div className="about__content">
          <h2>Welcome back, Abdulla</h2>
          <p>
            You have 27 new student added to your domain. Please reach out to
            the Head Teacher if you want them excluded from your domain.
          </p>
        </div>
        <div className="about__img">
          <img src="/cabinet/cabinet-about.png" alt="about" />
        </div>
      </div>
      <div className="statics">
        <div className="statics__room">
          <img src="/cabinet/diagramma.png" alt="diagramma" />
        </div>
        <div className="statics__room">
          <h3 className="title">Staff Room</h3>
          <ul>
            {product.map((item) => (
              <li>
                <div className="border"></div>
                <div className="item">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="statics__room">
          <h3 className="title">Staff Room</h3>
          <ul>
            {product.map((item) => (
              <li>
                <div className="border"></div>
                <div className="item">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    {/* <p>{item.content}</p> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
