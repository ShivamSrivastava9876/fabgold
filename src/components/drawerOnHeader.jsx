import { useEffect, useState } from "react";

const dataOfAllCategories = [
  {
    nameOfMetal: "Gold",
    listOfCategories: [
      {
        categoryName: "Earrings",
        listOfSubCategories: ["Studs", "Men studs", "Drops"],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Rings",
        listOfSubCategories: [
          "Casual rings",
          "Bands",
          "Engagement rings",
          "Fashion rings",
          "Men rings",
        ],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Necklace",
        listOfSubCategories: ["Modern necklace", "Necklace set"],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Pendant",
        listOfSubCategories: [
          "Classic pendant",
          "Kids pendant",
          "Religious pendant",
        ],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
    ],
  },
  {
    nameOfMetal: "Silver",
    listOfCategories: [
      {
        categoryName: "Rings",
        listOfSubCategories: [
          "Casual rings",
          "Bands",
          "Engagement rings",
          "Fashion rings",
          "Men rings",
        ],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Necklace",
        listOfSubCategories: ["Modern necklace", "Necklace set"],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Pendant",
        listOfSubCategories: [
          "Classic pendant",
          "Kids pendant",
          "Religious pendant",
        ],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
    ],
  },
  {
    nameOfMetal: "Platinum",
    listOfCategories: [
      {
        categoryName: "Rings",
        listOfSubCategories: [
          "Casual rings",
          "Bands",
          "Engagement rings",
          "Fashion rings",
          "Men rings",
        ],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
      {
        categoryName: "Necklace",
        listOfSubCategories: ["Modern necklace", "Necklace set"],
        listOfTypes: ["Party wear", "Office wear", "Daily wear"],
      },
    ],
  },
];

const DrawerOnHeader = ({ selectedMetal, setSelectedMetal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null); // State to track active category

  useEffect(() => {
    const selectedCategory = dataOfAllCategories.find(
      (metal) => metal.nameOfMetal === selectedMetal
    );
    if (selectedCategory) {
      setCategories(selectedCategory.listOfCategories);
    }
  }, [selectedMetal]);

  useEffect(() => {
    const selectedCategory = dataOfAllCategories.find(
      (metal) => metal.nameOfMetal === selectedMetal
    );
    if (selectedCategory) {
      setCategories(selectedCategory.listOfCategories);
      if (selectedCategory.listOfCategories.length > 0) {
        // Set initial subcategories and types based on the first category
        const firstCategory = selectedCategory.listOfCategories[0];
        setSubCategories(firstCategory.listOfSubCategories);
        setTypes(firstCategory.listOfTypes);
        setActiveCategoryIndex(0);
      }
    }
  }, [selectedMetal]);

  const handleMouseOver = (category, index) => {
    setSubCategories(category.listOfSubCategories);
    setTypes(category.listOfTypes);
    setActiveCategoryIndex(index); 
  };

  return (
    <div
      id="drawer"
      //   onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setSelectedMetal("")}
      className="absolute flex justify-center w-full left-0 top-10 z-40"
    >
      <div
        id="drawerContentContainer"
        className="flex border-2 border-[#BB1140] w-full text-sm italic bg-white"
      >
        <div id="categories" className="w-1/4 py-4 px-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`border py-2 px-2 ${index === activeCategoryIndex ? 'bg-white' : 'bg-yellow-100'} hover:bg-white`}
              onMouseOver={() => handleMouseOver(category, index)}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <div id="dynamicListOfSubCategories" className="flex w-full">
          <div id="shopBySubCategories" className="w-2/3 py-4 px-4">
            <h3 className="mb-4 underline underline-offset-2">
              Shop by sub categories
            </h3>
            <div id="listOfSubCategories">
              {subCategories.map((subCategory, index) => (
                <div key={index} className="my-2">
                  {subCategory}
                </div>
              ))}
            </div>
          </div>
          <div id="shopByType" className="w-1/3 py-4 px-4">
            <h3 className="mb-4 underline underline-offset-2">Shop by type</h3>
            <div id="listOfTypes">
              {types.map((type, index) => (
                <div key={index} className="my-2">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerOnHeader;
