// Central data store for all products, brands, and gallery items
import { PHOTOS } from './photos'

import n1 from '../assets/exotic cars/n1.png'
import n2 from '../assets/exotic cars/n2.jpg'
import n3 from '../assets/exotic cars/n3.webp'
import d1 from '../assets/exotic cars/d1.jpg'
import d2 from '../assets/exotic cars/d2.webp'
import t1 from '../assets/exotic cars/t1.avif'
import t2 from '../assets/exotic cars/t2.webp'
import s1 from '../assets/exotic cars/s1.webp'
import s2 from '../assets/exotic cars/s2.jpg'
import w1 from '../assets/exotic cars/w1.png'

// New shop items
import ac_filter from '../assets/exotic cars/Air Condition Filters.jpeg'
import car_jack from '../assets/exotic cars/Car Jacks.jpeg'
import engine_filter from '../assets/exotic cars/Engine air filter.jpeg'
import oil_filter_1 from '../assets/exotic cars/oilfilter.jpeg'
import oil_filter_2 from '../assets/exotic cars/oil filter.jpeg'
import serpentine_belt from '../assets/exotic cars/Serpentine Belt.jpeg'
import spark_plugs from '../assets/exotic cars/spark plugs.jpeg'

export const LOGO = new URL('../assets/exotic cars/ETS LOGO.png', import.meta.url).href

export const BRANDS = [
  { id: 1, name: 'FERRARI', sub: 'Italian Excellence', count: 48, color: '#cc0000', description: 'Prancing horse engineering — from Maranello to your garage.' },
  { id: 2, name: 'LAMBORGHINI', sub: 'Raging Bull Performance', count: 36, color: '#f5c518', description: "Unmatched aggression. Pure Sant'Agata DNA." },
  { id: 3, name: 'PORSCHE', sub: 'Engineering Precision', count: 62, color: '#aaaaaa', description: "Stuttgart's finest — precision engineered for every road." },
  { id: 4, name: 'BMW', sub: 'Bavarian Motor Works', count: 94, color: '#0066b1', description: 'Ultimate driving machine parts, straight from Bavaria.' },
  { id: 5, name: 'MERCEDES', sub: 'German Luxury', count: 88, color: '#c0c0c0', description: 'Three-pointed star excellence. Built to the highest standard.' },
  { id: 6, name: 'ASTON MARTIN', sub: 'British Elegance', count: 28, color: '#004f3f', description: "Bond's choice. Britain's most beautiful automotive art." },
  { id: 7, name: 'AUDI', sub: 'Vorsprung durch Technik', count: 76, color: '#999999', description: 'Innovative German engineering and sophisticated luxury.' },
  { id: 8, name: 'TESLA', sub: 'Electric Future', count: 42, color: '#e31937', description: 'Next-gen electric vehicle parts and technology.' },
  { id: 9, name: 'TOYOTA', sub: 'Lead the Way', count: 120, color: '#eb0a1e', description: 'Unrivaled reliability and worldwide parts support.' },
  { id: 10, name: 'HONDA', sub: 'Power of Dreams', count: 110, color: '#ff0000', description: 'Advanced VTEC technology and legendary durability.' },
  { id: 11, name: 'FORD', sub: 'Go Further', count: 98, color: '#003478', description: 'Robust performance and American engineering excellence.' },
  { id: 12, name: 'CHEVROLET', sub: 'Find New Roads', count: 82, color: '#f2b512', description: 'Iconic performance and high-value automotive parts.' },
  { id: 13, name: 'VOLKSWAGEN', sub: 'Das Auto', count: 105, color: '#001e50', description: 'Refined German quality and engineering for every driver.' },
  { id: 14, name: 'LEXUS', sub: 'Experience Amazing', count: 54, color: '#333333', description: 'The pinnacle of Japanese luxury and precision engineering.' },
  { id: 15, name: 'VOLVO', sub: 'Safety First', count: 68, color: '#003057', description: 'Industry-leading safety standards and Scandinavian design.' },
  { id: 16, name: 'MCLAREN', sub: 'Racing Pedigree', count: 18, color: '#ff8000', description: 'Formula 1 technology brought to the open road.' },
  { id: 17, name: 'BUGATTI', sub: 'The Unattainable', count: 6, color: '#004a99', description: 'Unmatched speed and the highest level of craftsmanship.' },
  { id: 18, name: 'MASERATI', sub: 'Italian Passion', count: 32, color: '#0b2447', description: 'Soul-stirring engine notes and Italian sports luxury.' },
  { id: 19, name: 'JAGUAR', sub: 'Grace and Pace', count: 44, color: '#005f54', description: 'British luxury and high-performance racing heritage.' },
  { id: 20, name: 'LAND ROVER', sub: 'Above and Beyond', count: 58, color: '#004225', description: 'The world standard in luxury off-road capability.' },
  { id: 21, name: 'ALFA ROMEO', sub: 'Spirit of Speed', count: 26, color: '#b01c2e', description: 'Enchanting Italian design and motorsport-inspired tech.' },
  { id: 22, name: 'BENTLEY', sub: 'Be Extraordinary', count: 22, color: '#003020', description: 'The ultimate fusion of high power and hand-crafted luxury.' },
  { id: 23, name: 'ROLLS-ROYCE', sub: 'Strive for Perfection', count: 12, color: '#2b2b2b', description: 'Quiet elegance and the absolute peak of luxury travel.' },
  { id: 24, name: 'NISSAN', sub: 'Innovation that Excites', count: 88, color: '#c41130', description: 'Versatile Japanese engineering and performance icons.' },
  { id: 25, name: 'MAZDA', sub: 'Feel Alive', count: 54, color: '#910a1b', description: 'Jinba Ittai philosophy and award-winning design.' },
  { id: 26, name: 'SUBARU', sub: 'Confidence in Motion', count: 62, color: '#003399', description: 'Symmetrical All-Wheel Drive and rugged versatility.' },
]

