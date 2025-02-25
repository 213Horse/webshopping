import logo from "./logo.svg";
import "./App.css";
import CustomerHeader from "./Layout/components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import CustomerLayout from "./Layout/CustomerLayout";

function App() {
  return (
    <CustomerLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </CustomerLayout>
  );
}

export default App;
