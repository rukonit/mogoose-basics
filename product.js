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
    required: true,
    maxlenght: 20
},
    price: {
        type: Number,
        required: true,
        min: [0, 'price must not be negative']
    },
    onSale: {type: Boolean, 
        default: false
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
    })

productSchema.methods.greet =  function() {
    console.log(`Hello from ${this.name}`)
}

productSchema.methods.toggleSale =  function() {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async() => {
    const foundProduct = await Product.findOne({name: 'Banana'});
    console.log(foundProduct);
    await foundProduct.toggleSale();
    console.log(foundProduct);
}

findProduct()

// const bike = new Product({name: 'Milk', price: '10', onSale: true, size: 'M'})
// bike.save()
// .then(data=> {console.log("It Worked")
// console.log(data)
// })
// .catch(err => {
//     console.log("Oh no! error")
//     console.log(err)
// })