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

// Service images
import vulcanizing_img from '../assets/exotic cars/vulcanizing.png'
import electrical_img from '../assets/exotic cars/electrical.png'
import aircon_img from '../assets/exotic cars/aircon.png'

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
  { id: 101, name: 'Vossen CV3-R 20"', price: 389.99, oldPrice: 459.99, brand: 'Vossen', rating: 4.8, reviews: 124, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'High-performance alloy wheels with a sleek monoblock design for superior handling.', use: 'These wheels are mounted on the vehicle axles and serve as the structural support for tyres, significantly impacting cornering stability and aesthetic appeal.' },
  { id: 102, name: 'BBS RS-GT 19"', price: 312.50, oldPrice: 380.00, brand: 'BBS', rating: 4.9, reviews: 89, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels', desc: 'Multi-piece forged wheels offering classic styling and ultra-lightweight performance.', use: 'Primarily used in sports and luxury vehicles to reduce unsprung weight, thereby improving suspension response and acceleration.' },
]
export const WHEELS = _WHEELS.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))

const _SPARES = [
  { id: 401, name: 'Vulcanizing Service', price: 45.00, oldPrice: 65.00, brand: 'AutoMotive', rating: 4.9, reviews: 203, image: vulcanizing_img, fallback: PHOTOS.tyreDetail, category: 'service', desc: 'Professional tyre vulcanizing and puncture repair using high-temperature bonding techniques.', use: 'Automobile tyres are vulcanized to repair deep punctures or sidewall damage by applying heat and specialized rubber patches, ensuring structural integrity and safety on the road.' },
  { id: 206, name: 'Auto Electrical Service', price: 320.00, oldPrice: 390.00, brand: 'AutoMotive', rating: 4.7, reviews: 88, image: electrical_img, fallback: PHOTOS.workshop, category: 'service', desc: 'Complete auto electrical diagnostics, fault finding, and wiring repairs.', use: 'This service is vital for modern vehicles to troubleshoot issues with the ECU, battery charging systems, lighting, and electronic sensors using advanced diagnostic tools like multimeters.' },
  { id: 204, name: 'Aircondition Services', price: 645.00, oldPrice: 780.00, brand: 'AutoMotive', rating: 4.7, reviews: 61, image: aircon_img, fallback: PHOTOS.workshop, category: 'service', desc: 'Full automobile AC diagnostics, servicing, regas and repair.', use: 'Used to maintain the vehicle climate control system. Manifold gauges monitor pressure levels to ensure the correct refrigerant charge, preventing compressor failure and ensuring cabin cooling.' },
  { id: 210, name: 'Air Conditioning Filter', price: 35.00, oldPrice: 45.00, brand: 'Toyota', rating: 4.8, reviews: 45, image: ac_filter, fallback: PHOTOS.aircon, category: 'engine', desc: 'High-efficiency cabin filter that removes dust and allergens for fresh interior air.', use: 'Installed in the HVAC housing, it filters incoming air before it reaches the cabin, protecting passengers from pollutants and keeping the evaporator core clean.' },
  { id: 211, name: 'Heavy Duty Car Jack', price: 85.00, oldPrice: 110.00, brand: 'Ford', rating: 4.9, reviews: 32, image: car_jack, fallback: PHOTOS.workshop, category: 'suspension', desc: 'Rugged hydraulic lifting tool with safety locks for secure vehicle maintenance.', use: 'The jack is placed under the vehicle chassis at designated points to lift the car, allowing for tyre changes, brake inspections, and undercarriage repairs.' },
  { id: 212, name: 'Engine Air Filter', price: 42.00, oldPrice: 55.00, brand: 'Honda', rating: 4.7, reviews: 88, image: engine_filter, fallback: PHOTOS.engineBay, category: 'engine', desc: 'High-flow air filter that optimizes engine intake and improves fuel efficiency.', use: 'Sits inside the air intake box to trap dirt and debris before air enters the combustion chamber, ensuring a clean air-fuel mixture and preventing engine wear.' },
  { id: 213, name: 'Premium Oil Filter', price: 22.00, oldPrice: 28.00, brand: 'Nissan', rating: 4.8, reviews: 102, image: oil_filter_1, fallback: PHOTOS.engineBay, category: 'engine', desc: 'Advanced multi-layer filtration to keep your engine oil clean and extend engine life.', use: 'Connected to the engine block, it continuously cleans the engine oil by trapping metallic particles and sludge produced during internal combustion.' },
  { id: 216, name: 'Iridium Spark Plugs Set', price: 58.00, oldPrice: 75.00, brand: 'Audi', rating: 5.0, reviews: 156, image: spark_plugs, fallback: PHOTOS.engineBay, category: 'engine', desc: 'High-grade iridium spark plugs for reliable ignition and optimal fuel combustion.', use: 'Screwed into the cylinder head, these plugs create an electrical spark that ignites the compressed air-fuel mixture to power the engine cycles.' },
]
export const SPARES = _SPARES.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))

const _EXTRA_PRODUCTS = [
  { id: 105, name: 'ADV.1 7.1 Track 22"', price: 612.00, oldPrice: 740.00, brand: 'ADV.1', rating: 4.8, reviews: 31, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 301, name: 'Formula One Tyres 205/55 R16', price: 31.32, oldPrice: 45.00, brand: 'Formula One', rating: 4.4, reviews: 512, image: '/tyre_product.png', fallback: PHOTOS.tyreDetail, category: 'tyres', featured: true },
]

export const ALL_PRODUCTS = [
  ...WHEELS,
  ...SPARES,
  ..._EXTRA_PRODUCTS.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))
]

// Gallery
export const GALLERY_ITEMS = [
  { id: 1, image: PHOTOS.ferrariRed,   label: 'Ferrari Track Day',  portrait: true },
  { id: 2, image: PHOTOS.drift,        label: 'Drift Sessions' },
  { id: 3, image: PHOTOS.workshop,     label: 'Our Service Bay' },
  { id: 4, image: PHOTOS.wheelClose,   label: 'Wheel Details',      portrait: true },
  { id: 5, image: PHOTOS.tyreDetail,   label: 'Tyre Collection' },
  { id: 6, image: PHOTOS.brakesRed,    label: 'Brembo Brakes' },
]

export const SERVICES = [
  { id: 1, title: 'Air-Conditioning Service', desc: 'Full automobile AC diagnostics, servicing, regas and repair. Keeping your cabin cool and comfortable all year round.', icon: 'snowflake', image: aircon_img },
  { id: 2, title: 'Vulcanizing Service', desc: 'Professional tyre vulcanizing, puncture repair, wheel balancing and replacement. Back on the road in no time.', icon: 'wrench', image: vulcanizing_img },
  { id: 3, title: 'Auto Electrical Service', desc: 'Complete auto electrical diagnostics, fault finding, wiring repairs, battery service and ECU programming for all vehicle makes.', icon: 'zap', image: electrical_img },
]

export const FEATURED_PRODUCT = ALL_PRODUCTS.find(p => p.featured)
