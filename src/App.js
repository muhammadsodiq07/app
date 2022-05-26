import React, { useState } from "react";
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
import Info from "./components/Info/Info"
import EditProfile from "./components/EditProfile/EditProfile";
import SaveBooks from "./components/SaveBooks/SaveBooks";

function App() {
  
  const [save,setsave] = useState([])

  const bookHandler = (book) => {
    if (save.indexOf(book) !== -1) return
    setsave([...save, book])
    console.log(save);
  }
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [country, setcountry] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Boshsahifa />} />
        <Route path="nasr" element={<Nasr />} />
        <Route path="nazm" element={<Nazm />} />
        <Route path="Maqolalar" element={<Maqolalar />} />
        <Route path="Forum" element={<Forum 
        setname={setname}
        setlastname={setlastname}
        setemail={setemail}
        setnumber={setnumber}
        setpassword={setpassword}
        setcountry={setcountry}
        />} />
        <Route path="Info" element={<Info 
        name={name}
        lastname={lastname}
        email={email}
        number={number}
        password={password}
        country={country}
        />} />
        <Route path="EditProfile" element={<EditProfile 
         name={name}
         setname={setname}
         lastname={lastname}
         setlastname={setlastname}
         email={email}
         setemail={setemail}
         number={number}
         setnumber={setnumber}
         password={password}
         setpassword={setpassword}
         country={country}
         setcountry={setcountry}
        />}/>
        <Route path="SaveBooks" element={<SaveBooks
        save={save}
        setSaved={setsave}
        />}/>
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path="Yozuvchilar/:id" element={<Yozuvchilar />} />
        <Route path="BookPage/:id" element={<BookPage
        bookHandler={bookHandler}
        />} />
      </Routes>
     
    </div>
  );
}

export default App;
