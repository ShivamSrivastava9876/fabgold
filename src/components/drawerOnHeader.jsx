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

  useEffect(() => {
    const selectedCategory = dataOfAllCategories.find(
      (metal) => metal.nameOfMetal === selectedMetal
    );
    if (selectedCategory) {
      setCategories(selectedCategory.listOfCategories);
    }
  }, [selectedMetal]);

  const handleMouseOver = (category) => {
    setSubCategories(category.listOfSubCategories);
    setTypes(category.listOfTypes);
  };

  return (
    <div
      id="drawer"
    //   onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setSelectedMetal("")}
      className="absolute flex justify-center w-full left-0 top-10 z-30"
    >
      <div
        id="drawerContentContainer"
        className="flex border-2 border-[#BB1140] w-full text-sm italic bg-white"
      >
        <div id="categories" className="w-1/4 py-4 px-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border py-2 px-2 bg-yellow-100 hover:bg-white"
              onMouseOver={() => handleMouseOver(category)}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <div id="dynamicListOfSubCategories" className="flex w-full">
          <div id="shopBySubCategories" className="w-2/3 py-4 px-4">
            <h3 className="mb-4 underline underline-offset-2">Shop by sub categories</h3>
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