const _WHEELS = [
  { id: 101, name: 'Vossen CV3-R 20"', price: 389.99, oldPrice: 459.99, brand: 'Vossen', rating: 4.8, reviews: 124, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'High-performance alloy wheels with a sleek monoblock design for superior handling.' },
  { id: 102, name: 'BBS RS-GT 19"', price: 312.50, oldPrice: 380.00, brand: 'BBS', rating: 4.9, reviews: 89, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'Multi-piece forged wheels offering classic styling and ultra-lightweight performance.' },
  { id: 103, name: 'HRE P101 21"', price: 544.00, oldPrice: 620.00, brand: 'HRE', rating: 4.7, reviews: 56, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'Masterpiece of engineering, providing the ultimate balance of strength and weight reduction.' },
  { id: 104, name: 'Rotiform LAS-R 18"', price: 228.00, oldPrice: 275.00, brand: 'Rotiform', rating: 4.6, reviews: 211, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'Iconic multi-spoke design perfect for street and track aesthetics.' },
]
export const WHEELS = _WHEELS.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))

const _SPARES = [
  { id: 201, name: 'Brembo GT Brake Kit', price: 879.00, oldPrice: 1050.00, brand: 'Brembo', rating: 4.9, reviews: 73, image: '/brake_product.png', fallback: PHOTOS.brakesRed, category: 'brakes', desc: 'Professional-grade braking system with vented discs for maximum stopping power.' },
  { id: 202, name: 'Akrapovič Exhaust Ti', price: 1240.00, oldPrice: 1499.00, brand: 'Akrapovič', rating: 5.0, reviews: 42, image: '/exhaust_product.png', fallback: PHOTOS.exhaustSmoke, category: 'exhaust', desc: 'Titanium exhaust system designed for enhanced torque and the signature deep sound.' },
  { id: 203, name: 'KW Variant 3 Coilover', price: 1890.00, oldPrice: 2200.00, brand: 'KW', rating: 4.8, reviews: 38, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'suspension', desc: 'Advanced coilover suspension for individual height and damping adjustment.' },
  { id: 204, name: 'AC Service & Regas Kit', price: 645.00, oldPrice: 780.00, brand: 'AutoMotive', rating: 4.7, reviews: 61, image: '/car_aircon.png', fallback: PHOTOS.workshop, category: 'aircon', desc: 'Complete regas and maintenance kit to restore cabin cooling efficiency.' },
  { id: 210, name: 'Air Conditioning Filter', price: 35.00, oldPrice: 45.00, brand: 'Toyota', rating: 4.8, reviews: 45, image: ac_filter, fallback: PHOTOS.aircon, category: 'engine', desc: 'High-efficiency cabin filter that removes dust and allergens for fresh interior air.' },
  { id: 211, name: 'Heavy Duty Car Jack', price: 85.00, oldPrice: 110.00, brand: 'Ford', rating: 4.9, reviews: 32, image: car_jack, fallback: PHOTOS.workshop, category: 'suspension', desc: 'Rugged hydraulic lifting tool with safety locks for secure vehicle maintenance.' },
  { id: 212, name: 'Engine Air Filter High-Flow', price: 42.00, oldPrice: 55.00, brand: 'Honda', rating: 4.7, reviews: 88, image: engine_filter, fallback: PHOTOS.engineBay, category: 'engine', desc: 'High-flow air filter that optimizes engine intake and improves fuel efficiency.' },
  { id: 213, name: 'Premium Oil Filter (Compact)', price: 22.00, oldPrice: 28.00, brand: 'Nissan', rating: 4.8, reviews: 102, image: oil_filter_1, fallback: PHOTOS.engineBay, category: 'engine', desc: 'Advanced multi-layer filtration to keep your engine oil clean and extend engine life.' },
  { id: 214, name: 'Premium Oil Filter (HD)', price: 25.00, oldPrice: 32.00, brand: 'BMW', rating: 4.9, reviews: 76, image: oil_filter_2, fallback: PHOTOS.engineBay, category: 'engine', desc: 'Industrial-strength filtration designed for high-performance and heavy-duty engines.' },
  { id: 215, name: 'High-Performance Belt', price: 48.00, oldPrice: 60.00, brand: 'Mercedes', rating: 4.7, reviews: 41, image: serpentine_belt, fallback: PHOTOS.engineBay, category: 'engine', desc: 'Durable, heat-resistant drive belt ensuring smooth operation of vital engine components.' },
  { id: 216, name: 'Iridium Spark Plugs Set', price: 58.00, oldPrice: 75.00, brand: 'Audi', rating: 5.0, reviews: 156, image: spark_plugs, fallback: PHOTOS.engineBay, category: 'engine', desc: 'High-grade iridium spark plugs for reliable ignition and optimal fuel combustion.' },
]
export const SPARES = _SPARES.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))

