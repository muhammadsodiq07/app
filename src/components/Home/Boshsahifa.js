import { useEffect, useState } from "react";
import "../../App.scss";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import UserObj from "../../Users"

function Boshsahifa() {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(UserObj);
  }, []);

  return (
    <div className="App">
      <Hero newArr={newArr} setNewArr={setNewArr} />
      <Categories UserObj={UserObj} newArr={newArr} setNewArr={setNewArr} />
    </div>
  );
}

export default Boshsahifa;
