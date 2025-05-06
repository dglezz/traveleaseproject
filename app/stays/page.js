"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import "./stayspage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

export default function StaysPage() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [travelers, setTravelers] = useState(1);

  const stayData = [
    {
      title: "Paradisus Gran Cana - All Suites - All Inclusive",
      location: "Bávaro",
      rating: 8.4,
      price: "$319",
      image: "/images/paradisus.jpeg",
    },
    {
      title: "Bahia Principe Luxury Ambar",
      location: "Punta Cana",
      rating: 8.9,
      price: "$275",
      image: "/images/bahiaprincipe.jpeg",
    },
    {
      title: "Barceló Bávaro Palace",
      location: "Bávaro Beach",
      rating: 9.1,
      price: "$290",
      image: "/images/barcelo.jpg",
    },
    {
      title: "Dreams Royal Beach Punta Cana",
      location: "Punta Cana",
      rating: 8.7,
      price: "$305",
      image: "/images/dreams.jpeg",
    },
  ];

  return (
    <div className="stays-page">
      {/* Header */}
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
          <Link href="/travelrecs" className="nav-button">
            <button className="white-button">TRAVEL RECS</button>
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <main className="stays-page-content">
        {/* <h2 className="section-title">PLAN YOUR STAY</h2> */}
        <section className="search-bar">
          <div className="search-inputs">
            <div className="input-group">
              <label>Destination</label>
              <input
                type="text"
                placeholder="City, state, or region"
                className="input-box"
              />
            </div>

            <div className="input-group">
              <label>Check-in</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                className="input-box"
                placeholderText="Choose date"
              />
            </div>

            <div className="input-group">
              <label>Check-out</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate}
                dateFormat="MM/dd/yyyy"
                className="input-box"
                placeholderText="Choose date"
              />
            </div>

            <div className="input-group">
              <label>Travelers</label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="travelers-dropdown"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Traveler{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <button className="search-button">Search</button>
          </div>
        </section>
      </main>

      {/* Main Content */}
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
          {stayData.map((stay, i) => (
            <div key={i} className="stay-card">
              <img src={stay.image} alt={stay.title} />
              <div className="stay-info">
                <div>
                  <h3>{stay.title}</h3>
                  <p className="location">{stay.location}</p>
                </div>
                <div className="rating-price">
                  <span className="rating">{stay.rating}</span>
                  <div className="price-details">
                    <p className="price">{stay.price}</p>
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
        <button className="footer-button">HELP</button>
        <button className="footer-button">COUNTRY/CURRENCY</button>
      </footer>
    </div>
  );
}
