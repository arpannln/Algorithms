let options = { all: true };

const $ = function(el, option) {
  let elements = option.all ? document.querySelectorAll(el) : document.querySelector(el);
  return new JQueryObj(Array.from(elements));
};

// I think we need another object
class JQueryObj {
  
  constructor(obj) {
    this.domElements = obj;
  }

  nthChild(n) {
    return this.domElements[n];
  }

}


console.log($('p', options).nthChild(1));
