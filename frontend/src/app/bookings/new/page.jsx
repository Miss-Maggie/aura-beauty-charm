"use client";

import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

const NewBooking = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2 text-center">Book an Appointment</h1>
        <p className="text-muted-foreground text-center mb-10">Choose your service and pick a time that works for you.</p>
        <BookingForm />
      </motion.div>
    </div>
  </div>
);

export default NewBooking;



