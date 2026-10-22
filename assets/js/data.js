/* Radhe Dhokla — site data
   Outlets: Google Maps research, Oct 2026. Prices: Anand master menu (Gujarat) + Surat farsan rate card.
   Prices are indicative; the outlet confirms the final bill on WhatsApp. */
window.RD = window.RD || {};

RD.whatsappCentral = "918140000161";

RD.states = [
  { id: "gujarat", name: "Gujarat", gu: "ગુજરાત", cities: ["surat", "navsari", "vadodara", "anand", "ahmedabad"] },
  { id: "maharashtra", name: "Maharashtra", gu: "મહારાષ્ટ્ર", cities: ["mumbai"] }
];

RD.cities = {
  surat: { name: "Surat", gu: "સુરત", since: 1995, note: "Where it all began", price: "surat" },
  navsari: { name: "Navsari", gu: "નવસારી", price: "gujarat" },
  vadodara: { name: "Vadodara", gu: "વડોદરા", price: "gujarat" },
  anand: { name: "Anand", gu: "આણંદ", price: "gujarat" },
  ahmedabad: { name: "Ahmedabad", gu: "અમદાવાદ", price: "gujarat" },
  mumbai: { name: "Mumbai", gu: "મુંબઈ", price: "mumbai" }
};

/* phone: digits with country code, for WhatsApp */
RD.outlets = [
  { id: "nanpura", city: "surat", name: "Nanpura", area: "Kotwal Street, Kharwawad", address: "1-803-B, Kotwal Street, Kharwawad, Nanpura, Surat", phone: "917069720002", display: "+91 70697 20002", rating: 4.8, reviews: 2149, hours: "7 AM – 11 PM" },
  { id: "rustampura", city: "surat", name: "Ring Road", area: "Rustampura", address: "Singapuri Wadi, behind 21st Century Building, Ring Road, Rustampura, Surat", phone: "919586871112", display: "+91 95868 71112", rating: 4.8, reviews: 2785, hours: "7 AM – 2 AM" },
  { id: "katargam", city: "surat", name: "Katargam", area: "Singanpore Char Rasta", address: "B-16/17, Balvant Nagar, near Nilkanth School, Singanpore Char Rasta, Katargam, Surat", phone: "917046546565", display: "+91 70465 46565", rating: 4.8, reviews: 3357, hours: "7 AM – 10 PM" },
  { id: "adajan", city: "surat", name: "Adajan", area: "Honey Park Road", address: "Shop 23, Darshan Park Society, Chandrashekhar Azad Marg, Jogani Nagar, Adajan, Surat", phone: "919726606566", display: "+91 97266 06566", rating: 4.5, reviews: 3550, hours: "7 AM – 11 PM", sevanand: true },
  { id: "vesu", city: "surat", name: "Vesu", area: "Atlanta Shoppers", address: "G-1/2, Atlanta Shoppers, near Reliance Market, Vesu, Surat", phone: "918320552050", display: "+91 83205 52050", rating: 4.6, reviews: 2741, hours: "7 AM – 11 PM" },
  { id: "citylight", city: "surat", name: "City Light", area: "Athwa", address: "GD-1, Bhagwati Ashish, below Union Bank, opp. Ashok Pan, City Light Road, Surat", phone: "919484533334", display: "+91 94845 33334", rating: 4.6, reviews: 1711, hours: "7 AM – 2 AM" },
  { id: "navsari", city: "navsari", name: "Charpul", area: "Opp. Lunsikui Ground", address: "Ground Floor, Parikrama Apartment, beside SBI, opp. Lunsikui Ground, Navsari", phone: "919586044492", display: "+91 95860 44492", rating: 4.8, reviews: 1304, hours: "7 AM – 11 PM" },
  { id: "tandalja", city: "vadodara", name: "Old Padra Road", area: "Tandalja", address: "GF, Sapphire Complex, beside Croma, Tandalja, Vadodara", phone: "919586044497", display: "+91 95860 44497", rating: 4.7, reviews: 2431, hours: "7 AM – 2 AM" },
  { id: "manjalpur", city: "vadodara", name: "Manjalpur", area: "Tulsidham Char Rasta", address: "G-1/2, Veer Enclave, near Tulsidham Char Rasta, Manjalpur, Vadodara", phone: "919586044497", display: "+91 95860 44497", rating: 4.5, reviews: 129, hours: "7 AM – 11 PM" },
  { id: "anand", city: "anand", name: "Vallabh Vidyanagar", area: "Near ISKCON Temple", address: "Ground Floor, Kamalam Elite, near ISKCON Temple, Mota Bazaar, Anand", phone: "919586044496", display: "+91 95860 44496", rating: 4.5, reviews: 1066, hours: "7 AM – 11 PM" },
  { id: "navrangpura", city: "ahmedabad", name: "Navrangpura", area: "HL College Road", address: "GF-2, Karmyog Heights, College Road, Navrangpura, Ahmedabad", phone: "918238823337", display: "+91 82388 23337", rating: 4.5, reviews: 523, hours: "7 AM – 11 PM" },
  { id: "vastrapur", city: "ahmedabad", name: "Vastrapur", area: "Opp. the fountain", address: "Shop 1, I.M. Complex, opp. Fountain, Vastrapur, Ahmedabad", phone: "919586380406", display: "+91 95863 80406", rating: 4.4, reviews: 1232, hours: "7 AM – 2 AM" },
  { id: "chandkheda", city: "ahmedabad", name: "Chandkheda", area: "Tragad Road", address: "GF-5, The Landmark, Tragad Road, opp. KB Royal Phoenix, Chandkheda, Ahmedabad", phone: "919586044491", display: "+91 95860 44491", rating: 4.6, reviews: 991, hours: "7 AM – 11 PM" },
  { id: "andheri", city: "mumbai", name: "Andheri East", area: "Old Nagardas Road", address: "Old Nagardas Road, opp. Chinai College, Andheri East, Mumbai", phone: "919152000523", display: "+91 91520 00523", rating: 4.6, reviews: 2000, hours: "7 AM – 2 AM" },
  { id: "kandivali", city: "mumbai", name: "Kandivali West", area: "Mahavir Nagar", address: "Opp. SBI, Suryadarshan Society, Mahavir Nagar, Kandivali West, Mumbai", phone: "919076101000", display: "+91 90761 01000", rating: 4.3, reviews: 2269, hours: "7 AM – 11 PM", sevanand: true },
  { id: "malad", city: "mumbai", name: "Malad West", area: "Near Liberty Garden", address: "Ramchandra Lane, near Liberty Garden, beside Sun Hospital, Malad West, Mumbai", phone: "916359900080", display: "+91 63599 00080", rating: 4.2, reviews: 274, hours: "7:30 AM – 11 PM" },
  { id: "ghatkopar", city: "mumbai", name: "Ghatkopar East", area: "MG Road", address: "Billi Bungalow, MG Road, near Rajawadi signal, Ghatkopar East, Mumbai", phone: "919825306868", display: "+91 98253 06868", rating: 4.2, reviews: 583, hours: "10 AM – 9 PM" },
  { id: "mulund", city: "mumbai", name: "Mulund West", area: "Pandit J. Nehru Road", address: "Prem Nagar Legacy, Pandit Jawaharlal Nehru Road, Mulund West, Mumbai", phone: "919737000523", display: "+91 97370 00523", rating: 4.3, reviews: 262, hours: "7 AM – 11 PM" }
];

