'use client';
import 'react-datepicker/dist/react-datepicker.css';
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import './flightspage.css';
import { FaPlane, FaHome } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import dynamic from 'next/dynamic';
import DatePicker from 'react-datepicker';

const SelectNoSSR = dynamic(() => import('/components/SelectNoSSR'), { ssr: false });

const airportOptions = [
  { value: "JFK", label: "New York, NY (JFK)" },
  { value: "LGA", label: "New York, NY (LGA)" },
  { value: "BOS", label: "Boston, MA (BOS)" },
  { value: "SFO", label: "San Francisco, CA (SFO)" },
  { value: "ORD", label: "Chicago, IL (ORD)" }
];

const FlightsPage = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [numTravelers, setNumTravelers] = useState(1); 
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [filters, setFilters] = useState({
    direct: false,
    stops: false,
    airlines: false,
    baggage: false
  });

  const [activeSort, setActiveSort] = useState("CHEAPEST");

  const handleSortChange = (sortOption) => {
    setActiveSort(sortOption);
  };

  const handleDepartChange = (date) => {
    setDepartDate(date);
    if (date > returnDate) {
      setReturnDate(date);
    }
  };

  const handleReturnChange = (date) => {
    if (date < departDate) {
      alert('Return date cannot be before departure. Adjusting return date.');
      setReturnDate(departDate);
    } else {
      setReturnDate(date);
    }
  };

  const handleFilterChange = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

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
              <SelectNoSSR
                options={airportOptions}
                placeholder="City, State, Airport"
                onChange={(selectedOption) => console.log(selectedOption)}
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    fontWeight: 'normal'
                  }),
                  option: (provided) => ({
                    ...provided,
                    fontWeight: 'normal' 
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontWeight: 'normal' 
                  }),
                  input: (provided) => ({
                    ...provided,
                    fontWeight: 'normal' 
                  })
                }}
              />
            </div>

            <div className="input-group">
              <label>To</label>
              <SelectNoSSR
                options={airportOptions}
                placeholder="City, State, Airport"
                onChange={(selectedOption) => console.log(selectedOption)}
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    fontWeight: 'normal'
                  }),
                  option: (provided) => ({
                    ...provided,
                    fontWeight: 'normal' 
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontWeight: 'normal' 
                  }),
                  input: (provided) => ({
                    ...provided,
                    fontWeight: 'normal'
                  })
                }}
              />
            </div>

            <div className="input-group">
              <label>Depart</label>
              <DatePicker
                selected={departDate}
                onChange={handleDepartChange}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                className="input-box"
                placeholderText="Choose date"
              />
            </div>

            <div className="input-group">
              <label>Return</label>
              <DatePicker
                selected={returnDate}
                onChange={handleReturnChange}
                minDate={departDate}
                dateFormat="MM/dd/yyyy"
                className="input-box"
                placeholderText="Choose date"
              />
            </div>

            <div className="input-group">
              <label>Travelers</label>
              <select
                value={numTravelers}
                onChange={(e) => setNumTravelers(Number(e.target.value))}
                className="travelers-dropdown"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Traveler{(i + 1) > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="class-dropdown"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
            </div>

            <button className="search-button">SEARCH</button>
          </div>
        </section>

        <div className="results-container">
          <aside className="filter-sidebar">
            <h3>FILTER BY:</h3>
            <div className="filter-group">
              <label><input type="checkbox" checked={filters.direct} onChange={() => handleFilterChange('direct')} /> Direct</label>
              <label><input type="checkbox" checked={filters.stops} onChange={() => handleFilterChange('stops')} /> Stops</label>
              <label><input type="checkbox" checked={filters.airlines} onChange={() => handleFilterChange('airlines')} /> Airlines</label>
              <label><input type="checkbox" checked={filters.baggage} onChange={() => handleFilterChange('baggage')} /> Baggage</label>
            </div>
          </aside>

          <div className="flight-cards">
            <div className="sort-buttons">
              <span>SORT BY:</span>
              <button
                className={`sort-button ${activeSort === "CHEAPEST" ? "active" : ""}`}
                onClick={() => handleSortChange("CHEAPEST")}
              >
                CHEAPEST
              </button>
              <button
                className={`sort-button ${activeSort === "BEST" ? "active" : ""}`}
                onClick={() => handleSortChange("BEST")}
              >
                BEST
              </button>
              <button
                className={`sort-button ${activeSort === "FASTEST" ? "active" : ""}`}
                onClick={() => handleSortChange("FASTEST")}
              >
                FASTEST
              </button>
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
                    <button className="buy-button">BUY</button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
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


export default FlightsPage;
