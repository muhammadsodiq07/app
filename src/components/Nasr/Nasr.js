import { useEffect, useState } from "react";
import "../../App.scss";
import NasrHero from "./NasrHero/NasrHero";
// import obj from "../../Object";
// import bookObj from "../../BooksObj"
import Books from "./Books/Books";
import Users from "../../Users"

function Nasr() {
  const [newBookArr, setBookNewArr] = useState([]);

  useEffect(() => {
    setBookNewArr(Users);
  }, []);
  return (
    <div className="App">
      <NasrHero newBookArr={newBookArr} setBookNewArr={setBookNewArr} />
      <Books Users={Users} newBookArr={newBookArr} setBookNewArr={setBookNewArr} />
    </div>
  )
}

export default Nasr