RD.outletsByCity = function (cityId) { return RD.outlets.filter(function (o) { return o.city === cityId; }); };
RD.totalReviews = RD.outlets.reduce(function (a, o) { return a + o.reviews; }, 0);

/* ---------- MENU ----------
   units: "plate" | "kg" | "300" | "500" | "1000" (g/ml) | "pc" | "12pc" | "500ml" | "1000ml" | "thali"
   price: { unit: ₹ }  — gujarat (Anand master); surat overrides for farsan; mumbai uses gujarat prices unless set */
RD.unitLabel = { plate: "Plate", kg: "1 kg", "300": "300 g", "500": "500 g", "1000": "1 kg", pc: "Piece", "12pc": "12 pcs", "500ml": "500 ml", "1000ml": "1 L", thali: "Thali", "2pav": "500 g + 2 pav", "4pav": "1 kg + 4 pav", "6pc": "6 pcs" };

RD.menu = [
  { id: "dhokla", name: "Live Corn Dhokla", gu: "કોર્ન ઢોકળા", note: "Our speciality · steamed live, cut to order", items: [
    { n: "Garlic Corn Dhokla", img: "butter-corn-dhokla", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } },
    { n: "Jain Corn Dhokla", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } },
    { n: "Khatta Mitha Dhokla", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } },
    { n: "Jeera Corn Dhokla", p: { plate: 60, kg: 280 }, surat: { plate: 40, kg: 260 } },
    { n: "Butter Corn Dhokla", img: "butter-corn-dhokla", p: { plate: 60, kg: 300 }, surat: { plate: 45, kg: 280 } },
    { n: "Cheese Butter Dhokla", p: { plate: 75, kg: 380 }, surat: { plate: 60, kg: 360 } },
    { n: "Vegetable Corn Dhokla", p: { plate: 60, kg: 280 }, surat: { plate: 40, kg: 260 } },
    { n: "Schezwan Tawa Dhokla", img: "schezwan-tawa-dhokla", p: { plate: 75, kg: 360 }, surat: { plate: 60, kg: 320 } },
    { n: "Italian Corn Dhokla", p: { plate: 70, kg: 360 } },
    { n: "Green Garlic Dhokla", p: { plate: 75, kg: 360 }, surat: { plate: 60, kg: 320 } }
  ]},
  { id: "khaman", name: "Khaman", gu: "ખમણ", note: "Vatidal khaman · the Surti classic", items: [
    { n: "Plain Live Khaman", img: "plain-khaman", p: { kg: 200 }, surat: { kg: 140 } },
    { n: "Oil Masala Khaman", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } },
    { n: "Vagharela Khaman", img: "vagharela-khaman", p: { plate: 50, kg: 260 }, surat: { plate: 40, kg: 260 } },
    { n: "Tam Tam Khaman", img: "tam-tam-khaman", p: { plate: 75, kg: 340 }, surat: { plate: 60, kg: 300 } },
    { n: "Green Tadka Khaman", img: "green-tadka-khaman", p: { plate: 75, kg: 340 }, surat: { plate: 60, kg: 300 } },
    { n: "Sev Khamani", p: { plate: 55, kg: 300 } }
  ]},
  { id: "idada", name: "Idada (White Dhokla)", gu: "ઈદડા", note: "Soft, white, fermented rice dhokla", items: [
    { n: "Nylon Idada", p: { kg: 200 }, surat: { kg: 140 } },
    { n: "Oil Masala Idada", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } },
    { n: "Vagharela Idada", p: { plate: 50, kg: 260 } },
    { n: "Butter Masala Idada", img: "butter-masala-idada", p: { plate: 55, kg: 300 }, surat: { plate: 45, kg: 280 } },
    { n: "Cheese Masala Idada", p: { plate: 70, kg: 380 }, surat: { plate: 60, kg: 340 } }
  ]},
  { id: "locho", name: "Locho", gu: "લોચો", note: "Surat's soft steamed besan, loaded", items: [
    { n: "Oil Locho", p: { plate: 55, kg: 300 }, surat: { plate: 45, kg: 260 } },
    { n: "Butter Locho", img: "butter-locho", p: { plate: 65, kg: 340 }, surat: { plate: 55, kg: 300 } },
    { n: "Cheese Butter Locho", p: { plate: 80, kg: 420 }, surat: { plate: 70, kg: 380 } }
  ]},
  { id: "patra", name: "Patra & Patudi", gu: "પાતરા · પાતુડી", items: [
    { n: "Kacha Patra", p: { kg: 260 } },
    { n: "Vagharela Patra", p: { plate: 60, kg: 300 } },
    { n: "Green Garlic Patra", p: { plate: 75, kg: 380 } },
    { n: "Patudi (Khandvi)", img: "patudi-khandvi", p: { plate: 50, kg: 260 }, surat: { plate: 35, kg: 240 } }
  ]},
  { id: "samosa", name: "Samosa & Patis", gu: "સમોસા · પેટીસ", items: [
    { n: "Dal Onion Samosa", img: "dal-samosa", p: { plate: 65, kg: 340 }, surat: { plate: 45, kg: 280 } },
    { n: "Jain Samosa", p: { plate: 65, kg: 340 } },
    { n: "Cheese Paneer Samosa", img: "cheese-paneer-samosa", p: { plate: 90, kg: 600 }, surat: { plate: 80, kg: 600 } },
    { n: "Kacha Samosa (non-fry)", p: { kg: 300 }, surat: { kg: 240 } },
    { n: "Fry Patis", p: { plate: 55, kg: 340 }, surat: { plate: 40, kg: 280 } },
    { n: "Non-fry Patis", p: { kg: 300 }, surat: { kg: 240 } }
  ]},
  { id: "pavbhaji", name: "Pav Bhaji", gu: "પાવભાજી", note: "Served 5 PM – 11 PM", items: [
    { n: "Oil Pav Bhaji", p: { "2pav": 140, "4pav": 260 } },
    { n: "Butter Pav Bhaji", img: "butter-pav-bhaji", p: { "2pav": 155, "4pav": 280 } },
    { n: "Swaminarayan Pav Bhaji", p: { "2pav": 150, "4pav": 270 } },
    { n: "Pure Jain Pav Bhaji", p: { "2pav": 150, "4pav": 270 } },
    { n: "Butter Pav", p: { "12pc": 90 } },
    { n: "Oil Pav", p: { "12pc": 75 } }
  ]},
  { id: "chinese", name: "Chinese", gu: "ચાઈનીઝ", note: "Chinese ki chahat · by the kilo", items: [
    { n: "Veg Manchurian Dry", img: "veg-manchurian", p: { "300": 100, "500": 140, "1000": 260 } },
    { n: "Veg Manchurian Gravy", p: { "300": 100, "500": 140, "1000": 260 } },
    { n: "Schezwan Manchurian", p: { "300": 105, "500": 150, "1000": 280 } },
    { n: "Paneer Chilly Dry", p: { "500": 230 } },
    { n: "Veg Crispy", p: { "500": 195 } },
    { n: "Veg Lollipop (6 pcs)", p: { "6pc": 200 } },
    { n: "Hakka Noodles", img: "hakka-noodles", p: { "500": 155, "1000": 300 } },
    { n: "Schezwan Noodles", p: { "500": 165, "1000": 320 } },
    { n: "Chilly Garlic Noodles", img: "chilly-garlic-noodles", p: { "500": 175, "1000": 340 } },
    { n: "Veg Fried Rice", p: { "500": 155, "1000": 300 } },
    { n: "Schezwan Fried Rice", p: { "500": 170, "1000": 330 } },
    { n: "American Corn Fried Rice", p: { "500": 185, "1000": 360 } },
    { n: "Triple Schezwan Rice", p: { "500": 205, "1000": 400 } }
  ]},
  { id: "punjabi", name: "Punjabi Sabzi", gu: "પંજાબી શાક", note: "300 g · 500 g · 1 kg", items: [
    { n: "Veg Kolhapuri", p: { "300": 120, "500": 185, "1000": 350 } },
    { n: "Veg Kadai", p: { "300": 125, "500": 190, "1000": 360 } },
    { n: "Veg Makkhanwala", p: { "300": 130, "500": 200, "1000": 380 } },
    { n: "Veg Toofani", p: { "300": 130, "500": 200, "1000": 380 } },
    { n: "Radhe Lajwab", p: { "300": 170, "500": 255, "1000": 490 } },
    { n: "Chana Masala", p: { "300": 95, "500": 150, "1000": 280 } },
    { n: "Jeera Aloo", p: { "300": 85, "500": 130, "1000": 240 } },
    { n: "Mushroom Masala", p: { "300": 145, "500": 215, "1000": 400 } }
  ]},
  { id: "paneer", name: "Paneer", gu: "પનીર", note: "300 g · 500 g · 1 kg", items: [
    { n: "Paneer Butter Masala", p: { "300": 150, "500": 220, "1000": 420 } },
    { n: "Paneer Tikka Masala", p: { "300": 155, "500": 230, "1000": 440 } },
    { n: "Paneer Lababdar", p: { "300": 160, "500": 235, "1000": 450 } },
    { n: "Palak Paneer", p: { "300": 145, "500": 215, "1000": 400 } },
    { n: "Paneer Angara", p: { "300": 165, "500": 245, "1000": 470 } },
    { n: "Paneer Bhurji", p: { "300": 160, "500": 240, "1000": 460 } },
    { n: "Cheese Butter Masala", p: { "300": 180, "500": 265, "1000": 500 } },
    { n: "Kaju Curry", p: { "300": 185, "500": 255, "1000": 480 } },
    { n: "Malai Kofta", p: { "500": 240, "1000": 460 } }
  ]},
  { id: "ghee", name: "Desi Ghee Parampara", gu: "દેશી ઘી પરંપરા", note: "Cooked in pure desi ghee", items: [
    { n: "Vegies Aur Ghee Ka Khazana", p: { "300": 185, "500": 250, "1000": 480 } },
    { n: "Ghee Wali Veg Handi", p: { "300": 195, "500": 260, "1000": 500 } },
    { n: "Paneer Aur Ghee Ka Khazana", p: { "300": 195, "500": 260, "1000": 500 } },
    { n: "Shahi Ghee Paneer", p: { "300": 215, "500": 280, "1000": 540 } },
    { n: "Ghee Tadka Dal", p: { "300": 150, "500": 215, "1000": 410 } },
    { n: "Shahi Ghee Dum Biryani", p: { "500": 185, "1000": 380 } }
  ]},
  { id: "rice", name: "Rice, Dal & Biryani", gu: "ભાત · દાળ · બિરયાની", items: [
    { n: "Jeera Rice", p: { "300": 105, "500": 145, "1000": 250 } },
    { n: "Dal Fry", p: { "300": 95, "500": 140, "1000": 260 } },
    { n: "Dal Tadka", p: { "300": 100, "500": 150, "1000": 280 } },
    { n: "Dal Khichdi", p: { "300": 110, "500": 160, "1000": 300 } },
    { n: "Veg Pulao (with chutney)", p: { "300": 100, "500": 155, "1000": 300 } },
    { n: "Tawa Pulao", p: { "300": 115, "500": 195, "1000": 380 } },
    { n: "Special Dum Biryani", p: { "500": 220, "1000": 400 } }
  ]},
  { id: "breads", name: "Tandoori Breads", gu: "તંદૂરી રોટી", items: [
    { n: "Butter Roti", p: { pc: 22 } }, { n: "Plain Roti", p: { pc: 20 } },
    { n: "Butter Naan", p: { pc: 35 } }, { n: "Garlic Naan", p: { pc: 50 } },
    { n: "Cheese Butter Naan", p: { pc: 70 } }, { n: "Lacha Paratha", p: { pc: 50 } },
    { n: "Butter Kulcha", p: { pc: 40 } }, { n: "Stuff Kulcha", p: { pc: 90 } },
    { n: "Butter Chapati", p: { pc: 15 } }, { n: "Plain Chapati", p: { pc: 13 } }
  ]},
  { id: "starters", name: "Tandoori Starters & Soups", gu: "સ્ટાર્ટર · સૂપ", items: [
    { n: "Paneer Tikka Dry", p: { plate: 220 } }, { n: "Paneer Pahadi Tikka", p: { plate: 220 } },
    { n: "Veg Seekh Kabab", p: { plate: 215 } }, { n: "Veg Harabhara Kabab", p: { plate: 220 } },
    { n: "Manchow Soup", p: { "500ml": 120, "1000ml": 230 } }, { n: "Hot & Sour Soup", p: { "500ml": 120, "1000ml": 230 } },
    { n: "Lemon Coriander Soup", p: { "500ml": 115, "1000ml": 220 } }
  ]},
  { id: "thali", name: "Thali", gu: "થાળી", note: "Lunch only · 10:30 AM – 3 PM · ₹12 packing extra", items: [
    { n: "Regular Thali", p: { thali: 145 } },
    { n: "Radhe Special Thali", p: { thali: 169 }, sub: "adds Gulab Jamun + Corn Dhokla" }
  ]}
];
