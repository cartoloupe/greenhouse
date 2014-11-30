describe("Greenhouse", function() {
  var greenhouse;

  beforeEach(function() {
    h = 400;
    w = 400;
    selector = '#visualization';
    greenhouse = new Greenhouse(selector, w, h);
  });

  it("#new", function() {
    expect(greenhouse.w).toEqual(w);
    expect(greenhouse.h).toEqual(h);
  });

});

describe("#find_by_kv", function() {
  var greenhouse;
  function find_by_kv(kv, json){
    console.log("kv is " + kv);
    console.log("k is " + kv[0]);
    console.log("v is " + kv[1]);


    return json;
  };


  beforeEach(function() {
    json = {"id":1, "children":[], "data":"yes"};
  });

  it("finds kv", function() {
    expect(find_by_kv(["id",1], json)).toEqual(json);
  });

});
