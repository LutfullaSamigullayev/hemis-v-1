import {
  Home,
  Cabinet,
  CabinetHome,
  Student,
  Module,
  Timetable,
  Statistic,
  StudentCard,
  Events,
  SignUp,
  Login,
} from "./pages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cabinet" element={<Cabinet />}>
        <Route path="/cabinet/home" element={<CabinetHome />} />
        <Route path="/cabinet/student" element={<Student />} />
        <Route path="/cabinet/module" element={<Module />} />
        <Route path="/cabinet/timetable" element={<Timetable />} />
        <Route path="/cabinet/statistic" element={<Statistic />} />
        <Route path="/cabinet/student/card" element={<StudentCard />} />
        <Route path="/cabinet/events" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
