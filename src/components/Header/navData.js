export const navItems = [
  {
    id: "Bookings",
    label: "Bookings",
    iconSrc: "/logos/Bookings.png",
    subItems: [
      { id: "coolie-booking", label: "Coolie Booking" },
      { id: "ticket-booking", label: "Ticket Booking" },
    ],
  },
  { id: "PNR Status", label: "PNR Status", iconSrc: "/logos/PNR_Status.png" },
  {
    id: "Train Status",
    label: "Train Status",
    iconSrc: "/logos/Running_Status.png",
  },
  {
    id: "More",
    label: "More",
    iconSrc: "/logos/More.png",
    megaMenu: {
      sections: [
        {
          title: "Services",
          items: [
            { id: "portar", label: "Portar" },
            { id: "connecting-trains", label: "Connecting Trains" },
            { id: "my-trips", label: "My Trips" },
            { id: "seat-availability", label: "Seat Availability" },
            { id: "ticket-booking", label: "Ticket Booking" },
            { id: "pnr-status", label: "PNR Status" },
            { id: "running-status", label: "Running Status" },
            { id: "train-route", label: "Train Route" },
            { id: "chart-vacancy", label: "Chart Vacancy" },
            { id: "coach-position", label: "Coach Position" },
            { id: "live-station", label: "Live Station" },
            { id: "cancel-ticket", label: "Cancel Ticket" },
            { id: "rail-madad", label: "Rail Madad" },
            { id: "e-wallet", label: "E - Wallet" },
            { id: "fare-calculator", label: "Fare Calculator" },
            { id: "check-speed", label: "Check Speed" },
          ],
        },
        {
          title: "OTHERS",
          items: [
            { id: "about-us", label: "About us" },
            { id: "user-guide", label: "User Guide" },
            {
              id: "railway-helpline-number",
              label: "Railway Helpline Number",
            },
            { id: "language", label: "Language" },
            { id: "help-support", label: "Help & Support" },
            { id: "alert", label: "Alert" },
            { id: "refund-history", label: "Refund History" },
            { id: "cancel-food-order", label: "Cancel Food order" },
            { id: "rate-us", label: "Rate us" },
            { id: "gallery", label: "Gallery" },
          ],
        },
      ],
    },
  },
];

export const additionalItems = [
  { id: "Help", label: "Help", iconSrc: "/logos/Help.png" },
  {
    id: "Login",
    label: "",
    iconSrc: "/logos/login.png",
    subItems: [
      { id: "login", label: "Login" },
      { id: "register", label: "Register" },
    ],
  },
];
