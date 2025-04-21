"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import './flightspage.css';
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";

const FlightsPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (


    <div className="travelsease">
      <header className="header">
        <div className="logo-search">
          <div className="logo">logo</div>
          <Link href="/" className="title">TravelEase</Link>
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

          <button className="white-button">TRAVEL RECS</button>
        </div>
      </header>

      <main className="flights-page-content">
  <section className="search-bar">
    <div className="search-inputs">
      <div className="input-group">
        <label>From</label>
        <div className="input-box">New York, NY (LGA)</div>
      </div>

      <div className="input-group">
        <label>To</label>
        <div className="input-box">Boston, MA (BOS)</div>
      </div>

      <div className="input-group">
        <label>Depart</label>
        <div className="input-box">03/18/2025</div>
      </div>

      <div className="input-group">
        <label>Return</label>
        <div className="input-box">03/30/2025</div>
      </div>

      <div className="input-group">
        <label>Travelers, Class</label>
        <div className="input-box">2 adults, Business</div>
      </div>

      <button className="search-button">SEARCH</button>
    </div>
  </section>
  
        <div className="results-container">
  <aside className="filter-sidebar">
    <h3>FILTER BY:</h3>
    <div className="filter-group">
      <label><input type="checkbox" checked readOnly /> Direct</label>
      <label><input type="checkbox" checked readOnly /> Stops</label>
      <label><input type="checkbox" checked readOnly /> Airlines</label>
      <label><input type="checkbox" checked readOnly /> Baggage</label>
    </div>
  </aside>

  <div className="flight-cards">
    <div className="sort-buttons">
      <span>SORT BY:</span>
      <button className="active">CHEAPEST</button>
      <button>BEST</button>
      <button>FASTEST</button>
    </div>

    <section className="flights-results">
      {[
        {
          airline: "Alaska Airlines",
          logo: "/alaska.png",
          time: "4:00 PM",
          arrival: "5:30 PM",
          duration: "1 hr 30",
          from: "JFK",
          to: "BOS",
          priceEach: "$330",
          total: "$660"
        },
        {
          airline: "Southwest Airlines",
          logo: "/southwest.png",
          time: "6:20 PM",
          arrival: "8:05 PM",
          duration: "1 hr 45",
          from: "LGA",
          to: "BOS",
          priceEach: "$348",
          total: "$696"
        },
        {
          airline: "United Airlines",
          logo: "/united.png",
          time: "7:00 PM",
          arrival: "8:30 PM",
          duration: "1 hr 30",
          from: "JFK",
          to: "BOS",
          priceEach: "$310",
          total: "$620"
        }
      ].map((flight, idx) => (
        <div key={idx} className="flight-card">
          <div>
            <div className="airline">{flight.airline}</div>
            <div className="duration">{flight.duration} | {flight.from} → {flight.to}</div>
          </div>
          <div className="time-info">
            <div>{flight.time}</div>
            <div>→</div>
            <div>{flight.arrival}</div>
          </div>
          <div className="price-info">
            <div>Each: {flight.priceEach}</div>
            <div>Total: {flight.total}</div>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      ))}
    </section>
  </div>
</div>

      </main>

      <footer className="footer">
        <button className="footer-button">HELP</button>
        <button className="footer-button">COUNTRY/CURRENCY</button>
      </footer>
    </div>
  );
};

export default FlightsPage;