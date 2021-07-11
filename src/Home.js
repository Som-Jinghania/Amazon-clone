import { RssFeed } from "@material-ui/icons";
import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M32/GW_16thJune/D24426934_IN_WLME_SamsungGalaxy_M32_DesktopTallHero_1500x600._CB666632026_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1231"
            title="Samsung Galaxy M51 (Celestial Black, 6GB RAM, 128GB Storage)"
            price={30000}
            image="https://m.media-amazon.com/images/I/41f8eOJLsPL.__AC_SY200_.jpg"
            rating={2}
          />
          <Product
            id="1232"
            title="Woodland Men's Sneakers"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/61deZ%2BoW3yL._UL1258_.jpg"
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="1234"
            title="Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/619tYz4qWiL._SL1500_.jpg"
            rating={2}
          />
          <Product
            id="1235"
            title="Sony Wireless Headphones WH-CH510: Wireless Bluetooth On-Ear Headset with Mic for phone-call, Blue"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/811u6QEwQxL._SL1500_.jpg"
            rating={2}
          />
          <Product
            id="1236"
            title="BULLMER Mens Round Neck Cotton Tshirt"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/71fNC29PcqL._UL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home_row">
          {/* <Product
            id="1237"
            title="cool watch"
            price={30000}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Kx6rgmlRS._UL1500_.jpg"
            }
            rating={2}
          />
          <Product
            id="1238"
            title="Gaming Backpack"
            price={30000}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81BvxQbA0TL._SL1500_.jpg"
            }
            rating={2}
          /> */}
          <Product
            id="1239"
            title="HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports, AMD FreeSync(3KS61AA)"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
