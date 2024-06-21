import React, { useEffect } from "react";
import { data } from "../Api/ApiData";

export default function Home() {
  useEffect(() => {data('todos')}, []);

  const handleOnClick = () => {
    data("users");
  };

  return (
    <>
      <div className="container my-5">
        <button className="btn btn-primary" onClick={handleOnClick}>
          Fetch Data
        </button>
      </div>
    </>
  );
}
