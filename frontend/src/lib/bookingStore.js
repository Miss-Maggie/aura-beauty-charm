const STORAGE_KEY = "aura_bookings";

const sampleBookings = [
  { id: "1", name: "Jane Cooper", phone: "555-0101", service: "Haircut", date: "2026-03-18", time: "10:00", status: "Confirmed" },
  { id: "2", name: "Robert Fox", phone: "555-0102", service: "Hair Coloring", date: "2026-03-18", time: "11:30", status: "Pending" },
  { id: "3", name: "Emily Chen", phone: "555-0103", service: "Wash & Blow Dry", date: "2026-03-19", time: "14:00", status: "Completed" },
  { id: "4", name: "Marcus Johnson", phone: "555-0104", service: "Beard Trim", date: "2026-03-20", time: "09:00", status: "Confirmed" },
];

function getBookings() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleBookings));
    return sampleBookings;
  }
  return JSON.parse(stored);
}

function saveBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

// Simulated API
export const api = {
  getBookings: async () => {
    await new Promise((r) => setTimeout(r, 200));
    return getBookings();
  },

  getBooking: async (id) => {
    await new Promise((r) => setTimeout(r, 100));
    return getBookings().find((b) => b.id === id);
  },

  createBooking: async (data) => {
    await new Promise((r) => setTimeout(r, 300));
    const bookings = getBookings();
    const booking = { ...data, id.now().toString(), status: "Pending" };
    bookings.push(booking);
    saveBookings(bookings);
    return booking;
  },

  updateBooking: async (id, updates) => {
    await new Promise((r) => setTimeout(r, 200));
    const bookings = getBookings();
    const idx = bookings.findIndex((b) => b.id === id);
    if (idx === -1) throw new Error("Booking not found");
    bookings[idx] = { ...bookings[idx], ...updates };
    saveBookings(bookings);
    return bookings[idx];
  },

  deleteBooking: async (id) => {
    await new Promise((r) => setTimeout(r, 200));
    const bookings = getBookings().filter((b) => b.id !== id);
    saveBookings(bookings);
  },
};



