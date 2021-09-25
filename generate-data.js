var faker = require("faker");
var fs = require("fs");

faker.locale = "vi";

const randomCategoryList = (n) => {
  if (n < 0) return [];
  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    categoryList.push(category);
  });

  return categoryList;
};

(() => {
  // Random data
  const categoryList = randomCategoryList(5);

  //Prepare db object
  const db = {
    categories: categoryList,
    products: [],
    profile: {
      name: "Binh tran",
    },
  };

  // Write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
