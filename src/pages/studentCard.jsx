import { useState } from "react";

export function StudentCard() {
  // const [idCard, setIdCard] = useState([
  //   {
  //     id: 1,
  //     lastname: Mohira,
  //     dob: "02/05/1996",
  //     cardnumber: 234242323,
  //     datastart: "02/05/1996",
  //     dataend: "02/05/1996",
  //   },
  // ]);
  return (
    <div className="studentCard">
      <div className="idCard">
        <div className="title">
          <img src="/cabinet/idCard.jpg" alt="idCard" />
          <h1>STUDENT ID CARD</h1>
        </div>
        <div className="content">
          <h2>Mohira</h2>
          <div className="content__date">
            <ul>
              <li>D O B</li>
              <li>02/05/1996</li>
            </ul>
            <div></div>
            <ul>
              <li>Card No</li>
              <li>234242323</li>
            </ul>
            <div></div>
            <ul>
              <li>Date of issue</li>
              <li>02/05/1996</li>
            </ul>
            <div></div>
            <ul>
              <li>Expire Date</li>
              <li>02/05/1996</li>
            </ul>
          </div>
          <div className="content__code">
            <div className="shtrixCode">
              <img src="/cabinet/shtrixCode.png" alt="ShtrixCode" />
              <p>a245454546344363463</p>
            </div>
            <div className="signature">
              <p>Signature</p>
              <span>sakib </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
