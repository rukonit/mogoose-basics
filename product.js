const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(
() => {
    console.log("Connection Open");
}
)
.catch(
    (err)=>{
        console.log(err);
    }
)

const productSchema = new mongoose.Schema({
    name: {type: String,
    required: true},
    price: {
        type: Number
    },
    })

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Mountain Bike', price: '1'})
bike.save()
.then(data=> {console.log("It Worked")
console.log(data)
})
.catch(err => {
    console.log("Oh no! error")
    console.log(err)
})