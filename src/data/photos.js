// ─── Real photo URLs from Unsplash (free, no key needed) ───────────────────
const U = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

// ── Car photos ───────────────────────────────────────────────────────────────
export const PHOTOS = {
  heroCar:          U('1544636331-9cd3573f4a55', 1400, 900),  // silver sports car
  porscheTrack:     U('1503376780353-7e6692767b70', 900, 600), // Porsche on track
  ferrariRed:       U('1583121274602-3e2820c69888', 900, 600), // red Ferrari
  drift:            U('1568605117036-5c6ef4c9f00e', 900, 600), // car drifting / smoke
  workshop:         U('1487754180451-c456f719a190', 900, 600), // mechanic workshop
  nightStreet:      U('1525609004556-c31cf5f6c21b', 900, 600), // car on wet night road
  engineBay:        U('1517524285303-d6fc683dddf8', 900, 600), // engine bay detail
  wheelClose:       U('1558618666-fcd25c85cd64', 900, 600),    // alloy wheel close-up
  tyreDetail:       U('1541348263662-e068662d82af', 900, 600), // tyre detail
  brakesRed:        U('1591940742878-13aba4afd0b8', 900, 600), // brake disc detail
  lamboYellow:      U('1544636331-9cd3573f4a55', 900, 600),    // yellow supercar
  carInterior:      U('1503736334956-4c8f8e4f4d7a', 900, 600), // cockpit/interior
  raceTrackWide:    U('1546614042-7df3c24c9e5d', 900, 600),    // wide race track
  carWash:          U('1520340561864-9e7bb5f9e6e8', 900, 600), // car cleaning detail
  exhaustSmoke:     U('1568605117036-5c6ef4c9f00e', 900, 600), // exhaust/smoke
  aircon:           U('1487754180451-c456f719a190', 900, 600), // workshop/service
  sportsCarBlack:   U('1555215695-3004980ad54d', 900, 600),    // black sports car
  carCollage:       U('1536700518-daced8d26c33', 900, 600),    // multiple cars
}
