import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../../store/reducers/dataReducer";
import Card from "../Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Coffee Bags",
  "Tea",
  "Accessories",
  "Cloth",
  "Glass",
  "Single Serve",
  "Cold Brew Bags",
  "Bundle",
];

function ProductShow() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const cards = cardsRef.current;
      gsap.set(cards, { opacity: 0, y: 50 });

      ScrollTrigger.batch(cards, {
        start: "top 90%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            overwrite: true,
          });
        },
        once: true,
      });
    }
  }, [products]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(product.price.replace("$", ""));
    const matchCategory =
      selectedCategory === "All" ||
      product.type === selectedCategory ||
      product.tag === selectedCategory;

    const matchPrice = productPrice <= maxPrice;
    return matchCategory && matchPrice;
  });

  return (
    <div
      ref={sectionRef}
      className="bg-[#FFF3E7] min-h-screen py-12 px-4 font-sans"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#3B2C27] text-center mb-10">
        Featured Products
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* === Filter Sidebar === */}
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl sticky top-28 self-start h-fit">
          <h3 className="text-2xl font-semibold text-[#3B2C27] mb-6 border-b pb-2">
            Filters
          </h3>

          {/* Category Filters */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#3B2C27] mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-full border font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#3B2C27] text-white"
                      : "bg-[#f4e8dc] text-[#3B2C27] hover:bg-[#e2d3c6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-[#3B2C27] mb-2">
              Max Price: <span className="font-bold">${maxPrice}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full accent-[#3B2C27]"
            />
          </div>
        </aside>

        {/* === Product Grid === */}
        <section className="w-full lg:w-3/4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id || index}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <Card product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[#3B2C27] text-lg font-medium mt-8">
              No products found.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProductShow;