const _EXTRA_PRODUCTS = [
  { id: 105, name: 'ADV.1 7.1 Track 22"', price: 612.00, oldPrice: 740.00, brand: 'ADV.1', rating: 4.8, reviews: 31, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 106, name: 'Work Emotion ZR10 17"', price: 195.00, oldPrice: 240.00, brand: 'Work', rating: 4.5, reviews: 156, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 205, name: 'EBC Ultimax Brake Pads', price: 89.99, oldPrice: 110.00, brand: 'EBC', rating: 4.6, reviews: 344, image: '/brake_product.png', fallback: PHOTOS.brakesRed, category: 'brakes' },
  { id: 206, name: 'Auto Electrical Diagnostic', price: 320.00, oldPrice: 390.00, brand: 'AutoMotive', rating: 4.7, reviews: 88, image: '/car_aircon.png', fallback: PHOTOS.workshop, category: 'electrical' },
  { id: 301, name: 'Formula One Tyres 205/55 R16', price: 31.32, oldPrice: 45.00, brand: 'Formula One', rating: 4.4, reviews: 512, image: '/tyre_product.png', fallback: PHOTOS.tyreDetail, category: 'tyres', featured: true },
  { id: 302, name: 'Pirelli P Zero 245/35 R19', price: 189.00, oldPrice: 225.00, brand: 'Pirelli', rating: 4.9, reviews: 201, image: '/tyre_product.png', fallback: PHOTOS.tyreDetail, category: 'tyres' },
  { id: 303, name: 'Michelin Pilot Sport 4', price: 165.00, oldPrice: 198.00, brand: 'Michelin', rating: 4.8, reviews: 388, image: '/tyre_product.png', fallback: PHOTOS.tyreDetail, category: 'tyres' },
  { id: 401, name: 'AC Vulcanizing Service', price: 45.00, oldPrice: 65.00, brand: 'AutoMotive', rating: 4.9, reviews: 203, image: '/tyre_product.png', fallback: PHOTOS.tyreDetail, category: 'tyres' },
  { id: 402, name: 'Brembo Ceramic Pads', price: 125.00, oldPrice: 150.00, brand: 'Brembo', rating: 4.8, reviews: 140, image: '/brake_product.png', fallback: PHOTOS.brakesRed, category: 'brakes' },
  { id: 403, name: 'HRE Wheels Cleaning Kit', price: 25.00, oldPrice: 30.00, brand: 'HRE', rating: 4.5, reviews: 299, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 404, name: 'Akrapovič Carbon Tip', price: 150.00, oldPrice: 180.00, brand: 'Akrapovič', rating: 5.0, reviews: 85, image: '/exhaust_product.png', fallback: PHOTOS.exhaustSmoke, category: 'exhaust' },
]

