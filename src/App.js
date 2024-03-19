import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";

const App = () => {
  const [coursesData, setCoureseData] = useState(null);
  const [category, setCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [navClickedArr, setNavClickedArr] = useState([]);
  const ClickBtnArr = new Array(filterData.length).fill(false);
  ClickBtnArr[0] = true;

  function navbarHandeler(title, index){
    for(let i=0; i<filterData.length; i++){
      if(i === index){
        ClickBtnArr[i] = true;
      }
      else if(i === 0){
        ClickBtnArr[i] = false;
      }
    }
    setNavClickedArr(ClickBtnArr);
    setCategory(title);
  }

  async function fetchApiData(){
    try{
      setIsLoaded(true);
      let res = await fetch(apiUrl);
      let data = await res.json();
      setCoureseData(data.data);
      setIsLoaded(false);
    }
    catch{
      toast.warning("Network connection is Poor");
      toast.error("Something went wrong!");
    }
  }

  useEffect(() => {
    fetchApiData();
    setNavClickedArr(ClickBtnArr);
  },[]);

  return(
    <div className="wrapper">
      <ToastContainer/>
      <Heading />
      <Navbar filterData={filterData} navbarHandeler={navbarHandeler} navClickedArr={navClickedArr}/>
      <div className="container">
        {isLoaded ? (<Spinner/>) : (<Cards coursesData={coursesData} category={category}/>)}
      </div>
    </div>
  );
};

export default App;