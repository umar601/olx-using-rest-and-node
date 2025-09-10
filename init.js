const list = require("./models/listmodel");

list.insertMany(
    [
         {
    title: "iPhone 14 Pro Max",
    description: "256GB, Deep Purple, excellent condition with box & charger.",
    price: 245000,
    category: "Mobiles",
    condition: "Used",
    images: [
      "https://images.pexels.com/photos/17794871/pexels-photo-17794871.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/17616215/pexels-photo-17616215.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    location: {
      city: "Lahore",
      address: "Gulberg III, near Liberty Market"
    },
    seller: {
      name: "Ali Khan",
      phone: "03001234567",
      email: "ali@example.com"
    }
  },
  {
    title: "Honda Civic 2020",
    description: "Total genuine, Islamabad registered, 45k km driven.",
    price: 5200000,
    category: "Cars",
    condition: "Used",
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    location: {
      city: "Islamabad",
      address: "F-10 Markaz"
    },
    seller: {
      name: "Hassan Raza",
      phone: "03112223344",
      email: "hassan@example.com"
    }
  },
  {
    title: "Sofa Set 5 Seater",
    description: "Modern style sofa set, only 6 months used. No scratches.",
    price: 65000,
    category: "Furniture",
    condition: "Used",
    images: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    location: {
      city: "Karachi",
      address: "DHA Phase 6"
    },
    seller: {
      name: "Fatima Noor",
      phone: "03214445566",
      email: "fatima@example.com"
    }
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    description: "Brand new, 512GB, warranty included.",
    price: 380000,
    category: "Mobiles",
    condition: "New",
    images: [
      "https://images.pexels.com/photos/18575411/pexels-photo-18575411.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    location: {
      city: "Faisalabad",
      address: "Clock Tower Market"
    },
    seller: {
      name: "Umar Shah",
      phone: "03005556677",
      email: "umar@example.com"
    }
  }
    ]
)
.then((res)=>{

    console.log(res);
})
.catch((err)=>{
    
    console.log(err);
})