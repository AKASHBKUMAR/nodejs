module.exports = (template, product) => {
  let output = template
    .replace("{{%IMAGE%}}", product.productImage)
    .replace("{{%NAME%}}", product.name)
    .replace("{{%MODELNAME%}}", product.modelName)
    .replace("{{%MODELNO%}}", product.modelNumber)
    .replace("{{%SIZE%}}", product.size)
    .replace("{{%CAMERA%}}", product.camera)
    .replace("{{%PRICE%}}", product.price)
    .replace("{{%COLOR%}}", product.color)
    .replace("{{%ID%}}", product.id)
    .replace("{{%ROM%}}", product.ROM)
    .replace("{{%DESC%}}", product.Description);

  return output;
};
