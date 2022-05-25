import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Yozuvchilar from "./components/Categories/Yozuvchilar/Yozuvchilar";
import Forum from "./components/Forum/Forum";
import Header from "./components/Header/Header";
import Boshsahifa from "./components/Home/Boshsahifa";
import Maqolalar from "./components/Maqolalar/Maqolalar";
import BookPage from "./components/Nasr/Books/BookPage/BookPage";
import Nasr from "./components/Nasr/Nasr";
import Nazm from "./components/Nazm/Nazm";
import SignIn from "./components/SingIn/SingIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Boshsahifa />} />
        <Route path="nasr" element={<Nasr />} />
        <Route path="nazm" element={<Nazm />} />
        <Route path="Maqolalar" element={<Maqolalar />} />
        <Route path="Forum" element={<Forum />} />
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path="Yozuvchilar/:id" element={<Yozuvchilar />} />
        <Route path="BookPage/:id" element={<BookPage/>} />
      </Routes>
    </div>
  );
}

export default App;
