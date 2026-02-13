import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import BackendSection1 from "./components/BackendSection1";
import BackendSection2 from "./components/BackendSection2";
import Brining from "./components/Brining";
import Footer from "./components/Footer";


export default function App() {
  const obj = useTranslation()
  console.log(obj);
  
  return (
    <>
      <Header />

      <BackendSection1 />
      <BackendSection2 />

      <Brining/>

      <Footer />
    </>
  )
}
