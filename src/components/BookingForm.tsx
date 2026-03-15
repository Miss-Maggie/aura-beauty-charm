import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/bookingStore";
import { toast } from "@/hooks/use-toast";

const services = ["Haircut", "Hair Coloring", "Beard Trim", "Wash & Blow Dry"];

const BookingForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], date: "", time: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createBooking(form);
      toast({ title: "Appointment booked!", description: `${form.service} on ${form.date} at ${form.time}` });
      navigate("/bookings");
    } catch {
      toast({ title: "Error", description: "Failed to create booking", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring/20 focus:border-primary outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-card p-10 rounded-3xl shadow-elevated">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
        <input name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Jane Doe" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Phone Number</label>
        <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="555-0100" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Service</label>
        <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground ml-1">Date</label>
          <input name="date" type="date" required value={form.date} onChange={handleChange} className={inputClass} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground ml-1">Time</label>
          <input name="time" type="time" required value={form.time} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "Processing..." : "Confirm Appointment"}
      </button>
    </form>
  );
};

export default BookingForm;
