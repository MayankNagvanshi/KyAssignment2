const menu = [
  {
    id: 1,
    title: "Utsav Gandhi",
    category: "CONVENOR",
    price: "CONVENOR",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    flink: "https://www.facebook.com/",
    glink: "mailto:name@gmail.com",
    llink: "https://www.linkedin.com/login",
  },
  {
    id: 2,
    title: "Mohit Sharma",
    category: "CO-CONVENOR",
    price: "CO-CONVENOR",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    flink: "https://www.facebook.com/",
    glink: "mailto:name@gmail.com",
    llink: "https://www.linkedin.com/login",
  },
  {
    id: 3,
    title: "Rishab Agarwal",
    category: "CO-CONVENOR",
    price: "CO-CONVENOR",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    flink: "https://www.facebook.com/",
    glink: "mailto:name@gmail.com",
    llink: "https://www.linkedin.com/login",
  },
  {
    id: 4,
    title: "Jagdish",
    category: "MARKETING",
    price: "MARKETING",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/jagdish.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    flink: "https://www.facebook.com/",
    glink: "mailto:name@gmail.com",
    llink: "https://www.linkedin.com/login",
  },
  {
    id: 5,
    title: "Priyanshu",
    category: "MARKETING",
    price: "MARKETING",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/priyanshu.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    flink: "https://www.facebook.com/profile.php?id=100015317821448",
    glink: "priyanshu.rajrahul.mec17@iitbhu.ac.in",
    llink: "https://www.linkedin.com/in/priyanshu-raj096",
  },
  {
    id: 6,
    title: "Tanay",
    category: "MARKETING",
    price: "MARKETING",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/tanay.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    flink: "https://www.facebook.com/profile.php?id=100015317821448",
    glink: "priyanshu.rajrahul.mec17@iitbhu.ac.in",
    llink: "https://www.linkedin.com/in/priyanshu-raj096",
  },
  {
    id: 7,
    title: "Yashika",
    category: "MARKETING",
    price: "MARKETING",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/yashika.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    flink:
      "https://www.facebook.com/profile.php?id=https://www.facebook.com/cyashu99",
    glink: "yashikach.cd.civ17@iitbhu.ac.in",
    llink: "https://www.linkedin.com/in/yashika-chaudhary-9b770b163/",
  },
  {
    id: 8,
    title: "Sharad",
    category: "PUBLICITY",
    price: "PUBLICITY",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/sharad.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Utkarsh",
    category: "PUBLICITY",
    price: "PUBLICITY",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/utkarsh.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Vaibhav",
    category: "PUBLICITY",
    price: "PUBLICITY",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/vaibhav.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Pankaj",
    category: "PUBLICITY",
    price: "PUBLICITY",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/pankaj.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Arjun",
    category: "PUBLIC RELATIONS",
    price: "PUBLIC RELATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/arjun.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Ansh",
    category: "PUBLIC RELATIONS",
    price: "PUBLIC RELATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Manoj",
    category: "EVENTS",
    price: "EVENTS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Kamal",
    category: "EVENTS",
    price: "EVENTS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Jadhav Sai",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/sai%20jadhav.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "Sai Kesna",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/sai%20kesna.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "Atri",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/atri.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 19,
    title: "Kiran",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/kiran.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "Parth",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/parth.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "Tyagi",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/tyagi.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: "Pankaj",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 23,
    title: "Vaibhav",
    category: "LOGISTICS & OPERATIONS",
    price: "LOGISTICS & OPERATIONS",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 24,
    title: "Dipesh",
    category: "DESIGN TEAM",
    price: "DESIGN TEAM",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 25,
    title: "Sudhanshu",
    category: "DESIGN TEAM",
    price: "DESIGN TEAM",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 26,
    title: "Khyati",
    category: "CONTENT & CREATIVE",
    price: "CONTENT & CREATIVE",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 27,
    title: "Anjali",
    category: "CONTENT & CREATIVE",
    price: "CONTENT & CREATIVE",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 28,
    title: "Shreyas",
    category: "CULT COUNCIL",
    price: "CULT COUNCIL",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 29,
    title: "Apurv",
    category: "CULT COUNCIL",
    price: "CULT COUNCIL",
    img: "https://kashiyatra-2022.netlify.app/img/teamimg/man.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;
