import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [currentPage,setCurrentPage]=useState(1)
  const [dataPerPage]=useState(8)
  let [comment, setComment] = useState([]);
  const fetchBooks = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/albums");
      console.log(res.data);
      setComment(res.data)

    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
let lastIndex=currentPage*dataPerPage;  /// 1*10
let firstIndex=lastIndex-dataPerPage; /// 10-10;
let currentData=comment.slice(firstIndex,lastIndex);
let totalPage=Math.ceil(comment.length/dataPerPage);  /// 100/10
const handlePrevious=()=>{
  if(currentPage>1){
    setCurrentPage((prev)=>
      prev-1
    )
  }

}
const handleNext=()=>{
  if(currentPage<totalPage){
    setCurrentPage((prev)=>
      prev+1
    )
  }
}
  return (
    <div className="App">
      <h1>Comments</h1>
      <ul className="container">
      {currentData.map((el)=>{
        return(<div className="coffeeCard">
          <h3>Title : {el.title}</h3>
        </div>)
    })}
      </ul>   
      <div className="pagination-Btn">
      <button onClick={handlePrevious} disabled={currentPage===1}>Prev</button>  
      <p>{currentPage} of {totalPage}</p>
      <button onClick={handleNext} disabled={currentPage===totalPage}>Next</button>
      </div>
       
    </div>
  );
}
