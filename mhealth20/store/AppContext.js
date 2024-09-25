import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState([
    {
      id: Math.random(),
      name: "Dr. PapinDrea Rein",
      position: "Radiologist",
      hospital: "Scotia Hospital",
      rating: 4.9,
      reviews: "16,532",
      image: require("../assets/femaledoc3.png"),
      number: '5182758237',
      gender: "Female",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Nathaniel Valle",
      position: "Heart Surgeon",
      hospital: "B & B Hospital",
      rating: 4.2,
      reviews: "4,532",
      image: require("../assets/maledoc1.png"),
      number: '5182758237',
      gender: "Male",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Beckett Calger",
      position: "Cardiologist",
      hospital: "NYC Hospital",
      rating: 4.6,
      reviews: "4,532",
      image: require("../assets/femaledoc1.png"),
      number: '5182758237',
      gender: "Female",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Jake Volum",
      position: "Radiologist",
      hospital: "S & S Hospital",
      rating: 4.8,
      reviews: "10,532",
      image: require("../assets/femaledoc2.png"),
      number: '5182758237',
      gender: "Male",
      latitude: 28.0198,
      longitude: -82.7731
    },
    // New Data
    {
      id: Math.random(),
      name: "Dr. Amelia Harper",
      position: "Pediatrician",
      hospital: "Sunshine Children's",
      rating: 4.7,
      reviews: "9,432",
      image: require("../assets/femaledoc4.png"),
      number: '5182758237',
      gender: "Female",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Michael Greene",
      position: "Orthopedic",
      hospital: "Dunedin General",
      rating: 4.5,
      reviews: "6,789",
      image: require("../assets/maledoc2.png"),
      number: '5182758237',
      gender: "Male",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Sophia Bennett",
      position: "Dermatologist",
      hospital: "Florida Skin Clinic",
      rating: 4.9,
      reviews: "12,321",
      image: require("../assets/femaledoc5.png"),
      number: '5182758237',
      gender: "Female",
      latitude: 28.0198,
      longitude: -82.7731
    },
    {
      id: Math.random(),
      name: "Dr. Lucas Myers",
      position: "Neurologist",
      hospital: "BayCare Medical",
      rating: 4.6,
      reviews: "8,412",
      image: require("../assets/maledoc3.png"),
      number: '5182758237',
      gender: "Male",
      latitude: 28.0198,
      longitude: -82.7731
    }
  ]);

  
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (doctor) => {
    setFavorites([...favorites, doctor]);
  };

  const removeFavorite = (doctorId) => {
    setFavorites(favorites.filter((fav) => fav.id !== doctorId));
  };

  const toggleFavorite = (doctor) => {
    if (favorites.some((fav) => fav.id === doctor.id)) {
      removeFavorite(doctor.id);
    } else {
      addFavorite(doctor);
    }
  };

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        appData,
        favorites,
        toggleFavorite,
        appointments,
        addAppointment,
        removeAppointment
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
