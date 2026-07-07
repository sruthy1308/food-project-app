const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const Restaurant = require("./models/restaurant");

const restaurants = [
  {
    name: "Haldiram's",
    isVeg: true,
    address: "123 Main Street, City Center, Mumbai, India",
    ratings: 3.5,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [72.8777, 19.076] },
    reviews: [{"name":"Aditya 1","rating":5,"Comment":"Veg Fried Rice was One of the best dishes I have tried."},{"name":"Rahul 2","rating":4,"Comment":"Dosa was Fresh and flavorful."},{"name":"Rahul 3","rating":5,"Comment":"Masala Dosa was Fresh and flavorful."},{"name":"Pooja 4","rating":3,"Comment":"Butter Naan was Portion size was acceptable."},{"name":"Rahul 5","rating":1,"Comment":"Butter Naan was Too much waiting time."}],
    images: [{ public_id: "haldirams_image_1", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/1abb89624b491497c8cff182d95ac457" }],
  },
  {
    name: "Mani's Dum Biryani",
    isVeg: false,
    address: "Halasuru, Yellappa Chetty Layout, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
    ratings: 3.5,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.5946, 12.9716] },
    reviews: [{"name":"Ishita 1","rating":5,"Comment":"Chicken Biryani was Fresh and flavorful."},{"name":"Meera 2","rating":5,"Comment":"Chicken 65 was Loved the quality and presentation."},{"name":"Rahul 3","rating":4,"Comment":"Sushi was Loved the quality and presentation."}],
    images: [{ public_id: "image1", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e6bfe20a8b03779efebeb04eae9a86c6" }],
  },
  {
    name: "Dindigul Thalappakatti",
    isVeg: false,
    address: "1st floor, Ramanashree Arcade, Old Kids Kemp, Mahatma Gandhi Rd, Bengaluru, Karnataka 560001",
    ratings: 3.3,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.5670007, 12.9812533] },
    reviews: [{"name":"Neha 1","rating":2,"Comment":"Fried Chicken was Overpriced for the quality offered."},{"name":"Sneha 2","rating":1,"Comment":"Chicken 65 was Not satisfied with the taste."},{"name":"Neha 3","rating":4,"Comment":"Chole Bhature was One of the best dishes I have tried."}],
    images: [{ public_id: "restaurant1_image1", url: "https://upload.wikimedia.org/wikipedia/en/e/e6/Logo_of_Dindigul_Thalappakatti_Restaurant.png" }],
  },
  {
    name: "KFC",
    isVeg: false,
    address: "456 Fried Chicken Avenue, Koramangala, Bengaluru 560001",
    ratings: 3.2,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.615038, 12.935832] },
    reviews: [{"name":"Sanjay 1","rating":4,"Comment":"Paneer Butter Masala was Fresh and flavorful."},{"name":"Arjun 2","rating":4,"Comment":"Fried Chicken was Loved the quality and presentation."},{"name":"Rahul 3","rating":5,"Comment":"Chicken 65 was Loved the quality and presentation."}],
    images: [
      { public_id: "kfc_001", url: "https://shorturl.at/LpS17" },
      { public_id: "kfc_002", url: "https://shorturl.at/mNkWv" },
    ],
  },
  {
    name: "Empire Restaurant",
    isVeg: false,
    address: "36, Church Street, Off, Mahatma Gandhi Rd, Bengaluru, Karnataka 560001",
    ratings: 3.6,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.5847828, 12.9753943] },
    reviews: [{"name":"Manoj 1","rating":2,"Comment":"Butter Naan was Overpriced for the quality offered."},{"name":"Aarav 2","rating":4,"Comment":"Paneer Butter Masala was One of the best dishes I have tried."},{"name":"Pooja 3","rating":4,"Comment":"Chole Bhature was One of the best dishes I have tried."}],
    images: [{ public_id: "empire_restaurant_image_1", url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113112095.jpg?k=1c3124fc8057370e97519147fbfd26447c4d1fc38a3ccb47e9d8c972ff2e317a&o=&hp=1" }],
  },
  {
    name: "Imperial Restaurant Since 1954",
    isVeg: false,
    address: "42/5, Bowring Hospital Rd, Central Street",
    ratings: 3.7,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.60318902450435, 12.982128633078123] },
    reviews: [{"name":"Aditya 1","rating":4,"Comment":"Mutton Biryani was One of the best dishes I have tried."},{"name":"Sneha 2","rating":4,"Comment":"Raj Kachori was Loved the quality and presentation."},{"name":"Pooja 3","rating":4,"Comment":"Veg Fried Rice was Loved the quality and presentation."}],
    images: [{ public_id: "image1", url: "https://shorturl.at/Sdwal" }],
  },
  {
    name: "Meghana's Biryani",
    isVeg: false,
    address: "1st Floor, 57 Residency Road, Near Old Galaxy Theater, Bengaluru 560025, India",
    ratings: 3.5,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [77.6066, 12.9738] },
    reviews: [{"name":"Arjun 1","rating":2,"Comment":"Momos was Service needs major improvement."},{"name":"Aditya 2","rating":4,"Comment":"Chicken 65 was Perfectly cooked and worth the price."},{"name":"Rahul 3","rating":4,"Comment":"Dosa was Perfectly cooked and worth the price."}],
    images: [{ public_id: "meghanas_biryani", url: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-biryani-awadhi-01.jpg" }],
  },
  {
    name: "Daily Sushi",
    isVeg: false,
    address: "3rd Sector, HSR Layout, Banglore",
    ratings: 3.2,
    numOfReviews: 70,
    location: { type: "Point", coordinates: [-122.4194, 37.7749] },
    reviews: [{"name":"Arjun 1","rating":4,"Comment":"Chole Bhature was Amazing taste, highly recommended."},{"name":"Vikram 2","rating":1,"Comment":"Paneer Butter Masala was Not satisfied with the taste."},{"name":"Ananya 3","rating":2,"Comment":"Raj Kachori was Overpriced for the quality offered."}],
    images: [
      { public_id: "daily_sushi_img_01", url: "https://b.zmtcdn.com/data/pictures/6/20583196/d538d11cd05d443edac17955bb3fdaae.jpg" },
      { public_id: "daily_sushi_img_02", url: "https://tb-static.uber.com/prod/image-proc/processed_images/f836ab1bbffb846981d3aa8776d0361e/fb86662148be855d931b37d6c1e5fcbe.jpeg" },
    ],
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected");

    await Restaurant.deleteMany();
    console.log("Existing restaurants deleted");

    await Restaurant.insertMany(restaurants);
    console.log("8 restaurants inserted successfully!");

    process.exit(0);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
};

seedData();
