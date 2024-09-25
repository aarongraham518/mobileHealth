export const meds = [
  {
    id: Math.random(),
    name: "Levothyroxine",
    description:
      "Levothyroxine, also known as L-thyroxine, is a synthetic form of the thyroid hormone thyroxine. It is used to treat thyroid hormone deficiency, including a severe form known as myxedema coma. It may also be used to treat and prevent certain types of thyroid tumors. It is not indicated for weight loss.",
    timesPerDay: "Before eating, 1x per day",
    course: '2 Weeks',
    image: require("../assets/meds/levothyroxine_small.png"),
    imageBig: require("../assets/meds/levothyroxineBig.png"),
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Prime Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Aspirin",
    description:
      "Aspirin, also known as acetylsalicylic acid, is a nonsteroidal anti-inflammatory drug used to reduce pain, fever, and/or inflammation, and as an antithrombotic. Specific inflammatory conditions which aspirin is used to treat include Kawasaki disease, pericarditis, and rheumatic fever.",
    timesPerDay: "When needed",
    image: require("../assets/meds/aspirin.jpeg"),
    imageBig: require("../assets/meds/aspirinB.png"),
    course: '4 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Tramadol",
    description:
      "Tramadol, sold under the brand name Ultram among others, is an opioid pain medication and a serotonin–norepinephrine reuptake inhibitor used to treat moderately severe pain. When taken by mouth in an immediate-release formulation, the onset of pain relief usually begins within an hour.",
    timesPerDay: "See Dr. Instructions",
    image: require("../assets/meds/tramadol.png"),
    imageBig: require("../assets/meds/tramadolBig.png"),
    course: '11 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Metoprolol",
    description:
      "Metoprolol, sold under the brand name Lopressor among others, is a medication used to treat high blood pressure, chest pain due to poor blood flow to the heart, and a number of conditions involving an abnormally fast heart rate.",
    timesPerDay: "2x per hour. Yikes!",
    image: require("../assets/meds/metoprolol.jpeg"),
    imageBig: require("../assets/meds/metoprololBig.png"),
    course: '9 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Simvastatin",
    description:
      "Simvastatin, sold under the brand name Zocor among others, is a statin, a type of lipid-lowering medication. It is used along with exercise, diet, and weight loss to decrease elevated lipid levels. It is also used to decrease the risk of heart problems in those at high risk. It is taken by mouth.",
    timesPerDay: "See Dr. Instructions",
    image: require("../assets/meds/simvastatin.jpeg"),
    imageBig: require("../assets/meds/simvastatinBig.png"),
    course: '34 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Amoxicillin",
    description:
      "Amoxicillin is an antibiotic medication belonging to the aminopenicillin class of the penicillin family. The drug is used to treat bacterial infections such as middle ear infection, strep throat, pneumonia, skin infections, odontogenic infections, and urinary tract infections.",
    timesPerDay: "See Dr. Instructions",
    image: require("../assets/meds/amoxicillin.jpeg"),
    imageBig: require("../assets/meds/amoxicillinBig.png"),
    course: '3 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
  {
    id: Math.random(),
    name: "Omeprazole",
    description:
      "Omeprazole, sold under the brand names Prilosec and Losec, among others, is a medication used in the treatment of gastroesophageal reflux disease, peptic ulcer disease, and Zollinger–Ellison syndrome. It is also used to prevent upper gastrointestinal bleeding in people who are at high risk.",
    timesPerDay: "See Dr. Instructions",
    image: require("../assets/meds/omeprazole.jpeg"),
    imageBig: require("../assets/meds/omeprazoleBig.png"),
    course: '3 Weeks',
    whereToBuy: [
      {
        latitude: 27.76757844065867,
        longitude: -82.63462421336362,
        pharmacyName: "CVS Pharmacy",
        address: "2175 Main St",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "5.99",
      },
      {
        latitude: 27.75480468996914,
        longitude: -82.64110732487218,
        pharmacyName: "Walmart Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 3.2,
        time: "8 AM - 7PM",
        cost: "4.35",
      },
      {
        latitude: 27.75715042467095,
        longitude: -82.63028084852364,
        pharmacyName: "Unity Express Pharmacy",
        address: "St Petersburg, 32 State st",
        miles: 15.2,
        time: "8 AM - 9PM",
        cost: "5.00",
      },
      {
        latitude: 27.77012170753001,
        longitude: -82.63024891201522,
        pharmacyName: "Pop and Go Pharmacy",
        address: "St Petersburg, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "2.99",
      },
      {
        latitude: 27.785035576059684,
        longitude: -82.64435979282699,
        pharmacyName: "Organic Pharmacy",
        address: "Clearwater, 123 State st",
        miles: 5.2,
        time: "8 AM - 11PM",
        cost: "4.09",
      },
    ],
  },
];



export const appData = [
  {
    id: Math.random(),
    name: "Dr. Nathaniel Valle",
    position: "Surgeon",
    hospital: "B & B Hospital",
    rating: 4.2,
    reviews: "4,532",
    image: require("../assets/maledoc1.png"),
  },
  {
    id: Math.random(),
    name: "Dr. Beckett Calger",
    position: "Cardiologist",
    hospital: "NYC Hospital",
    rating: 4.6,
    reviews: "4,532",
    image: require("../assets/femaledoc1.png"),
  },
  {
    id: Math.random(),
    name: "Dr. Jake Volum",
    position: "Radiologist",
    hospital: "S & S Hospital",
    rating: 4.8,
    reviews: "10,532",
    image: require("../assets/femaledoc2.png"),
  },
];