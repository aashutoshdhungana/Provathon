import temple1 from "../assets/images/landmarks/temple1.jpg";
import temple2 from "../assets/images/landmarks/temple2.jpg";

import room1 from "../assets/images/rooms/room1.jpg";
import room2 from "../assets/images/rooms/room2.jpg";
import room3 from "../assets/images/rooms/room3.jpg";
import room4 from "../assets/images/rooms/room4.jpg";

export const homestaysDemo = [
  {
    id: "ae2a6598-9c92-4dc2-8fae-470e24bf0f9d",
    title: "Somani Life Homestay",
    discription: `hello,
  i live in old traditional city with my dad, mum and brother.. currently, I am working as a tourist guide..
  my home is just 4 minutes walk from patan durbar square(UNESCO World heritage site).
  our house is traditional type with red brick .. ther are 5 bedroom, 2 bathroom, a large kitchen.
  Since , i am working in tourism field, i love making new people,new freinds.. my father is a retired government officer and my mom is housewife.. we speak English, but at home we speak Nepali.
  Our house is about 7 KM far from International Airport.`,
    address: {
      district: "pokhara",
      street: "streetAddress, 3",
    },
    coverPhoto: null,
    rooms: [
      {
        title: "Delux room",
        id: "room-101",
        description: "Bathroom ensuite (within room) <br> 1 Double Bed",
        price: 1200,
        photo: room1,
      },
      {
        title: "single ",
        id: "room-102",
        description: "Bathroom ensuite (within room) <br> 1 Double Bed",
        price: 1200,
        photo: room2,
      },
      {
        title: "double",
        id: "room-103",
        description: "Bathroom ensuite (within room) <br> 1 Double Bed",
        price: 1200,
        photo: room3,
      },
    ],
    landmarks: [
      {
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veritatis labore ex quos optio asperiores, est facilis expedita perspiciatis porro.`,
        title: "Siva Mandir",
        photo: temple1,
      },

      {
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veritatis labore ex quos optio asperiores, est facilis expedita perspiciatis porro.`,
        title: "Pashupatinath",
        photo: temple2,
      },
    ],
  },
  {
    id: "1bd9ae1e-cbdf-47ad-9556-48793baeda45",
    title: "Greenlife homestay",
    discription: `Namaste,
  My family consist of 5 members, my mother in law, my husband, 2 kids and myself. At home we speak, Nepali our mother tongue, Newari me (of the dialect of Nepal), English, French and Hindi.
  We are here to help you discover the different cultures, the tradition of Nepal.
  We have a small trekking agency "Sunshine Trekking" so we would assist you in organizing trip, trek, tour in Nepal if you like.
  I studied hotel management and Master of Tourism, I had also worked in French Embassy in Nepal`,
    address: {
      district: "kathmandu",
      street: "thamel, 3",
    },
    coverPhoto: null,
    rooms: [
      {
        title: "Delux room",
        id: "room-101",
        description: "Bathroom ensuite (within room) <br> 1 Double Bed",
        price: 1200,
        photo: room4,
      },
      {
        title: "single ",
        id: "room-102",
        description: "Bathroom ensuite (within room) <br> 1 Double Bed",
        price: 1200,
        photo: room2,
      },
    ],
    landmarks: [
      {
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veritatis labore ex quos optio asperiores, est facilis expedita perspiciatis porro.`,
        title: "Siva Mandir",
        photo: temple1,
      },

      {
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veritatis labore ex quos optio asperiores, est facilis expedita perspiciatis porro.`,
        title: "Pashupatinath",
        photo: temple2,
      },
    ],
  },
];
