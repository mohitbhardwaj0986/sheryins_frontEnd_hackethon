

  const productData = [
    {
      id: "1c5b02f6-e4b5-4a61-9b0b-9c13ef5ec6f5",
      name: "Organic Matcha Green Tea Powder",
      price: "$29.95",
      type: "Tea",
      description:
        "Vibrant, smooth, and stone-ground to perfection—our organic ceremonial grade a Matcha is made from premium Japanese green tea for a clean, uplifting boost. With a naturally sweet, earthy flavor and no bitterness, it’s your new go-to for calm, focused energy.",
      offer: null,
      tag: "Organic",
      rating: "4.6",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/OriginalMatcha_PDP_2048px_02_ba32f460-89ce-4ec5-a8b8-1a1120476c17.png?v=1710789929&width=1200&height=1200&crop=center",
    },
    {
      id: "71eae939-95be-476c-b7e7-7fc453ef6a89",
      name: "Chocolate Matcha Bundle",
      price: "$29.95",
      type: "Tea",
      description:
        "Chocolate and matcha come together in a smooth blend with just the right hint of richness. It’s a comforting twist on your everyday matcha.",
      offer: "Get 2 Chocolate Matchas for the price of 1!",
      tag: null,
      rating: "4.3",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Chocolate_Matcha_Bundle_PDP_2048px_01.png?v=1753208709&width=300&height=300&crop=center",
    },
    {
      id: "ae2fa2e0-f145-476c-8002-00cfedfca6c6",
      name: "Strawberries & Cream Blend",
      price: "$23.95",
      type: "Coffee Bags",
      description:
        "Consider this our love letter: a blend that tastes like a plump juicy strawberry straight from the farmer’s market, dipped in the fluffiest homemade whipped cream and made with love.",
      offer: "Pay in 4 interest-free installments on orders over $35!",
      tag: "Organic",
      rating: "5",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Ground_Strawberries_and_Cream_US_PDP_2048px_01.png?v=1752008207&width=300&height=300&crop=center",
    },
    {
      id: "62c79f43-45a7-44c7-bb92-dc1632143b5f",
      name: "Organic Medium Roast Coffee Blend",
      price: "$19.95",
      type: "Coffee Bags",
      description:
        "Balanced, smooth, and effortlessly sippable - our organic Medium Roast Blend is the go-to medium body cup for everyday moments. With cozy notes of milk chocolate and roasted cashews, it’s friendly, approachable, and impossible not to love.",
      offer: "Free shipping in the contiguous US",
      tag: "Organic",
      rating: "5",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Ground_Medium_US_PDP_2048px_01_ca910dcc-2ca4-485d-a296-7b41fd50d0af.png?v=1740780841&width=300&height=300&crop=center",
    },
    {
      id: "2b78333d-4434-4ef7-a1ec-cd058f973746",
      name: "Organic Light Roast Coffee Blend",
      price: "$19.95",
      type: "Coffee Bags",
      description:
        "Delicately roasted to preserve bright flavors and fruity undertones. Perfect for those who love a gentle start to their day.",
      offer: "Limited time: 10% off with code LIGHTROAST",
      tag: "Organic",
      rating: "4.7",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Ground_Light_US_PDP_2048px_01_0242f39f-cc8d-47f4-858a-7fab6b2c2a21.png?v=1740780294&width=300&height=300&crop=center",
    },
    {
      id: "103c9e63-d65a-4898-a497-5d7ae55ac073",
      name: "Organic Espresso Dark Roast Coffee Blend",
      price: "$21.95",
      type: "Coffee Bags",
      description:
        "Bold, rich, and deeply roasted for intense flavor with hints of dark chocolate and toasted hazelnuts. Great for espresso lovers.",
      offer: "Buy 2, get 15% off!",
      tag: "Organic",
      rating: "4.8",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Ground_Espresso_US_PDP_2048px_01_74a0df19-f029-4f59-b37c-2cb4d52d1f62.png?v=1740780482&width=300&height=300&crop=center",
    },
    {
      id: "99617e55-f1e2-4351-851c-33933d12e087",
      name: "Vanilla Blend",
      price: "$20.95",
      type: "Coffee Bags",
      description:
        "Smooth coffee meets creamy vanilla in this crowd-pleasing blend. Perfect for cozy mornings or afternoon treats.",
      offer: "Free shipping on this item!",
      tag: "Organic",
      rating: "4.6",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Ground_Espresso_US_PDP_2048px_01_74a0df19-f029-4f59-b37c-2cb4d52d1f62.png?v=1740780482&width=300&height=300&crop=center",
    },
    {
      id: "6f02ea6b-6cf3-406b-bf41-7f4d2c7b5a17",
      name: "Cake Batter Blend",
      price: "$21.95",
      type: "Coffee Bags",
      description:
        "Sweet, creamy, and indulgent—this blend delivers dessert-like vibes with every sip. Great for birthdays or anytime celebrations.",
      offer: "Buy 1, get 1 50% off",
      tag: "Organic",
      rating: "4.9",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/GroundCakeBatterUS_PDP_2048px_01_b8d90492-5ae1-4c08-9f92-b6c11e889bdf.png?v=1741041669&width=800&height=800&crop=center",
    },
    {
      id: "db23c873-2084-4f37-a222-d7e02f4ad9d6",
      name: "Decaf Medium Roast Blend",
      price: "$19.95",
      type: "Coffee Bags",
      description:
        "All the flavor, none of the caffeine. Smooth, mild, and perfect for an evening cup without the jitters.",
      offer: "Pay in 4 interest-free installments!",
      tag: "Organic",
      rating: "4.5",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/GroundDecafUS_PDP_2048px_01.png?v=1741041536&width=800&height=800&crop=center",
    },
    {
      id: "6d8d9d7e-f35f-4198-bb01-ea6c3828be4e",
      name: "Sea Salt Toffee Blend",
      price: "$22.95",
      type: "Coffee Bags",
      description:
        "Sweet caramel and a touch of sea salt make this a perfectly balanced, crave-worthy cup.",
      offer: "Free gift with purchase over $40!",
      tag: "Organic",
      rating: "4.8",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/GroundMaritimeUS_PDP_2048px_01.png?v=1749590088&width=800&height=800&crop=center",
    },
    {
      id: "a2921a8a-55c9-49e3-8cfd-5086c1c8b74b",
      name: "Strawberries & Cream Blend",
      price: "$23.95",
      type: "Coffee Bags",
      description:
        "Back by popular demand—juicy strawberry meets soft cream in this bright and fruity blend. Limited edition!",
      offer: "Ships free for a limited time!",
      tag: "",
      rating: "5",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/GroundStrawberriesandCreamUS_PDP_2048px_01.png?v=1752008178&width=800&height=800&crop=center",
    },
    {
      id: "aa24ab8a-4529-4627-9c7e-2a34f2f8d981",
      name: "Variety Cold Brew Singles",
      price: "$28.95",
      type: "Single Serve",
      description:
        "A convenient sampler pack of our best cold brew flavors. Just steep, chill, and enjoy!",
      offer: "Save $5 on your first purchase!",
      tag: "Organic",
      rating: "4.6",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Variety_Cold_Brew_Singles_PDP_2048px_01.png?v=1742512229&width=800&height=800&crop=center",
    },
    {
      id: "b8c2e8bb-80fa-4cc7-b5db-86b896a1e017",
      name: "Organic Cold Brew Elephant Large Coffee Bags",
      price: "$34.95",
      type: "Cold Brew Bags",
      description:
        "Big flavor, bigger size. These large brew bags are perfect for making café-quality cold brew at home.",
      offer: "Get a free jar with 2+ bags!",
      tag: "Organic",
      rating: "4.9",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/XL_Cold_Brew_Bag_PDP_2048px_01_27cf9e28-e54f-476a-8943-752d8c276727.png?v=1739574860&width=300&height=300&crop=center",
    },
    {
      id: "c4f3ea5b-2e5c-434b-ae11-5b66d407e6f6",
      name: "Organic Cold Brew Coffee Starter Pack",
      price: "$39.95",
      type: "Bundle",
      description:
        "Everything you need to start your cold brew journey—includes bags, jars, and more.",
      offer: "Bundle and save 15%",
      tag: "Organic",
      rating: "4.7",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Variety_Cold_Brew_Singles-Starter_Pack_PDP_2048px_01.png?v=1750887536&width=300&height=300&crop=center",
    },
    {
      id: "8df48926-7aa7-4f20-84de-19943ff7f6c6",
      name: "Square Cold Brew Mason Jar",
      price: "$14.95",
      type: "Accessories",
      description:
        "Chic, sturdy, and perfect for storing or sipping cold brew. Dishwasher safe.",
      offer: "Buy 2 jars, get 10% off",
      tag: "Glass",
      rating: "4.8",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/SquareColdBrewMasonJar_PDP_2048px_01.png?v=1709072570&width=800&height=800&crop=center",
    },
    {
      id: "18d6d40c-b6d0-4bfc-bd1a-5e2de3cf2aa0",
      name: "Transparent Tumbler",
      price: "$12.95",
      type: "Accessories",
      description:
        "Crystal-clear tumbler with a sleek design. Great for iced drinks on the go.",
      offer: "Limited stock available!",
      tag: "Glass",
      rating: "4.6",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/TransparentTumbler_PDP_2048px_01_9b132e34-3a24-4585-b411-55f77879738c.png?v=1709072602&width=800&height=800&crop=center",
    },
    {
      id: "7d202cfa-fffd-4034-b4d5-1a68bb9d68a6",
      name: "Electric Whisk",
      price: "$24.95",
      type: "Accessories",
      description:
        "Whip up your matcha, lattes, or protein drinks effortlessly with this powerful frother.",
      offer: "Free shipping on orders over $25",
      tag: "",
      rating: "4.7",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/ElectricWhisk_PDP_2048px_01.png?v=1709072149&width=800&height=800&crop=center",
    },
    {
      id: "469d2f2f-98d3-41ef-8c1c-fd0b39125c55",
      name: "Black Stainless Steel Straws",
      price: "$9.95",
      type: "Accessories",
      description:
        "Eco-friendly, reusable straws that are stylish and functional. Set of 4 with a cleaner.",
      offer: "Buy any 2 accessories, get 1 free",
      tag: "Steel",
      rating: "4.9",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/BlackStainlessSteelStraws_PDP_2048px_01.png?v=1709071767&width=800&height=800&crop=center",
    },
    {
      id: "b15f5889-dc2f-4f40-bc7a-6dbfc86db1ce",
      name: "Maritime Pitcher",
      price: "$22.95",
      type: "Accessories",
      description:
        "Elegant, ocean-inspired design perfect for serving cold brew or infused water.",
      offer: "Get $5 off with any bundle purchase",
      tag: "Dis",
      rating: "4.6",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/Maritime_Pitcher_PDP_2048px_01.png?v=1749588362&width=800&height=800&crop=center",
    },
    {
      id: "0f11900c-bab0-46f6-bb82-5313f39a1ff4",
      name: "Navy Everywhere Tote",
      price: "$19.95",
      type: "Accessories",
      description:
        "Spacious, durable, and perfect for market runs or beach days. Now in deep navy blue.",
      offer: "Free tote with purchase over $75",
      tag: "Cloth",
      rating: "4.5",
      image:
        "https://cdn.shopify.com/s/files/1/0424/8862/7355/files/oceanblueeverywheretotepdp_2048px_01.png?v=1709243605&width=800&height=800&crop=center",
    },
  ];
export default productData
