import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetails from "./pages/PersonDetails";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetails />} />

        {/* Nested Routes */}
        <Route path="paths" element={<Paths />} >
          <Route index element={<FullStack />}/>
          {/* <Route path="fullstack" element={<FullStack />}/> */}
          <Route path="aws" element={<Aws />}/>
        </Route>

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login />} />
        
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* Redirect islemleri icin Navigate componenti kullanilabilir */}
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
