var recipes = {};

function updateObjectWithKeyAndValue (object, key, value){
  var objects = Object.assign({}, object);
  objects[key] = "value";
  return object, objects;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object.value = "key";
  return object; 
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}




