import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import "./module.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(data);

  return (
    <div id="main">
      {data.map((ele) => {
        return (
          <div id="sub" key={ele.id}>
            <img width={"100%"} height={"200px"} src={ele.thumbnail.small} />
            <div id="cont">
              <h3>{ele.title}</h3>
              <p>{ele.content}</p>
              <div id="m">
                <p>
                  {ele.author.name}
                  <span> - {ele.author.role}</span>
                </p>
                <p>{ele.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
