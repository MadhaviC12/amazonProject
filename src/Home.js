import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";
import "./img/tv.jpg";
import tv from "./img/tv.jpg";
import soundBar from "./img/soundBar.jpg";
import studytable from "./img/studytable.jpg";

function Home({ addToBasket }) {
  console.log("home component render");
  return (
    <div className="home">
      <img
        className="banner_image"
        src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Toys/ToysFiesta2024GWJan/PC_hero-toyfiesta_toys-and-games_Unrec_2x._CB585407284_.jpg"
        alt=""
      />
      {/* // product id,title,price,rating,images */}

      <div className="home__row">
        <Product
          id={12345}
          title="Becoming: The Sunday Times Number One Bestseller [Paperback] Obama, Michelle "
          price={405}
          rating={5}
          image="https://th.bing.com/th/id/OIP.tYDGEcopA6WnCsz6fJhr5wHaJi?w=208&h=268&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          addToBasket={addToBasket}
        />
        <Product
          id={45678}
          title="Lazer Sensation 2 Jars Juicer Mixer Grinder
          BY LAZER"
          price={2500}
          rating={4}
          image="https://th.bing.com/th/id/OIP.REuIfIZ0RJafhB_AQXKyUAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          addToBasket={addToBasket}
        />
      </div>

      <div className="home__row">
        <Product
          id={564212}
          title="Tarkan Stud Foldable Wooden Finish Mini Desk For Couch, Sofa Bed, Study Tray Table Stand For Writing (Beige)"
          price={999}
          rating={3}
          image={studytable}
          addToBasket={addToBasket}
        />
        <Product
          id={786534}
          title="Samsung 139.7 cm (55 Inch) 4K Ultra HD Smart LED TV UA55AU7700KLXL (Titan Gray) (2021 Model)
          BY SAMSUNG"
          price={120000}
          rating={4}
          image={tv}
          addToBasket={addToBasket}
        />
        <Product
          id={345267}
          title="JBL Cinema SB271, Dolby Digital Soundbar With Wireless Subwoofer For Extra Deep Bass, 2.1 Channel Home Theatre With Remote"
          price={10000}
          rating={4}
          image={soundBar}
          addToBasket={addToBasket}
        />
      </div>

      {/* // product */}
    </div>
  );
}

export default Home;
