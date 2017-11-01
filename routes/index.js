var express = require('express');
var router = express.Router();
var db = require('../database/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.prevUrl = "/";
  if (req.session.email){
    res.render('index2');
  }else{
    res.render('index');
  }
});

router.get('/sign_up', function(req, res, next) {
  req.session.prevUrl = "/";
  res.render('sign_up');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.get('/shipping', function(req, res, next) {
  req.session.prevUrl = '/shipping?item='+req.query.item;
  if (req.session.email) {
    if(req.query.item){
      db.findItem(req.query.item, function(resp){
        console.log(resp);
        if(resp.success){
          res.render('shipping',{itemID: resp.item._id, name: resp.item.name, price: resp.item.price, photo: resp.item.photo});
        }else{
          res.redirect(req.session.prevUrl);
        }
      });
    }else{
      res.redirect(req.session.prevUrl);
    }
  }else{
    res.redirect('/login');
  }
});

router.get('/Babies', function(req, res, next) {
  req.session.prevUrl ="/Babies";
  res.render('Babies');
});


router.get('/baby', function(req, res, next) {
  // '59610705e92bc7fd703934da'
  console.log('show data.-',req.query.item, req.url);
  // res.send('listening');
  if(req.query.item && req.query.item.length === 24){
    db.findItem(req.query.item, function(result){
      if(result.success){
        req.session.prevUrl =req.url;
        res.render('baby', {item: result.item});
      }else{
        res.redirect(req.session.prevUrl);
      }
    });
  }else{
    res.redirect(req.session.prevUrl);
  }
});

router.get('/Baby1', function(req, res, next) {
  db.findItem('59610705e92bc7fd703934da', function(result){
    if(result.success){
      req.session.prevUrl ="/Baby1";
      res.render('Baby1', {item: result.item});
    }else{
      res.redirect(req.session.prevUrl);
    }
  });
});

router.get('/Baby2', function(req, res, next) {
  req.session.prevUrl ="/Baby2";
  res.render('Baby2');
});


router.get('/Baby3', function(req, res, next) {
  req.session.prevUrl ="/Baby3";
  res.render('Baby3');
});


router.get('/Baby4', function(req, res, next) {
  req.session.prevUrl ="/Baby4";
  res.render('Baby4');
});


router.get('/Baby5', function(req, res, next) {
  req.session.prevUrl ="/Baby5";
  res.render('Baby5');
});


router.get('/Baby6', function(req, res, next) {
  req.session.prevUrl ="/Baby6";
  res.render('Baby6');
});


router.get('/Baby7', function(req, res, next) {
  req.session.prevUrl ="/Baby7";
  res.render('Baby7');
});


router.get('/Baby8', function(req, res, next) {
  req.session.prevUrl ="/Baby8";
  res.render('Baby8');
});


router.get('/Baby9', function(req, res, next) {
  req.session.prevUrl ="/Baby9";
  res.render('Baby9');
});

router.get('/Ment-shirt', function(req, res, next) {
  req.session.prevUrl ="/Ment-shirt";
  res.render('Ment-shirt');
});

router.get('/Men-tshirt_a', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_a";
  res.render('Men-tshirt_a');
});

router.get('/Men-tshirt_b', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_b";
  res.render('Men-tshirt_b');
});

router.get('/Men-tshirt_c', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_c"
  res.render('Men-tshirt_c');
});

router.get('/Men-tshirt_d', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_d";
  res.render('Men-tshirt_d');
});

router.get('/Men-tshirt_e', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_e"
  res.render('Men-tshirt_e');
});

router.get('/Men-tshirt_f', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_f"
  res.render('Men-tshirt_f');
});

router.get('/Men-tshirt_g', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_g";
  res.render('Men-tshirt_g');
});

router.get('/Men-tshirt_h', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_h";
  res.render('Men-tshirt_h');
});

