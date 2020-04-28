exports.makeRefObj = (list, key, value) => {
  let lookUpObj = {};
  list.forEach((item) => {
    lookUpObj[item[key]] = item[value];
  });
  return lookUpObj;
};
