"use client";

import React from "react";
import "./travelrecspage.css";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically load map
const TravelMap = dynamic(() => import("./travelmap"), { ssr: false });

const travelCategories = [
  {
    title: "Nature Escapes",
    items: [
      {
        place: "Banff, Canada",
        detail: "Lakes, mountains, and moose",
        price: "Avg. $200/night",
        image: "/images/banff.jpg",
      },
      {
        place: "Reykjavík, Iceland",
        detail: "Northern lights and hot springs",
        price: "Avg. $150/night",
        image: "/images/iceland.jpg",
      },
      {
        place: "Queenstown, New Zealand",
        detail: "Adventure capital with lakes and peaks",
        price: "Avg. $120/night",
        image: "/images/newzealand.jpg",
      },
      {
        place: "Swiss Alps, Switzerland",
        detail: "Charming villages and scenic trails",
        price: "Avg. $170/night",
        image: "/images/swissalps.jpeg",
      },
      {
        place: "Yosemite, USA",
        detail: "Waterfalls, cliffs, and giant sequoias",
        price: "Avg. $140/night",
        image: "/images/yosemite.jpg",
      },
    ],
  },
  {
    title: "Culture & History",
    items: [
      {
        place: "Kyoto, Japan",
        detail: "Temples, gardens, and tea houses",
        price: "Avg. $100/night",
        image: "/images/kyoto.jpg",
      },
      {
        place: "Athens, Greece",
        detail: "Ruins, museums, and markets",
        price: "Avg. $90/night",
        image: "/images/athens.jpg",
      },
      {
        place: "Rome, Italy",
        detail: "Colosseum, history, and pasta",
        price: "Avg. $130/night",
        image: "/images/rome.jpg",
      },
      {
        place: "Istanbul, Turkey",
        detail: "Mosques, bazaars, and Turkish coffee",
        price: "Avg. $80/night",
        image: "/images/istanbul.jpg",
      },
      {
        place: "Cairo, Egypt",
        detail: "Pyramids, museums, and Nile cruises",
        price: "Avg. $70/night",
        image: "/images/cairo.jpg",
      },
    ],
  },
  {
    title: "Budget Friendly",
    items: [
      {
        place: "Lisbon, Portugal",
        detail: "Beaches, city life, and good eats",
        price: "Avg. $45/night",
        image: "/images/lisbon.jpg",
      },
      {
        place: "Hanoi, Vietnam",
        detail: "Street food, temples, and lakes",
        price: "Avg. $25/night",
        image: "/images/hanoi.jpg",
      },
      {
        place: "Kraków, Poland",
        detail: "Castles, old town, and pierogi",
        price: "Avg. $35/night",
        image: "/images/karkow.jpg",
      },
      {
        place: "Mexico City, Mexico",
        detail: "Culture, food, and colorful neighborhoods",
        price: "Avg. $40/night",
        image: "/images/mexico.jpeg",
      },
      {
        place: "Marrakech, Morocco",
        detail: "Markets, palaces, and desert views",
        price: "Avg. $30/night",
        image: "/images/morrocco.jpg",
      },
    ],
  },
];

const TravelRecsPage = () => {
  return (
    <div className="travelsease">
      <header className="header">
        <div className="logo-search">
          <div className="logo">
            <Image
              src="/images/logo.png"
              alt="TravelEase Logo"
              width={80}
              height={80}
            />
          </div>
          <Link href="/" className="title">
            TravelEase
          </Link>
        </div>
        <div className="nav-buttons">
          <Link href="/flights" className="nav-button">
            <button className="white-button">
              <FaPlane />
              FLIGHTS
            </button>
          </Link>
          <Link href="/stays" className="nav-button">
            <button className="white-button">
              <FaHome />
              STAYS
            </button>
          </Link>
          <Link href="/activities" className="nav-button">
            <button className="white-button">
              <GiPalmTree />
              ACTIVITIES
            </button>
          </Link>
          <Link href="/travelrecs" className="nav-button">
            <button className="white-button">TRAVEL RECS</button>
          </Link>
        </div>
      </header>

      <main className="main-content">
        <h2 className="section-title">TRAVEL RECOMMENDATIONS</h2>
        {travelCategories.map((category) => (
          <div className="category" key={category.title}>
            <h3 className="category-title">{category.title}</h3>
            <div className="card-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="card">
                  {/* <div className="image-placeholder"></div> */}
                  <img
                    src={item.image}
                    alt={item.place}
                    className="place-image"
                  />
                  <h4 className="place-name">{item.place}</h4>
                  <p className="detail-text">{item.detail}</p>
                  <p className="price-text">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3 className="category-title">Explore on the Map</h3>
        <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <TravelMap />
        </div>
      </main>

      <footer className="footer">
        <button className="footer-button">HELP</button>
        <button className="footer-button">COUNTRY/CURRENCY</button>
      </footer>
    </div>
  );
};

export default TravelRecsPage;