export const ALL_PRODUCTS = [
  ...WHEELS,
  ...SPARES,
  ..._EXTRA_PRODUCTS.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))
]

// Gallery — each item has a real Unsplash image URL
export const GALLERY_ITEMS = [
  { id: 1, image: PHOTOS.ferrariRed,   label: 'Ferrari Track Day',  portrait: true },
  { id: 2, image: PHOTOS.drift,        label: 'Drift Sessions' },
  { id: 3, image: PHOTOS.workshop,     label: 'Our Service Bay' },
  { id: 4, image: PHOTOS.wheelClose,   label: 'Wheel Details',      portrait: true },
  { id: 5, image: PHOTOS.tyreDetail,   label: 'Tyre Collection' },
  { id: 6, image: PHOTOS.brakesRed,    label: 'Brembo Brakes' },
]

// Visuals full page
export const VISUALS_GALLERY = [
  { id: 1,  image: n1, label: 'Exotic Dream',   category: 'Exotic Cars' },
  { id: 2,  image: d1, label: 'Drift King',     category: 'Drift' },
  { id: 3,  image: t1, label: 'Track Ready',    category: 'Track' },
  { id: 4,  image: w1, label: 'Alloy Wheels',   category: 'Wheels' },
  { id: 5,  image: s1, label: 'Street Style',   category: 'Street' },
  { id: 6,  image: n2, label: 'Speed Demon',    category: 'Exotic Cars' },
  { id: 7,  image: d2, label: 'Smoke Show',     category: 'Drift' },
  { id: 8,  image: t2, label: 'Time Attack',    category: 'Track' },
  { id: 9,  image: n3, label: 'Premium Class',  category: 'Exotic Cars' },
  { id: 10, image: s2, label: 'City Night',     category: 'Street' },
]

export const SERVICES = [
  { id: 1, title: 'Air-Conditioning Service', desc: 'Full automobile AC diagnostics, servicing, regas and repair. Keeping your cabin cool and comfortable all year round.', icon: 'snowflake', image: ac_filter },
  { id: 2, title: 'Vulcanizing Service', desc: 'Professional tyre vulcanizing, puncture repair, wheel balancing and replacement. Back on the road in no time.', icon: 'wrench', image: PHOTOS.tyreDetail },
  { id: 3, title: 'Auto Electrical Service', desc: 'Complete auto electrical diagnostics, fault finding, wiring repairs, battery service and ECU programming for all vehicle makes.', icon: 'zap', image: s2 },
]

export const FEATURED_PRODUCT = ALL_PRODUCTS.find(p => p.featured)