router.get('/Men-tshirt_i', function(req, res, next) {
  req.session.prevUrl ="/Men-tshirt_i";
  res.render('Men-tshirt_i');
});

router.get('/Men', function(req, res, next) {
  req.session.prevUrl ="/Men";
  res.render('Men');
});

router.get('/MenFootware', function(req, res, next) {
  req.session.prevUrl ="/MenFootware";
  res.render('MenFootware');
});

router.get('/MenFootware1', function(req, res, next) {
  req.session.prevUrl ="/MenFootware1";
  res.render('MenFootware1');
});

router.get('/MenFootware2', function(req, res, next) {
  req.session.prevUrl ="/MenFootware2";
  res.render('MenFootware2');
});

router.get('/MenFootware3', function(req, res, next) {
  req.session.prevUrl ="/MenFootware3";
  res.render('MenFootware3');
});

router.get('/MenFootware4', function(req, res, next) {
  req.session.prevUrl ="/MenFootware4";
  res.render('MenFootware4');
});

router.get('/MenFootware5', function(req, res, next) {
  req.session.prevUrl ="/MenFootware5";
  res.render('MenFootware5');
});

router.get('/MenFootware6', function(req, res, next) {
  req.session.prevUrl ="/MenFootware6";
  res.render('MenFootware6');
});

router.get('/MenFootware7', function(req, res, next) {
  req.session.prevUrl ="/MenFootware7";
  res.render('MenFootware7');
});

router.get('/MenFootware8', function(req, res, next) {
  req.session.prevUrl ="/MenFootware8";
  res.render('MenFootware8');
});

router.get('/MenFootware9', function(req, res, next) {
  req.session.prevUrl ="/MenFootware9";
  res.render('MenFootware9');
});

router.get('/MenFormal_shoes', function(req, res, next) {
  req.session.prevUrl ="/menFormal_shoes";
  res.render('MenFormal_shoes');
});

router.get('/Men_jeans', function(req, res, next) {
  req.session.prevUrl ="/Men_jeans";
  res.render('Men_jeans');
});

router.get('/Men-shirt', function(req, res, next) {
  req.session.prevUrl ="/Men_shirt";
  res.render('Men-shirt');
});

router.get('/Saree', function(req, res, next) {
  req.session.prevUrl ="/Saree";
  res.render('Saree');
});

router.get('/Shirt', function(req, res, next) {
  req.session.prevUrl ="/Shirt";
  res.render('Shirt');
});

router.get('/WomenJeans', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans";
  res.render('WomenJeans');
});

router.get('/WomenJeans1', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans1";
  res.render('WomenJeans1');
});

router.get('/WomenJeans2', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans2";
  res.render('WomenJeans2');
});

router.get('/WomenJeans3', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans3";
  res.render('WomenJeans3');
});

router.get('/WomenJeans4', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans4";
  res.render('WomenJeans4');
});

router.get('/WomenJeans5', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans5";
  res.render('WomenJeans5');
});

router.get('/WomenJeans6', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans6";
  res.render('WomenJeans6');
});

router.get('/WomenJeans7', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans7";
  res.render('WomenJeans7');
});

router.get('/WomenJeans8', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans8";
  res.render('WomenJeans8');
});

router.get('/WomenJeans9', function(req, res, next) {
  req.session.prevUrl ="/WomenJeans9";
  res.render('WomenJeans9');
});

router.get('/WomenSandal', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal";
  res.render('WomenSandal');
});



router.get('/WomenSandal1', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal1";
  res.render('WomenSandal1');
});

router.get('/WomenSandal2', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal2";
  res.render('WomenSandal2');
});

router.get('/WomenSandal3', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal3";
  res.render('WomenSandal3');
});

router.get('/WomenSandal4', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal4";
  res.render('WomenSandal4');
});

router.get('/WomenSandal5', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal5";
  res.render('WomenSandal5');
});

router.get('/WomenSandal6', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal6";
  res.render('WomenSandal6');
});

