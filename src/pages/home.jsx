import { useState } from "react";
import { Header, Button, Footer, Copyright, Icons } from "../components";

export function Home() {
  const [bannerInfo, setbannerInfo] = useState([
    { id: 1, title: "Coure to choose from", number: "80+" },
    { id: 2, title: "Years of experience", number: "40" },
    { id: 3, title: "Highest grade at MEC", number: "10/10" },
    { id: 4, title: "Graduated students", number: "50.000" },
  ]);

  return (
    <>
      <div className="banner">
        <Header />
        <div className="container">
          <h1 className="banner__title">UNIVILLE GRADUATION</h1>
          <div className="banner__info">
            <ul>
              {bannerInfo.map((item, index) => (
                <>
                  <li>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                  </li>
                  {index + 1 !== bannerInfo.length ? <div></div> : null}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__left">
              <img src="/about.jpg" alt="" />
            </div>
            <div className="about__rigth">
              <h2>ABOUT UNIVILLE</h2>
              <p>
                We are a reference University in the South region, with a wide
                structure, qualified professors and courses recognized by the
                MEC, we provide teaching, research and extension activities in
                the most diverse areas of knowledge.
              </p>
              <Button>receive information</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="container">
          <div className="courses__wrapper">
            <div className="courses__content">
              <h1>KNOW OURS COURSES</h1>
              <p>A universe of opportunities.</p>
              <h3>check out</h3>
            </div>
            <div className="courses__img">
              <img src="/courses/courses_1.jpg" alt="courses" />
              <img src="/courses/courses_2.jpg" alt="courses" />
              <img src="/courses/courses_3.jpg" alt="courses" />
            </div>
          </div>
        </div>
      </div>
      <div className="prize">
        <div className="container">
          <div className="prize__wrapper">
            <div className="prize__left">
              <h2>WHAT OUR STUDENTS SAY</h2>
              <div className="prize__person">
                <div className="person__img">
                  <img src="/about.jpg" alt="person" />
                  <div className="edit">
                    <Icons.edit />
                  </div>
                </div>
                <div className="person__name">
                  <h3>Ayesha Vassilieva</h3>
                  <p>Senior Designer</p>
                </div>
              </div>
            </div>
            <div className="prize__rigth">
              <img src="/prize/prize.jpg" alt="prize" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}
