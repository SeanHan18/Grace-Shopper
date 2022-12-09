const { client } = require('./')

const { createProduct } = require('./products')

async function createInitialProducts() {

  try {
    
    console.log('Creating Products')


    // BEARINGS
    const bearing1 = await createProduct({
      title: "Bones - Ceramic Super Reds Bearings",
      description: "These are bones bearings",
      type: "Bones",
      category: "Bearings",
      rating: 5,
      image: "../Images/Bearings/Bones/CeramicSuperReds/Image1.jpg",
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

    
    console.log('Finished creating Products')
    console.log(bearing1, deck1)
  }
  catch (error) {
    console.error('error creating Products')
  }
}

async function seedProd() {

    try {
      
      client.connect();
      await createInitialProducts();
      await createInitialReviews();
  
    } catch (ex) {
      console.log('Error seeding products')
      throw ex;
    }
  }
  
  seedProd()
    .catch(console.error)
    .finally(() => client.end())