router.get('/WomenSandal7', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal7";
  res.render('WomenSandal7');
});

router.get('/WomenSandal8', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal8";
  res.render('WomenSandal8');
});

router.get('/WomenSandal9', function(req, res, next) {
  req.session.prevUrl ="/WomenSandal9";
  res.render('WomenSandal9');
});

router.get('/WomenShoes', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes";
  res.render('WomenShoes');
});

router.get('/WomenShoes1', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes1";
  res.render('WomenShoes1');
});

router.get('/WomenShoes2', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes2";
  res.render('WomenShoes2');
});

router.get('/WomenShoes3', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes3";
  res.render('WomenShoes3');
});

router.get('/WomenShoes4', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes4";
  res.render('WomenShoes4');
});

router.get('/WomenShoes5', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes5";
  res.render('WomenShoes5');
});

router.get('/WomenShoes6', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes6";
  res.render('WomenShoes6');
});

router.get('/WomenShoes7', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes7";
  res.render('WomenShoes7');
});

router.get('/WomenShoes8', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes8";
  res.render('WomenShoes8');
});

router.get('/WomenShoes9', function(req, res, next) {
  req.session.prevUrl ="/WomenShoes9";
  res.render('WomenShoes9');
});

router.get('/WomenTops1', function(req, res, next) {
  req.session.prevUrl ="/WomenTops1";
  res.render('WomenTops1');
});


router.get('/WomenTops2', function(req, res, next) {
  req.session.prevUrl ="/WomenTops2";
  res.render('WomenTops2');
});


router.get('/WomenTops3', function(req, res, next) {
  req.session.prevUrl ="/WomenTops3";
  res.render('WomenTops3');
});


router.get('/WomenTops4', function(req, res, next) {
  req.session.prevUrl ="/WomenTops4";
  res.render('WomenTops4');
});


router.get('/WomenTops5', function(req, res, next) {
  req.session.prevUrl ="/WomenTops5";
  res.render('WomenTops5');
});


router.get('/WomenTops6', function(req, res, next) {
  req.session.prevUrl ="/WomenTops6";
  res.render('WomenTops6');
});


router.get('/WomenTops7', function(req, res, next) {
  req.session.prevUrl ="/WomenTops7";
  res.render('WomenTops7');
});


router.get('/WomenTops8', function(req, res, next) {
  req.session.prevUrl ="/WomenTops8";
  res.render('WomenTops8');
});


router.get('/WomenTops9', function(req, res, next) {
  req.session.prevUrl ="/WomenTops9";
  res.render('WomenTops9');
});


router.get('/WomenTrouser', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser";
  res.render('WomenTrouser');
});


router.get('/WomenTrouser1', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser1";
  res.render('WomenTrouser1');
});


router.get('/WomenTrouser2', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser2";
  res.render('WomenTrouser2');
});


router.get('/WomenTrouser3', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser3";
  res.render('WomenTrouser3');
});


router.get('/WomenTrouser4', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser4";
  res.render('WomenTrouser4');
});


router.get('/WomenTrouser5', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser5";
  res.render('WomenTrouser5');
});


router.get('/WomenTrouser6', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser6";
  res.render('WomenTrouser6');
});


router.get('/WomenTrouser7', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser7";
  res.render('WomenTrouser7');
});


router.get('/WomenTrouser8', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser8";
  res.render('WomenTrouser8');
});


router.get('/WomenTrouser9', function(req, res, next) {
  req.session.prevUrl ="/WomenTrouser9";
  res.render('WomenTrouser9');
});


router.get('/WomenWatches1', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches1";
  res.render('WomenWatches1');
});

router.get('/WomenWatches2', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches2";
  res.render('WomenWatches2');
});

router.get('/WomenWatches3', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches3";
  res.render('WomenWatches3');
});

router.get('/WomenWatches4', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches4";
  res.render('WomenWatches4');
});

