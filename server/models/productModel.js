const ProductSchema = require("../../db/models/products");

exports.findProducts = async () => {
  const data = await ProductSchema.find({}).populate({
    path: "category",
    select: "name",
  });

  return data;
};
