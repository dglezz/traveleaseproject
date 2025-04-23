"use client";
import React, { useState } from "react";
import "./mainpage.css";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";

const TravelEase = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // checking if it works
  return (
    <div className="travelsease">
      <header className="header">
        <div className="logo-search">
          <div className="logo">logo</div>
          <span className="title">TravelEase</span>
        </div>
        <div className="nav-buttons">
          <div className="dropdown-container">
            <button onClick={() => setShowDropdown(!showDropdown)}>
              PLAN A TRIP
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <span>FLIGHTS</span>
                  <FaPlane />
                </div>
                <div className="dropdown-item">
                  <span>STAYS</span>
                  <FaHome />
                </div>
                <div className="dropdown-item">
                  <span>ACTIVITIES</span>
                  <GiPalmTree />
                </div>
              </div>
            )}
          </div>
          <button>TRAVEL RECS</button>
        </div>
      </header>

      {/* Explore Section */}
      <main className="main-content">
        <h2 className="section-title">EXPLORE CHEAP DEALS</h2>

        {[
          {
            title: "FLIGHTS",
            items: [
              { place: "New York", date: "Tue, Mar 17", price: "from $70" },
              { place: "Boston", date: "Tue, Mar 17", price: "from $83" },
              { place: "Florida", date: "Thu, Mar 19", price: "from $94" },
            ],
          },
          {
            title: "STAYS",
            items: [
              {
                place: "New York",
                detail: "Hotels, hostels, & more",
                price: "from $10",
              },
              {
                place: "California",
                detail: "Hotels, hostels, & more",
                price: "from $15",
              },
              {
                place: "Chicago",
                detail: "Hotels, hostels, & more",
                price: "from $12",
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
              },
              {
                place: "Florida",
                detail: "Beaches, amusement parks, & more",
                price: "from $0",
              },
              {
                place: "Utah",
                detail: "National parks, hot springs, & more",
                price: "from $0",
              },
            ],
          },
        ].map((section) => (
          <div className="category" key={section.title}>
            <h3 className="category-title">{section.title}</h3>
            <div className="card-grid">
              {section.items.map((item, idx) => (
                <div key={idx} className="card">
                  <div className="image-placeholder"></div>
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
        <button className="footer-button">SAVED TRIPS</button>
        <button className="footer-button">LOG IN</button>
      </footer>
    </div>
  );
};

export default TravelEase;
