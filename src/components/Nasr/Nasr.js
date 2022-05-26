import { useEffect, useState } from "react";
import "../../App.scss";
import NasrHero from "./NasrHero/NasrHero";
import Books from "./Books/Books";
import Users from "../../Users"
import PagnitionBook from "./PagnitionBook/PagnitionBook";


function Nasr() {
  const [newBookArr, setBookNewArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postPage, setPostPage] = useState(12);


  useEffect(() => {
    setBookNewArr(Users);
  }, []);
  

  let indexOfLastPage = currentPage * postPage
  let indexOfFirstPage = indexOfLastPage - postPage;
  let currentPosts = newBookArr.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <NasrHero newBookArr={newBookArr} setBookNewArr={setBookNewArr} />
      <Books Users={Users} newBookArr={currentPosts} setBookNewArr={setBookNewArr} />
      
      <PagnitionBook
      postsPerPage={postPage}
      totalPosts={newBookArr.length}
      paginate={paginate}
      />
    </div>
  )
}

export default Nasr
