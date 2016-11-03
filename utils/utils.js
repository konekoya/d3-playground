function groupBy(data = [], key = '',  numberKeys=[]) {
  let temp = {};
  let obj = null;
  let result = [];

  for (let i = 0; i < data.length; i++) {
    obj = data[i];

    if (!temp[obj[key]]) {
      temp[obj[key]] = obj;
    } else {
      console.log(numberKeys.length);
      numberKeys.forEach((item) => {
        temp[obj[key]][item] += obj[item];
      });
    }
  }

  for (let prop in temp) {
    result.push(temp[prop]);
  }

  return result;
}