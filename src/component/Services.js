import React, { useState } from "react";
import "./Services.css"; // Assuming you have styles in App.css
import Navbar from "../Navbar/Navbar";

const destinations = [
  {
     title: "London",
     location: "Vereinigtes Königreich",
    // description: "London, die Hauptstadt Englands und Großbritanniens...",
    imgSrc: "https://images.unsplash.com/photo-1561196995-60deda157766?w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    searchLink: "https://www.google.com/search?q=London",
  },
  {
     title: "Rom",
     location: "Italien",
    // description: "Rom, die Hauptstadt Italiens...",
    imgSrc: "https://images.unsplash.com/photo-1548585742-1df49e753a83?w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    searchLink: "https://www.google.com/search?q=Rom",
  },
  {
     title: "Amsterdam",
     location: "Niederlande",
    // description: "Amsterdam ist die Hauptstadt der Niederlande...",
    imgSrc: "https://images.unsplash.com/photo-1583295125721-766a0088cd3f?w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    searchLink: "https://www.google.com/search?q=Amsterdam",
  },
  {
     title: "Athen",
     location: "Griechenland",
    // description: "Athen ist die Hauptstadt Griechenlands...",
    imgSrc: "https://images.unsplash.com/photo-1635672097594-a0cbb7aa3a9e?w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    searchLink: "https://www.google.com/search?q=Athen",
  },
  {
    title: "Brügge",
     location: "Belgien",
    // description: "Brügge ist die Hauptstadt von Westflandern...",
    imgSrc: "https://images.unsplash.com/photo-1572895854902-117546c75fb3?w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    searchLink: "https://www.google.com/search?q=Brügge",
  },
  // Add more destinations similarly
];

const App = () => {
  const [activeLocation, setActiveLocation] = useState("alle");
  const [searchText, setSearchText] = useState("");

  const handleFilter = (location) => {
    setActiveLocation(location.toLowerCase());
  };

  const filteredItems = destinations.filter((item) => {
    const matchesLocation = activeLocation === "alle" || item.location.toLowerCase() === activeLocation;
    const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="mainbodyproducts">
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <h1>Finde deine perfekte Städtereise!</h1>

      <div className="filter">
        {/* <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Stadt suchen"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search__button">
            <i className="fa fa-search"></i>
          </button>
        </div> */}

        <button
          className={`button ${activeLocation === "alle" ? "--active" : ""}`}
          onClick={() => handleFilter("alle")}
        >
          Alle
        </button>
        <button
          className={`button ${activeLocation === "belgien" ? "--active" : ""}`}
          onClick={() => handleFilter("belgien")}
        >
          Belgien
        </button>
        <button
          className={`button ${activeLocation === "italien" ? "--active" : ""}`}
          onClick={() => handleFilter("italien")}
        >
          Italien
        </button>
        <button
          className={`button ${activeLocation === "griechenland" ? "--active" : ""}`}
          onClick={() => handleFilter("griechenland")}
        >
          Griechenland
        </button>
        <button
          className={`button ${activeLocation === "niederlande" ? "--active" : ""}`}
          onClick={() => handleFilter("niederlande")}
        >
          Niederlande
        </button>
        <button
          className={`button ${activeLocation === "vereinigtes königreich" ? "--active" : ""}`}
          onClick={() => handleFilter("vereinigtes königreich")}
        >
          Vereinigtes Königreich
        </button>
      </div>

      <section className="grid">
        {filteredItems.map((item) => (
          <a
            key={item.title}
            className="card"
            href={item.searchLink}
            target="_blank"
            rel="nofollow noopener"
          >
            <picture className="card__picture">
              <img className="card__image" src={item.imgSrc} alt={item.title} />
            </picture>
            <span className="card__more"></span>
            <div className="card__content">
              <p className="card__location">{item.location}</p>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__description">{item.description}</p>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default App;
