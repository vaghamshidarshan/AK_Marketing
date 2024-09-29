import React, { useEffect, useState } from "react";
import "./Achievement.css"; // Assuming you'll have the styles in this file
import Navbar from "../Navbar/Navbar";

const timelineData = [
  {
    title: "1881",
    description:
      "He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now in Greece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafa was still a boy. His mother Zubeyde, a devout and strong-willed woman, raised him and his sister.",
    imgSrc: "http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg",
  },
  {
    title: "1893",
    description:
      "First enrolled in a traditional religious school, he soon switched to a modern school. In 1893, he entered a military high school where his mathematics teacher gave him the second name Kemal (meaning perfection) in recognition of young Mustafa's superior achievement.",
    imgSrc:
      "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg",
  },
  {
    title: "1905",
    description:
      'In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestine society called "Homeland and Freedom" to fight against the Sultan\'s despotism.',
    imgSrc: "http://www.volpeypir.com/upload/3732.jpg",
  },
  {
    title: "1908",
    description:
      "In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal's career flourished as he won his heroism in the far corners of the Ottoman Empire, including Albania and Tripoli.",
    imgSrc: "http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg",
  },
  // Add the rest of your timeline data similarly...
];

const Achievement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline-item");
      const scrollPos = window.scrollY;

      items.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;

        if (
          scrollPos >= itemTop - itemHeight / 2 &&
          scrollPos < itemTop + itemHeight
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Navbar/>
    <br/>
    <div
      className="timeline-container"
      id="timeline-1"
      style={{
        backgroundImage: `url(${timelineData[activeIndex].imgSrc})`,
      }}
    >
      <div className="timeline-header">
        <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
        <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
      </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index === activeIndex ? "timeline-item--active" : ""
            }`}
            data-text="FATHER OF THE TURKS"
          >
            <div className="timeline__content">
              <img
                className="timeline__img"
                src={item.imgSrc}
                alt={item.title}
              />
              <h2 className="timeline__content-title">{item.title}</h2>
              <p className="timeline__content-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="demo-footer">
        <a
          href="http://www.turkishnews.com/Ataturk/life.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source/Kaynak
        </a>
      </div>
    </div>
    </div>
  );
};

export default Achievement;