router.get('/WomenWatches5', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches5";
  res.render('WomenWatches5');
});

router.get('/WomenWatches6', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches6";
  res.render('WomenWatches6');
});

router.get('/WomenWatches7', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches7";
  res.render('WomenWatches7');
});

router.get('/WomenWatches8', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches8";
  res.render('WomenWatches8');
});

router.get('/WomenWatches9', function(req, res, next) {
  req.session.prevUrl ="/WomenWatches9";
  res.render('WomenWatches9');
});

router.get('/menFormalShoes', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes";
  res.render('menFormalShoes');
});

router.get('/menFormalShoes_a', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_a";
  res.render('menFormalShoes_a');
});

router.get('/menFormalShoes_b', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_b";
  res.render('menFormalShoes_b');
});

router.get('/menFormalShoes_c', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_c";
  res.render('menFormalShoes_c');
});

router.get('/menFormalShoes_d', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_d";
  res.render('menFormalShoes_d');
});

router.get('/menFormalShoes_e', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_e";
  res.render('menFormalShoes_e');
});

router.get('/menFormalShoes_f', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_f";
  res.render('menFormalShoes_f');
});

router.get('/menFormalShoes_g', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_g";
  res.render('menFormalShoes_g');
});

router.get('/menFormalShoes_h', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_h";
  res.render('menFormalShoes_h');
});

router.get('/menFormalShoes_i', function(req, res, next) {
  req.session.prevUrl ="/menFormalShoes_i";
  res.render('menFormalShoes_i');
});

router.get('/menJeans', function(req, res, next) {
  req.session.prevUrl ="/menJeans";
  res.render('menJeans');
});

router.get('/menJeans_a', function(req, res, next) {
  req.session.prevUrl ="/menJeans_a";
  res.render('menJeans_a');
});

router.get('/menJeans_b', function(req, res, next) {
  req.session.prevUrl ="/menJeans_b";
  res.render('menJeans_b');
});

router.get('/menJeans_c', function(req, res, next) {
  req.session.prevUrl ="/menJeans_c";
  res.render('menJeans_c');
});

router.get('/menJeans_d', function(req, res, next) {
  req.session.prevUrl ="/menJeans_d";
  res.render('menJeans_d');
});

router.get('/menJeans_e', function(req, res, next) {
  req.session.prevUrl ="/menJeans_e";
  res.render('menJeans_e');
});

router.get('/menJeans_f', function(req, res, next) {
  req.session.prevUrl ="/menJeans_f";
  res.render('menJeans_f');
});

router.get('/menJeans_g', function(req, res, next) {
  req.session.prevUrl ="/menJeans_g";
  res.render('menJeans_g');
});

router.get('/menJeans_h', function(req, res, next) {
  req.session.prevUrl ="/menJeans_h";
  res.render('menJeans_h');
});

router.get('/menJeans_i', function(req, res, next) {
  req.session.prevUrl ="/menJeans_i";
  res.render('menJeans_i');
});

router.get('/menShirt', function(req, res, next) {
  req.session.prevUrl ="/menShirt";
  res.render('menShirt');
});

router.get('/menShirt_a', function(req, res, next) {
  req.session.prevUrl ="/menShirt_a";
  res.render('menShirt_a');
});

router.get('/menShirt_b', function(req, res, next) {
  req.session.prevUrl ="/menShirt_b";
  res.render('menShirt_b');
});

router.get('/menShirt_c', function(req, res, next) {
  req.session.prevUrl ="/menShirt_c";
  res.render('menShirt_c');
});

router.get('/menShirt_d', function(req, res, next) {
  req.session.prevUrl ="/menShirt_d";
  res.render('menShirt_d');
});

router.get('/menShirt_e', function(req, res, next) {
  req.session.prevUrl ="/menShirt_e";
  res.render('menShirt_e');
});

router.get('/menShirt_f', function(req, res, next) {
  req.session.prevUrl ="/menShirt_f";
  res.render('menShirt_f');
});

