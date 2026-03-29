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

export const BRANDS = [
  { id: 1, name: 'FERRARI', sub: 'Italian Excellence', count: 48, color: '#cc0000', description: 'Prancing horse engineering — from Maranello to your garage.' },
  { id: 2, name: 'LAMBORGHINI', sub: 'Raging Bull Performance', count: 36, color: '#f5c518', description: "Unmatched aggression. Pure Sant'Agata DNA." },
  { id: 3, name: 'PORSCHE', sub: 'Engineering Precision', count: 62, color: '#aaaaaa', description: "Stuttgart's finest — precision engineered for every road." },
  { id: 4, name: 'BMW', sub: 'Bavarian Motor Works', count: 94, color: '#0066b1', description: 'Ultimate driving machine parts, straight from Bavaria.' },
  { id: 5, name: 'MERCEDES', sub: 'German Luxury', count: 88, color: '#c0c0c0', description: 'Three-pointed star excellence. Built to the highest standard.' },
  { id: 6, name: 'ASTON MARTIN', sub: 'British Elegance', count: 28, color: '#004f3f', description: "Bond's choice. Britain's most beautiful automotive art." },
]

const _WHEELS = [
  { id: 101, name: 'Vossen CV3-R 20"', price: 389.99, oldPrice: 459.99, brand: 'Vossen', rating: 4.8, reviews: 124, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 102, name: 'BBS RS-GT 19"', price: 312.50, oldPrice: 380.00, brand: 'BBS', rating: 4.9, reviews: 89, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 103, name: 'HRE P101 21"', price: 544.00, oldPrice: 620.00, brand: 'HRE', rating: 4.7, reviews: 56, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
  { id: 104, name: 'Rotiform LAS-R 18"', price: 228.00, oldPrice: 275.00, brand: 'Rotiform', rating: 4.6, reviews: 211, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'wheels' },
]
export const WHEELS = _WHEELS.map(p => ({ ...p, price: p.price * 14.5, oldPrice: p.oldPrice * 14.5 }))

const _SPARES = [
  { id: 201, name: 'Brembo GT Brake Kit', price: 879.00, oldPrice: 1050.00, brand: 'Brembo', rating: 4.9, reviews: 73, image: '/brake_product.png', fallback: PHOTOS.brakesRed, category: 'brakes' },
  { id: 202, name: 'Akrapovič Exhaust Ti', price: 1240.00, oldPrice: 1499.00, brand: 'Akrapovič', rating: 5.0, reviews: 42, image: '/exhaust_product.png', fallback: PHOTOS.exhaustSmoke, category: 'exhaust' },
  { id: 203, name: 'KW Variant 3 Coilover', price: 1890.00, oldPrice: 2200.00, brand: 'KW', rating: 4.8, reviews: 38, image: '/wheel_product.png', fallback: PHOTOS.wheelClose, category: 'suspension' },
  { id: 204, name: 'AC Service & Regas Kit', price: 645.00, oldPrice: 780.00, brand: 'AutoMotive', rating: 4.7, reviews: 61, image: '/car_aircon.png', fallback: PHOTOS.workshop, category: 'aircon' },
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
  { id: 1, title: 'Air-Conditioning Service', desc: 'Full automobile AC diagnostics, servicing, regas and repair. Keeping your cabin cool and comfortable all year round.', icon: 'snowflake', image: PHOTOS.aircon },
  { id: 2, title: 'Vulcanizing Service', desc: 'Professional tyre vulcanizing, puncture repair, wheel balancing and replacement. Back on the road in no time.', icon: 'wrench', image: PHOTOS.tyreDetail },
  { id: 3, title: 'Auto Electrical Service', desc: 'Complete auto electrical diagnostics, fault finding, wiring repairs, battery service and ECU programming for all vehicle makes.', icon: 'zap', image: PHOTOS.workshop },
]

export const FEATURED_PRODUCT = ALL_PRODUCTS.find(p => p.featured)
