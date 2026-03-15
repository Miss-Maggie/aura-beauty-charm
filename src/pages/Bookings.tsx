import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import BookingTable from "@/components/BookingTable";
import { api, type Booking } from "@/lib/bookingStore";
import { toast } from "@/hooks/use-toast";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    setLoading(true);
    const data = await api.getBookings();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleDelete = async (id: string) => {
    await api.deleteBooking(id);
    toast({ title: "Booking deleted" });
    loadBookings();
  };

  const handleStatusChange = async (id: string, status: Booking["status"]) => {
    await api.updateBooking(id, { status });
    toast({ title: "Status updated", description: `Changed to ${status}` });
    loadBookings();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1">Bookings</h1>
              <p className="text-muted-foreground">{bookings.length} appointments</p>
            </div>
            <Link
              to="/bookings/new"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-medium hover:brightness-110 active:scale-95 transition-all"
            >
              <Plus size={16} />
              New Booking
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-16 text-muted-foreground">Loading...</div>
          ) : (
            <BookingTable bookings={bookings} onDelete={handleDelete} onStatusChange={handleStatusChange} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;
