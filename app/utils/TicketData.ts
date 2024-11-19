interface Concert {
  location: string; // The location of the concert
  venue: string; // The venue of the concert
  date: string; // Date of the concert
  time: string; // Time of the concert
}

interface TicketData {
  id: number; // Unique ID for the ticket
  title: string; // Title of the event or concert
  about: string; // Description or about the concert
  genre: string; // Genre of the concert (e.g., Rock, Pop, etc.)
  price: number; // Price of the ticket
  ticketImage: string; // URL of the ticket image
  tourName: string; // The name of the tour
  concertNumber: number; // Number of concerts (should be 1 or more)
  rating: {
    rate: number; // Average rating of the concert
    count: number; // Number of ratings
  };
  concerts: Concert[]; // Array of concerts for the tour
}

export const tickets: TicketData[] = [
  {
    id: 1,
    title: "Rainbow Kitten Suprises Concert",
    about:
      "Join us for an unforgettable experience with Rainbow Kitten Suprises!",
    genre: "Indie Rock",
    price: 50,
    ticketImage: "/RKS_JimmyFcredit.webp",
    tourName: "Love Hate Music Box Tour",
    concertNumber: 2,
    rating: {
      rate: 4.5,
      count: 1200,
    },
    concerts: [
      {
        location: "Boise ID USA",
        venue: "ExtraMile Arena",
        date: "Nov 19 2024",
        time: "8:00 PM",
      },
      {
        location: "Portland OR USA",
        venue: "Mada Center",
        date: "Nov 20 2024",
        time: "8:00 PM",
      },
    ],
  },

  {
    id: 2,
    title: "Eagles ",
    about:
      "Join us for an unforgettable experience with Rainbow Kitten Suprises!",
    genre: "Pop",
    price: 50,
    ticketImage: "/RKS2.jpeg",
    tourName: "2024 World Tour",
    concertNumber: 2,
    rating: {
      rate: 4.5,
      count: 1200,
    },
    concerts: [
      {
        location: "Las Vegas, NV",
        venue: "The Venetian Theatre at The Venetian Resort",
        date: "DEC 06 2024",
        time: "8:30 PM",
      },
      {
        location: "Las Vegas, NV",
        venue: "The Venetian Theatre at The Venetian Resort",
        date: "DEC 07 2024",
        time: "8:30 PM",
      },
    ],
  },

  {
    id: 3,
    title: "Weird AI Yankovic ",
    about:
      "Join us for an unforgettable experience with Rainbow Kitten Suprises!",
    genre: "Comedy",
    price: 50,
    ticketImage: "/RKS3.webp",
    tourName: '"Weird Al" Yankovic: Bigger & Weirder 2025 Tour',

    concertNumber: 2,
    rating: {
      rate: 4.5,
      count: 1200,
    },
    concerts: [
      {
        location: "Las Vegas, NV",
        venue: "The Venetian Theatre at The Venetian Resort",
        date: "JUN 13 2025",
        time: "8:00 PM",
      },
      {
        location: "Las Vegas, NV",
        venue: "The Venetian Theatre at The Venetian Resort",
        date: "JUN 13 2025",
        time: "8:00 PM",
      },
    ],
  },
];
