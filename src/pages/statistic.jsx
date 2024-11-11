export function Statistic() {
  // Diagramma ma'lumotlari
  const barData = [
    { label: "class A", value: 30 },
    { label: "class B", value: 30 },
    { label: "class C", value: 50 },
    { label: "class D", value: 30 },
    { label: "class E", value: 70 },
  ];

  // Circular progress ma'lumotlari
  const progressData = [
    { label: "Class A", value: 32, register: 101 },
    { label: "Class B", value: 42, register: 101 },
    { label: "Class C", value: 67, register: 101 },
    { label: "Class D", value: 56, register: 101 },
  ];

  return (
    <div className="statistic-container">
      {/* Diagramma */}
      <div className="bar-chart">
        <h3>Student Statistic</h3>
        <p>September 2022</p>
        <div className="bars">
          {barData.map((item, index) => (
            <div key={index} className="bar">
              <div
                className="bar-inner"
                style={{ height: `${item.value}%` }}
                title={`${item.value}%`}
              ></div>
              <p className="bar-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indikatorlari */}
      <div className="progress-list">
        {progressData.map((item, index) => (
          <div key={index} className="progress-item">
            <div className="progress-info">
              <h4>{item.label}</h4>
              <p>{item.register} register</p>
            </div>
            <div className="progress-circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${item.value}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="progress-text">{`${item.value}%`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
