const CategorySchema = require("../../db/models/categories");

exports.findCategories = async () => {
  const data = await CategorySchema.find({});

  return data;
};
