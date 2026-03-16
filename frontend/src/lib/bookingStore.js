const API_BASE_URL = "http://localhost:3002";

export const api = {
  getServices: async () => {
    const res = await fetch(`${API_BASE_URL}/services`);
    if (!res.ok) throw new Error("Failed to fetch services");
    return res.json();
  },

  getBookings: async () => {
    const res = await fetch(`${API_BASE_URL}/bookings`);
    if (!res.ok) throw new Error("Failed to fetch bookings");
    return res.json();
  },

  getBooking: async (id) => {
    const res = await fetch(`${API_BASE_URL}/bookings/${id}`);
    if (!res.ok) throw new Error("Failed to fetch booking");
    return res.json();
  },

  createBooking: async (data) => {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to create booking");
    }
    return res.json();
  },

  updateBooking: async (id, data) => {
    const endpoint = data.status && Object.keys(data).length === 1 
      ? `${API_BASE_URL}/bookings/${id}/status` 
      : `${API_BASE_URL}/bookings/${id}`;
    
    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update booking");
    return res.json();
  },

  deleteBooking: async (id) => {
    const res = await fetch(`${API_BASE_URL}/bookings/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete booking");
  },
};
