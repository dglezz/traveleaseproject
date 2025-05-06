"use client";
import React, { useState } from "react";
import "./activitiespage.css";
import Link from "next/link";
import Image from "next/image";
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import DatePicker from "react-datepicker";
import dynamic from "next/dynamic";

const ActivitiesPage = () => {
  const [location, setLocation] = useState("Punta Cana, Dominican Republic");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="activities-page">
      {/* Header */}
      <header className="header">
        <div className="logo-search">
          <div className="logo">logo</div>
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

      {/* Filters */}
      <div className="filters">
        <div className="filter">
          <label>
            <span role="img" aria-label="pin">
              📍
            </span>{" "}
            <strong>Going to</strong>
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="filter">
          <label>
            <span role="img" aria-label="calendar">
              📅
            </span>{" "}
            <strong>Dates</strong>
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMM d, yyyy"
            className="datepicker-input"
            placeholderText="Pick a Date"
          />
        </div>
      </div>

      {/* Top 10 Activities */}
      <div className="section">
        <h2>Top 10 - things to do</h2>
        <div className="activity-grid">
          {[
            {
              title: "Caribbean Dune Buggy",
              duration: "3 hours",
              price: "$48",
              img: "/images/buggy.jpg",
            },
            {
              title: "Scape park",
              duration: "2 hours",
              price: "$100",
              img: "/images/scapepark.jpeg",
            },
            {
              title: "Saona Island",
              duration: "5 hours",
              price: "$120",
              img: "/images/saona.webp",
            },
            {
              title: "Boat tour",
              duration: "5 hours",
              price: "$115",
              img: "/images/boattour.jpg",
            },
            {
              title: "Coco Bongo",
              duration: "3 hours",
              price: "$75",
              img: "/images/cocobongo.jpg",
            },
          ].map((a, i) => (
            <div className="activity-card" key={i}>
              <img src={a.img} alt={a.title} />
              <div className="activity-info">
                <p className="activity-title">{a.title}</p>
                <p className="activity-duration">{a.duration}</p>
                <p className="activity-price">{a.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Activities */}
      <div className="section">
        <h2>Other things to do</h2>
        <div className="activity-grid">
          {[
            {
              title: "Punta Cana Beach Horseback Riding",
              duration: "3 hours",
              price: "$88",
              img: "/images/hourseback.jpg",
            },
            {
              title: "Snorkeling Catamaran Tour",
              duration: "4 hours",
              price: "$100",
              img: "/images/snorkeling.jpg",
            },
            {
              title: "MonkeyLand and Zipline",
              duration: "5 hours",
              price: "$120",
              img: "/images/monkeyland.jpg",
            },
            {
              title:
                "3in1: Los Haitises N. Park + Yanigua Waterfall + Montaña Redonda",
              duration: "5 hours",
              price: "$145",
              img: "/images/haitises.jpg",
            },
            {
              title: "Parasailing",
              duration: "3 hours",
              price: "$95",
              img: "/images/parasailing.jpg",
            },
          ].map((a, i) => (
            <div className="activity-card" key={i}>
              <img src={a.img} alt={a.title} />
              <div className="activity-info">
                <p className="activity-title">{a.title}</p>
                <p className="activity-duration">{a.duration}</p>
                <p className="activity-price">{a.price}</p>
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
};

export default ActivitiesPage;
