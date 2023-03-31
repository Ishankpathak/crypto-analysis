import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import NoDataFound from "./Components/NoDataFound";
function App() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=INR"
      )
      .then((response) => setdata(response.data.coins))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  return (
    <div>
      {/* <Navbar search={search}/> */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Crypto Analysis
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="d-flex flex-row flex-wrap gap-4 mt-3 mx-auto align-items-center">
        {data
          .filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((val, id) => (
            <Card key={id} val={val} />
          ))}

        {data.filter((val) => {  //to show no data found...
          return val.name.toLowerCase().includes(search.toLowerCase());
        }).length === 0 && (
          <div className="text-center mt-3 mx-auto nodata"> <NoDataFound/> </div>
        )}
      </div>
    </div>
  );
}

export default App;
