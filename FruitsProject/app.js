//jshint  esversion:6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true , useUnifiedTopology :true });

const fruitSchema = new mongoose.Schema({
  name : {
    type:String,
    required :[true,"Please check you data entry , no name specified"]
  },
  rating:{
    type:Number,
    min:1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({

  rating: 8,
  review:"Pretty Good"
});



const peopleSchema = new mongoose.Schema({
  name:String,
  Age:Number,
  Gender:String,
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People",peopleSchema);
const pineapple = new Fruit({
  name : "pineapple",
  rating : 8,
  review:"Very nice fruit"
});

const grapes= new Fruit({
  name : "grapes",
  rating : 9,
  review:"Very nice fruit"
});

grapes.save();
pineapple.save();
const john = new People({
  name : "John",
  Age:32,
  Gender:"Male",
  favouriteFruit:grapes
});
john.save();
const people = new People({
  name : "Amy",
  Age:12,
  Gender:"Female",
  favouriteFruit:pineapple
});

 people.save();
// fruit.save();


const Kiwi = new Fruit({
  name : "Kiwi",
  Rating: 10,
  review : "Great!!"
});


const Orange = new Fruit({
  name : "Orange",
  Rating: 8,
  review : "Great!!"
});

const Banana = new Fruit({
  name : "Banana",
  Rating: 9,
  review : "Great!!"
});

// Fruit.insertMany([Kiwi,Orange,Banana], function(err){
//   if(err){
//     console.log(error);
//   }else{
//     console.log("Succesfully saved data in fruitsDB ");
//   }
// });
Fruit.find(function(err,fruit){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruit.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
//
// Fruit.updateOne({_id: "5e00a7d12027c23478279eb6"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success");
//   }
// });
Fruit.deleteMany({name:"Apple"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted");
  }
});
