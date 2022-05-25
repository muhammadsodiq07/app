import { useEffect, useState } from "react";
import "../../App.scss";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import UserObj from "../../Users"
import Pagnition from "../Categories/Pagnition/Pagnition";


function Boshsahifa() {
  const [newArr, setNewArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    setNewArr(UserObj);
  }, []);

  let indexOfLastPage = currentPage * postsPerPage
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = newArr.slice(indexOfFirstPage, indexOfLastPage);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <Hero newArr={newArr} setNewArr={setNewArr} />
      <Categories UserObj={UserObj} newArr={currentPosts} setNewArr={setNewArr} />
      <Pagnition
        postsPerPage={postsPerPage}
        totalPosts={newArr.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Boshsahifa;
