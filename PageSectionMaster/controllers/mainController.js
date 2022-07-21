const data = require('../database/data.json')
const mainController ={
    index : function (req,res){
        res.render('index' , {data});
    }
}

module.exports = mainController;