router.get('/menShirt_g', function(req, res, next) {
  req.session.prevUrl ="/menShirt_g";
  res.render('menShirt_g');
});

router.get('/menShirt_h', function(req, res, next) {
  req.session.prevUrl ="/menShirt_h";
  res.render('menShirt_h');
});

router.get('/menShirt_i', function(req, res, next) {
  req.session.prevUrl ="/menShirt_i";
  res.render('menShirt_i');
});

router.get('/menTrouser_a', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_a";
  res.render('menTrouser_a');
});

router.get('/menTrouser_b', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_b";
  res.render('menTrouser_b');
});

router.get('/menTrouser_c', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_c";
  res.render('menTrouser_c');
});

router.get('/menTrouser_d', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_d";
  res.render('menTrouser_d');
});

router.get('/menTrouser_e', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_e";
  res.render('menTrouser_e');
});

router.get('/menTrouser_f', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_f";
  res.render('menTrouser_f');
});

router.get('/menTrouser_g', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_g";
  res.render('menTrouser_g');
});

router.get('/menTrouser_h', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_h";
  res.render('menTrouser_h');
});

router.get('/menTrouser_i', function(req, res, next) {
  req.session.prevUrl ="/menTrouser_i";
  res.render('menTrouser_i');
});

router.get('/men_shirt', function(req, res, next) {
  req.session.prevUrl ="/men_shirt";
  res.render('men_shirt');
});

router.get('/men_watches', function(req, res, next) {
  req.session.prevUrl ="/men_watches";
  res.render('men_watches');
});

router.get('/paints', function(req, res, next) {
  req.session.prevUrl ="/paints";
  res.render('paints');
});

router.get('/saree_a', function(req, res, next) {
  req.session.prevUrl ="/saree_a";
  res.render('saree_a');
});

router.get('/saree_b', function(req, res, next) {
  req.session.prevUrl ="/saree_b";
  res.render('saree_b');
});

router.get('/saree_c', function(req, res, next) {
  req.session.prevUrl ="/sarre_c";
  res.render('saree_c');
});

router.get('/saree_d', function(req, res, next) {
  req.session.prevUrl ="/saree_d";
  res.render('saree_d');
});

router.get('/saree_e', function(req, res, next) {
  req.session.prevUrl ="/sarre_e";
  res.render('saree_e');
});

router.get('/saree_f', function(req, res, next) {
  req.session.prevUrl ="/saree_f";
  res.render('saree_f');
});

router.get('/saree_g', function(req, res, next) {
  req.session.prevUrl ="/saree_g";
  res.render('saree_g');
});

router.get('/saree_h', function(req, res, next) {
  req.session.prevUrl ="/saree_h";
  res.render('saree_h');
});

router.get('/saree_i', function(req, res, next) {
  req.session.prevUrl ="/saree_i";
  res.render('saree_i');
});

router.get('/tops', function(req, res, next) {
  req.session.prevUrl ="/tops";
  res.render('tops');
});

router.get('/trouser', function(req, res, next) {
  req.session.prevUrl ="/trouser";
  res.render('trouser');
});

router.get('/women', function(req, res, next) {
  req.session.prevUrl ="/women";
  res.render('women');
});

router.get('/women_watches', function(req, res, next) {
  req.session.prevUrl ="/women_watches";
  res.render('women_watches');
});

router.get('/about', function(req, res, next) {
  req.session.prevUrl ="/about";
  res.render('about');
});

router.get('/index', function(req, res, next) {
  req.session.prevUrl ="/index";
  res.render('index');
});

router.get('/footwear', function(req, res, next) {
  req.session.prevUrl ="/footwear2";
  res.render('footwear');
});






router.get('/Men', function(req, res, next) {
  req.session.prevUrl ="";
  res.render('Men');
});

router.get('/Women', function(req, res, next) {
  req.session.prevUrl ="";
  res.render('Women');
});
module.exports = router;
