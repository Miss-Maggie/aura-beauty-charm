const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  price: String,
  duration: String,
  icon: String,
  description: String,
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

const services = [
  { title: "Haircut", price: "$45", duration: "45 min", icon: "✂️", description: "Expert hair cutting and styling." },
  { title: "Hair Coloring", price: "$120", duration: "2 hours", icon: "🎨", description: "Vibrant and long-lasting hair color." },
  { title: "Beard Trim", price: "$25", duration: "20 min", icon: "🪒", description: "Precise beard shaping and grooming." },
  { title: "Wash & Blow Dry", price: "$35", duration: "30 min", icon: "💆", description: "Relaxing wash followed by a professional blowout." },
  { title: "Nail Art", price: "$50", duration: "1 hour", icon: "💅", description: "Creative and elegant nail designs." },
  { title: "Facial Treatments", price: "$85", duration: "1 hour", icon: "🧖‍♀️", description: "Revitalizing skin treatments for a healthy glow." },
];

async function seed() {
  try {
    await mongoose.connect('mongodb://localhost:27017/aura-beauty');
    console.log('Connected to MongoDB');

    await Service.deleteMany({});
    console.log('Cleared existing services');

    await Service.insertMany(services);
    console.log('Seeded initial services');

    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
