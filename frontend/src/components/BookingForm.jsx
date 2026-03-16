import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/bookingStore";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({ 
    customerName: "", 
    phoneNumber: "", 
    serviceId: "", 
    date: "", 
    time: "" 
  });

  useEffect(() => {
    api.getServices().then((svcs) => {
      setServices(svcs);
      const preselectedTitle = searchParams.get("service");
      const initialSvc = svcs.find(s => s.title === preselectedTitle) || svcs[0];
      if (initialSvc) {
        setForm(prev => ({ ...prev, serviceId: initialSvc._id }));
      }
    }).catch(console.error);
  }, [searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createBooking(form);
      const selectedSvc = services.find(s => s._id === form.serviceId);
      toast({ 
        title: "Appointment booked! 🎉", 
        description: `${selectedSvc?.title} on ${form.date} at ${form.time}` 
      });
      router.push("/bookings");
    } catch (err) {
      toast({ title: "Error", description: err.message || "Failed to create booking", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring/20 focus:border-primary outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-card p-10 rounded-3xl shadow-elevated border border-border">
      <div className="text-center mb-2">
        <span className="text-4xl">📅</span>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
        <input name="customerName" required value={form.customerName} onChange={handleChange} className={inputClass} placeholder="Jane Doe" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Phone Number</label>
        <input name="phoneNumber" type="tel" required value={form.phoneNumber} onChange={handleChange} className={inputClass} placeholder="555-0100" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1">Service</label>
        <select name="serviceId" value={form.serviceId} onChange={handleChange} className={inputClass}>
          {services.map((s) => (
            <option key={s._id} value={s._id}>{s.title}</option>
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
        {loading ? "Processing... ⏳" : "Confirm Appointment ✨"}
      </button>
    </form>
  );
};

export default BookingForm;



