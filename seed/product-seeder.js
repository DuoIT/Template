var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product ({
    imagePath: 'https://cdn.chv.me/images/thumbnails/Xiaomi-Mi-Bluetooth-Mouse-is-ccXttOBw.jpg.thumb_400x400.jpg',
    title: 'Beef',
    description:'Mouse Xiaomi',
    price: 550000
}),
new Product ({
    imagePath: 'https://cdn.eglobalcentral.com.es/images/detailed/62/xiaomi-mi-portable-mouse-gold.jpg',
    title: 'Vegetable',
    description:'Mouse Xiaomi',
    price: 260000
}),
new Product ({
    imagePath: 'https://cdn.chv.me/images/thumbnails/Xiaomi-Mi-Bluetooth-Mouse-is-ccXttOBw.jpg.thumb_400x400.jpg',
    title: 'Beef',
    description:'Mouse Xiaomi',
    price: 550000
}),
new Product ({
    imagePath: 'https://cdn.chv.me/images/thumbnails/Xiaomi-Mi-Bluetooth-Mouse-is-ccXttOBw.jpg.thumb_400x400.jpg',
    title: 'Beef',
    description:'Mouse Xiaomi',
    price: 550000
}),
new Product ({
    imagePath: 'https://cdn.chv.me/images/thumbnails/Xiaomi-Mi-Bluetooth-Mouse-is-ccXttOBw.jpg.thumb_400x400.jpg',
    title: 'Beef',
    description:'Mouse Xiaomi',
    price: 550000
})];

var done = 0;
for(var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
mongoose.disconnect();
}