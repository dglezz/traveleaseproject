"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import "./stayspage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StaysPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [travelers, setTravelers] = useState("1");

  return (
    <div className="stays-page">
      {/* Header */}
      <header className="header">
        <div className="logo-search">
          <Link href="/" className="title">
            TravelEase
          </Link>
        </div>
        <div className="nav-buttons">
          <Link href="/flights">
            <button className="white-button">
              <FaPlane />
              FLIGHTS
            </button>
          </Link>
          <Link href="/stays">
            <button className="white-button active">
              <FaHome />
              STAYS
            </button>
          </Link>
          <Link href="/activities">
            <button className="white-button">
              <GiPalmTree />
              ACTIVITIES
            </button>
          </Link>
          <button className="white-button">TRAVEL RECS</button>
        </div>
      </header>

      {/* Search Bar */}
      <h1 className="page-title">Plan your Stay</h1>
      <div className="search-bar">
        <input placeholder="Going to" />

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="datepicker"
          placeholderText="Select date"
        />

        <select
          className="traveler-dropdown"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5+">5+ people</option>
        </select>

        <button className="search-button">Search</button>
      </div>

      <div className="main-content">
        {/* Filters */}
        <div className="filters">
          <h2>Filter by</h2>
          {["Location", "Hotel", "Motel", "Homes", "Amenities"].map((label) => (
            <div key={label} className="filter-option">
              <label>{label}</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          ))}
        </div>

        {/* Stay Listings */}
        <div className="stay-listings">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="stay-card">
              <img src="https://via.placeholder.com/200x150" alt="hotel" />
              <div className="stay-info">
                <div>
                  <h3>Paradisus Gran Cana - All Suites - All Inclusive</h3>
                  <p className="location">Bávaro</p>
                </div>
                <div className="rating-price">
                  <span className="rating">8.4</span>
                  <div className="price-details">
                    <p className="price">$319</p>
                    <p className="note">includes taxes & fees</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>HELP</span>
        <span>COUNTRY/CURRENCY</span>
      </footer>
    </div>
  );
}
