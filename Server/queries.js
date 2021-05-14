const { Empty } = require("antd");
const db = require("./Db-Config");
const parse = require("postgres-date");
const fs = require('fs')
const request = require('request')
 

const getUsers = (request, response) => {
  Category = request.body.Pathnamearray[2];
  id = request.body.Pathnamearray[3];

  db.pooldb.query(
    "SELECT * FROM public.product ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductpage = (request, response) => {
  // Category = request.body.Pathnamearray[2];
  // id = request.body.Pathnamearray[3];

  db.pooldb.query(`SELECT id, title, product_type, vendor, created_at, updated_at, published_at, status, "Product_Description"
	FROM public."PRODUCT" where id=15`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const getProductVariant = (request, response) => {
  
  // id = request.body.Pathnamearray[3];

  db.pooldb.query(`SELECT id, product_id, inventory_item_id, image_id, barcode, compare_at_price, created_at, weight, inventory_policy, inventory_quantity, price, sku, tax_code, taxable, title, updated_at, weight_unit, description, "Color", "Size"
	FROM public."PRODUCT_VARIANT" where product_id=15`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const ProductOption = (request, response) => {

  db.pooldb.query(` SELECT product_option_id, "Option_type", "Product_id", "Option"
	FROM public."Product_options"`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });



}
const getProduct = (request, response) => {
  db.pooldb.query(
    "SELECT * FROM  product ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getProductbycategory = (request, response) => {
  console.log(request.body.Pathnamearray[2]);
  db.pooldb.query(
    "SELECT * FROM public.product ORDER BY id ASC LIMIT 100",
    (error, results) => {
      if (error) {
        throw error;
      }
      // response.status(200).json(results.rows);
      response.end(JSON.stringify(results.rows));
    }
  );
};

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id);

  await db.pooldb.query(
    "SELECT * FROM users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        response.status(404).json("404 not Found");
      } else {
        response.status(200).json(results.rows);
      }
    }
  );
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  db.pooldb.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  db.pooldb.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  db.pooldb.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const postOrder = (request, response) => {
  const variant_id = "2";
  const customer_id = "9";
  const location_id = "1";
  const billing_address_id = "1";
  const quantity = "12";
  const product = [2, 3, 4];
  let count = 0;
  for (const product_id of product) {
    db.pooldb.query(
      "INSERT INTO ORDERS(product_id, variant_id, customer_id, location_id, billing_address_id, quantity, product_exists, sku, unit_price, subtotal_price, total_price, note, order_status, source,   currency,   checkout_token, cart_token, buyer_accepts_marketing   ) VALUES ( $1, '5', '9', '4', '6', '', 'yes', '500', '14', '120', '400', 'Hello', 'great','',  'USD',   '50', '60', 'yes' )",
      [product_id],
      (error, results) => {
        if (error) {
          throw error;
        } else {
          response.status(200).send(`Your Order Has Been Sent`);
        }
      }
    );
    count++;
  }
};

const MakeOrder = (jsonuser, cartItems) => {
  console.log(cartItems);
  let date_ob = new Date();
  let datenow = ("0" + date_ob.getDate()).slice(-2);
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();
  // prints date in YYYY-MM-DD format
  let date = year + "-" + month + "-" + datenow;
  let realdate = parse(date);
  // prints time in HH:MM format

  let Time = hours + 1 + ":" + minutes;

  dat = "'" + date + "'";
  
  var Product_id = [];
  var Product_Qty = [];
  var Product_Note = [];
 
  for (i = 0; i < cartItems.length; i++) {
    Product_id.push(cartItems[i].id);
    Product_Qty.push(cartItems[i].quantity);
    Product_Note.push("'" +cartItems[i].Note.toString()+"'");   
  }

  const variant_id = "2";
  const customer_id = "9";
  const location_id = "1";
  const billing_address_id = "1";
  const quantity = "12";
  let count = 0; 
  for (i = 0; i < cartItems.length; i++) {
    db.pooldb.query(
      ` INSERT INTO public."ORDERS"( product_id, variant_id, customer_id, location_id, billing_address_id, quantity, product_exists, sku, unit_price, subtotal_price, total_price, note, order_status, source, created_at , currency,   checkout_token, cart_token, buyer_accepts_marketing   ) VALUES (  $1, '5', '9', '4', '6', ` +Product_Qty[i] +` ,  'yes', 500, 14, 120, 400,` +Product_Note[i]+` , 'great','',` +
        dat +` ,  'USD',   50,` +Product_Qty[i] +` , 'yes' )`,
      [Product_id[i]],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Great");
 }
      }
    );
    count++;
  }
};
const InsertUserandOrder = (jsonuser) => {
  console.log("InsertUserandOrder");
};

const UserExist = (jsonuser, cartItems, request, response) => {
  db.pooldb.query(
    'SELECT id FROM "CUSTOMER" where email= $1 ',
    [jsonuser.email],
    (error, results) => {
      if (results.rows == "") {
        InsertUserandOrder();
      } else {
        console.log(results.rows);
        MakeOrder(jsonuser, cartItems);
        response.status(200).send(`Order Make`);
      }
    }
  );
};

const postUserFirebase = (request, response) => {
  const Data = request.body;
  UserExist(Data.jsonuser, Data.cartItems, request, response);
};



const InsertThisUser =(Data,response)=>{
console.log(Data.email)
console.log(Data.displayName)
console.log(Data.photoURL)
}

const IsThisUserExist =(Data,response) =>{

  db.pooldb.query(
    'SELECT id,email,"Picture" FROM "CUSTOMER" where email= $1 ',
    [Data.email],
    (error, results) => {
      if (results.rows == "") {
        InsertThisUser(Data)
      } else {
        console.log(results.rows);
       console.log('User Exist bitch')
       response.status(200).json(results.rows);
      }
    }
  );


}



const GivemeDataofThisUser =(request, response) =>{
  let Data =request.body.currentuser;
  console.log(Data)
  IsThisUserExist(Data,response)

}




module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getProductpage,
  getProduct,
  getProductbycategory,
  postOrder,
  postUserFirebase,
  GivemeDataofThisUser,
  getProductVariant,
  ProductOption,
};
