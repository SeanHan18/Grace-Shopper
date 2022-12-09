const { client } = require('./')

const { createProduct, getAllProducts, getProductById, destroyProduct } = require('./products')
const { createUser, getUserById } = require('./users')
const { createReview, getReviewById, getAllReviews, destroyReview } = require('./reviews')
const { createCart, addToCart, getCartById, removeFromCart, getAllCarts, destroyCart } = require('./cart')

async function dropTables() {

  console.log("Dropping All Tables...")

  await client.query(`
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS carts;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;
  `);
  
  console.log("Finished dropping tables!");
}

async function createTables() {

  try {
    console.log("Starting to build tables...")

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        birthday DATE NOT NULL,
        cart integer ARRAY,
        active boolean DEFAULT TRUE,
        admin boolean DEFAULT FALSE
      );
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR NOT NULL,
        rating INTEGER,
        CHECK (rating BETWEEN 0 and 5),
        image VARCHAR NOT NULL,
        type varchar(255) NOT NULL,
        price DECIMAL(19,3) NOT NULL
      );
      CREATE TABLE carts (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "productIds" INTEGER ARRAY
      );
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        name varchar(255) NOT NULL,
        description TEXT NOT NULL, 
        rating INTEGER NOT NULL,
        CHECK (rating BETWEEN 1 and 5),
        "productId" INTEGER REFERENCES products(id),
        "userId" INTEGER REFERENCES users(id)
      ); 
  `);

    console.log("Finished building tables!")
  } catch (error) {
    console.error("Error building tables!")
  }
}

async function createInitialProducts() {

    try {
    
    console.log('Creating Products')

    // BEARINGS
    const bearing1 = await createProduct({
      title: "Bones - Ceramic Super Reds Bearings",
      description: "These are bones bearings",
      type: "Bones",
      rating: 4,
      numReviews: "150",
      category: "Bearings",
      image: "http://placeimg.com/500/500/any",
      price: 30
    });
    const bearing2 = await createProduct({
      title: "Bones - Ceramic Swiss Bearings",
      description: "These are bones bearings",
      type: "Bones",
      category: "Bearings",
      image: "../Images/Bearings/Bones/CeramicSwiss/Image1.jpg",
      price: 30
    });
    const bearing3 = await createProduct({
      title: "Bones - Original Swiss Bearings",
      description: "These are bones bearings",
      type: "Bones",
      category: "Bearings",
      image: "../Images/Bearings/Bones/OriginalSwiss/Image1.jpg",
      price: 30
    });
    const bearing4 = await createProduct({
      title: "Bones - Race Reds Bearings",
      description: "These are bones bearings",
      type: "Bones",
      category: "Bearings",
      image: "../Images/Bearings/Bones/RaceReds/Image1.jpg",
      price: 30
    });
    const bearing5 = await createProduct({
      title: "Bones - Super Swiss 6 Ball Bearings",
      description: "These are bones bearings",
      type: "Bones",
      category: "Bearings",
      image: "../Images/Bearings/Bones/SuperSwiss6Ball/Image1.jpg",
      price: 30
    });
    

    // DECKS
    const deck1 = await createProduct({
        title: "April - Yuto Skytree Deck 8.25 x 32",
        description: "April - Yuto Skytree Deck 8.25 x 32",
        type: "April",
        category: "Decks",
        image: "../Images/Decks/April/Image1.jpg",
        price: 45
      });

    const deck2 = await createProduct({
        title: "Blueprint - Home Heart Black on Black Deck 8.25 x 32",
        description: "Blueprint - Home Heart Black on Black Deck 8.25 x 32",
        type: "Blueprint",
        category: "Decks",
        image: "../Images/Decks/Blueprint/HomeHeartBlackBlack/Image1.jpg",
        price: 50
      });

    const deck3 = await createProduct({
        title: "Blueprint - Home Heart Black on Gold Deck 8.25 x 32",
        description: "Blueprint - Home Heart Black on Gold Deck 8.25 x 32",
        type: "Blueprint",
        category: "Decks",
        image: "../Images/Decks/Blueprint/HomeHeartBlackGold/Image1.jpg",
        price: 50
      });

    const deck4 = await createProduct({
        title: "Element - '92 Classic Deck 7.75 x 32",
        description: "Element - '92 Classic Deck 7.75 x 32",
        type: "Element",
        category: "Decks",
        image: "../Images/Decks/Element/92Classic/Image1.jpg",
        price: 55
      });

    const deck5 = await createProduct({
        title: "Element - Dispersion Deck 8 x 32",
        description: "Element - Dispersion Deck 8 x 32",
        type: "Element",
        category: "Decks",
        image: "../Images/Decks/Element/Dispersion/Image1.jpg",
        price: 55
      });

    const deck6 = await createProduct({
        title: "Element - Quadrant Deck 8 x 32",
        description: "Element - Quadrant Deck 8 x 32",
        type: "Element",
        category: "Decks",
        image: "../Images/Decks/Element/Quadrant/Image1.jpg",
        price: 60
      });

    const deck7 = await createProduct({
        title: "Element - Section Black Deck 8 x 32",
        description: "Element - Section Black Deck 8 x 32",
        type: "Element",
        category: "Decks",
        image: "../Images/Decks/Element/SectionBlack/Image1.jpg",
        price: 60
      });

    const deck8 = await createProduct({
        title: "Element x Bob Ross - Everybody Needs a Friend Deck 7.75 x 32",
        description: "Element x Bob Ross - Everybody Needs a Friend Deck 7.75 x 32",
        type: "Element",
        category: "Decks",
        image: "../Images/Decks/Element/EverybodyNeedsAFriend/Image1.jpg",
        price: 75
      });

    const deck9 = await createProduct({
        title: "Enjoi - Whitey Panda Deck 7.5 x 31",
        description: "Enjoi - Whitey Panda Deck 7.5 x 31",
        type: "Enjoi",
        category: "Decks",
        image: "../Images/Decks/Enjoi/WhiteyPanda/Image1.jpg",
        price: 75
      });

    const deck10 = await createProduct({
        title: "Globe - G1 Stack Refracted Deck 8 x 31.6",
        description: "Globe - G1 Stack Refracted Deck 8 x 31.6",
        type: "Globe",
        category: "Decks",
        image: "../Images/Decks/Globe/Image1.jpg",
        price: 75
      });

    
    // TRUCKS
    const truck1 = await createProduct({
        title: "Ace - AF1 Hollow Truck Polished Trucks",
        description: "Ace - AF1 Hollow Truck Polished Trucks",
        type: "Ace",
        category: "Trucks",
        image: "../Images/Trucks/Ace/AF1 Hollow/Image1.jpg",
        price: 40
      });  

    const truck2 = await createProduct({
        title: "Independant - Stage 11 BTG Speed Standard Trucks",
        description: "Independant - Stage 11 BTG Speed Standard Trucks",
        type: "Independant",
        category: "Trucks",
        image: "../Images/Trucks/Independant/Stage11/BTGSpeedStandard/Image1.jpg",
        price: 40
      });  

    const truck3 = await createProduct({
        title: "Independant - Stage 11 Primitive Trucks",
        description: "Independant - Stage 11 Primitive Trucks",
        type: "Independant",
        category: "Trucks",
        image: "../Images/Trucks/Independant/Stage11/PrimitiveMid/Image1.jpg",
        price: 40
      });  

    const truck4 = await createProduct({
        title: "Tensor - Alloys Truck Raw White Trucks",
        description: "Tensor - Alloys Truck Raw White Trucks",
        type: "Tensor",
        category: "Trucks",
        image: "../Images/Trucks/Tensor/Alloys/Image1.jpg",
        price: 40
      });  

    const truck5 = await createProduct({
        title: "Venture - Worrest Custom V-Light Trucks",
        description: "Venture - Worrest Custom V-Light Trucks",
        type: "Venture",
        category: "Trucks",
        image: "../Images/Trucks/Venture/WorrestCustomV-Light/Image1.jpg",
        price: 40
      });  


    // WHEELS
    const wheel1 = await createProduct({
        title: "Bones - ATF Rough Riders Black",
        description: "Bones - ATF Rough Riders Black",
        type: "Bones",
        category: "Wheels",
        image: "../Images/Wheels/Bones/ATF-RoughRiders/Black/Image1.jpg",
        price: 25
      });

    const wheel2 = await createProduct({
        title: "Bones - ATF Rough Riders Green",
        description: "Bones - ATF Rough Riders Green",
        type: "Bones",
        category: "Wheels",
        image: "../Images/Wheels/Bones/ATF-RoughRiders/Green/Image1.jpg",
        price: 25
      });

    const wheel3 = await createProduct({
        title: "Bones - ATF Rough Riders Red",
        description: "Bones - ATF Rough Riders Red",
        type: "Bones",
        category: "Wheels",
        image: "../Images/Wheels/Bones/ATF-RoughRiders/Red/Image1.jpg",
        price: 25
      });

    const wheel4 = await createProduct({
        title: "Bones - STF Miskell Power 103a V5 Sidecut Wheels",
        description: "Bones - STF Miskell Power 103a V5 Sidecut Wheels",
        type: "Bones",
        category: "Wheels",
        image: "../Images/Wheels/Bones/STF/MiskellPower/Image1.jpg",
        price: 30
      });

    const wheel5 = await createProduct({
        title: "Bones - STF Reaper Burial 99a V1 Wheels",
        description: "Bones - STF Reaper Burial 99a V1 Wheels",
        type: "Bones",
        category: "Wheels",
        image: "../Images/Wheels/Bones/STF/ReaperBurial/Image1.jpg",
        price: 30
      });




    
    // const product1 = await createProduct({
    //   title:
    //     "The first most amazing product",
    //   description:
    //     "Description for the first most amazing product ever....",
    //   type:
    //     "Product Type 1",
    //   category:"FIRST",
    //   image:'http://placeimg.com/640/480/any',
    //   price:
    //     100
    // });
    // const product2 = await createProduct({
    //   title:
    //     "The second most amazing product",
    //   description:
    //     "Description for the first most amazing product ever....",
    //   type:
    //     "Product Type 1",
    //   category:"FIRST",
    //   image:'http://placeimg.com/640/480/any',
    //   price:
    //     100
    // });
    // const product3 = await createProduct({
    //   title:
    //     "The third most amazing product",
    //   description:
    //     "Description for the first most amazing product ever....",
    //   type:
    //     "Product Type 1",
    //   category:"SECOND",
    //   image:'http://placeimg.com/640/480/any',
    //   price:
    //     100
    // });

    console.log('Finished creating Products')
    console.log("Products created:")
    console.log(bearing1, deck1, truck1, wheel1)
  }
  catch (error) {
    console.error('error creating Products')
  }
}

async function testDeleteProduct() {

  try {
    
    console.log('Creating Test Products for deletion:')
    
    const testProduct1 = await createProduct({
      title:
        "The fourth most amazing test product",
      description:
        "Description for the first most amazing product ever....",
      type:
        "Product Type 1",
      category:"FIRST",
      image:'http://placeimg.com/640/480/any',
      price:
        100
    });

    console.log("Grabbing products before deletion:", await getAllProducts())
    await destroyProduct(26)
    console.log("Grabbing products after deletion:", await getAllProducts())
  } catch (error) {
    throw error
  }
}

async function createInitialUsers() {

  console.log("Creating initial users...")

  try {
    const usersToCreate = [
      { username: "sean", password: "seanpassword", birthday: "09-21-1993", admin: "true" },
      { username: "gary", password: "garypassword", birthday: "06-11-2022", admin: "true" },
      { username: "grant", password: "grantpassword", birthday: "07-11-2022", admin: "true" },
      { username: "wes", password: "wespassword", birthday: "07-11-2022", admin: "true" },
      { username: "brayden", password: "braydenpassword", birthday: "07-11-2022", admin: "true" }
    ]

    const users = await Promise.all(usersToCreate.map(createUser))

    console.log("Users created:")
    console.log(users)
    console.log("Finished creating intial users")

  } catch (error) {
    console.error("Error creating initial users")
    throw error
  }
}

async function createInitialReviews() {

  console.log("Creating initial reviews...")

  const [productTest1] = await getAllProducts()

  try {
    const review1 = await createReview({
      name: "Review 1",
      description: "Review Description 1",
      rating: 1,
      productId: productTest1.id,
      userId: 1
    })

    // const review2 = await createReview({
    //   name: "Review 2",
    //   description: "Review Description 2",
    //   rating: 2,
    //   productId: productTest2.id,
    //   userId: 2
    // })

    // const review3 = await createReview({
    //   name: "Review 3",
    //   description: "Review Description 3",
    //   rating: 5,
    //   productId: productTest3.id,
    //   userId: 3
    // });

    console.log("Finished creating reviews")
    console.log("Reviews created:")
    console.log(review1)

  } catch (error) {
    console.error("Error creating initial reviews")
    throw error
  }
}

async function testDeleteReview() {

  try {
    console.log("Grabbing reviews before deletion:", await getAllReviews())
    await destroyReview(3)
    console.log("Grabbing reviews after deletion:", await getAllReviews())

  } catch (error) {
    throw error
  }
}

async function buildDB() {

  try {
    // need to add something here
    client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();
    await testDeleteProduct();
    await createInitialUsers();
    await createInitialReviews();

  } catch (ex) {
    console.log('Error building the DB')
    throw ex;
  }
}

buildDB()
  .catch(console.error)
  .finally(() => client.end())