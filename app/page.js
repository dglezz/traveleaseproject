"use client";

import React from "react";
import "./mainpage.css";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const TravelEase = () => {
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
          <span className="title">TravelEase</span>
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

      {/* Explore Section */}
      <main className="main-content">
        <h2 className="section-title">EXPLORE CHEAP DEALS</h2>

        {[
          {
            title: "FLIGHTS",
            items: [
              {
                place: "New York",
                date: "Tue, Mar 17",
                price: "from $70",
                image: "/images/nyc.jpg",
              },
              {
                place: "Boston",
                date: "Tue, Mar 17",
                price: "from $83",
                image: "/images/boston.jpeg",
              },
              {
                place: "Orlando",
                date: "Thu, Mar 19",
                price: "from $94",
                image: "/images/florida.jpeg",
              },
              {
                place: "Chicago",
                date: "Fri, Mar 20",
                price: "from $80",
                image: "/images/chicago.jpeg",
              },
              {
                place: "Miami",
                date: "Sat, Mar 21",
                price: "from $100",
                image: "/images/miami.jpg",
              },
            ],
          },
          {
            title: "STAYS",
            items: [
              {
                place: "New York",
                detail: "Hotels, hostels, & more",
                price: "from $10",
                image: "/images/stays/nyc.jpg",
              },
              {
                place: "California",
                detail: "Hotels, hostels, & more",
                price: "from $15",
                image: "/images/stays/cali.jpg",
              },
              {
                place: "Chicago",
                detail: "Hotels, hostels, & more",
                price: "from $12",
                image: "/images/stays/chicago.jpg",
              },
              {
                place: "Las Vegas",
                detail: "Hotels, hostels, & more",
                price: "from $20",
                image: "/images/stays/lasvegas.jpg",
              },
              {
                place: "Paris",
                detail: "Hotels, hostels, & more",
                price: "from $25",
                image: "/images/stays/paris.jpg",
              },
            ],
          },
          {
            title: "ACTIVITIES",
            items: [
              {
                place: "New York",
                detail: "Museums, Tours, & more",
                price: "from $0",
                image: "/images/activities/nyc.jpg",
              },
              {
                place: "Florida",
                detail: "Beaches, amusement parks, & more",
                price: "from $0",
                image: "/images/activities/florida.jpg",
              },
              {
                place: "Utah",
                detail: "National parks, hot springs, & more",
                price: "from $0",
                image: "/images/activities/utah.jpeg",
              },
              {
                place: "Los Angeles",
                detail: "Museums, Beaches, & more",
                price: "from $0",
                image: "/images/activities/la.jpg",
              },
              {
                place: "San Francisco",
                detail: "Parks, Attractions, & more",
                price: "from $0",
                image: "/images/activities/sf.jpg",
              },
            ],
          },
        ].map((section) => (
          <div className="category" key={section.title}>
            <h3 className="category-title">{section.title}</h3>
            <div className="card-grid">
              {section.items.map((item, idx) => (
                <div key={idx} className="card">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="place-image"
                  />
                  <h4 className="place-name">{item.place}</h4>
                  {item.date && <p className="detail-text">{item.date}</p>}
                  {item.detail && <p className="detail-text">{item.detail}</p>}
                  <p className="price-text">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <button className="footer-button">HELP</button>
        <button className="footer-button">COUNTRY/CURRENCY</button>
      </footer>
    </div>
  );
};

export default TravelEase;
