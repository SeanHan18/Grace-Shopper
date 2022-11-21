const { client } = require('./');

// async function getCart(){
//     try {
//         const { rows: cartId } = client.query(`
//             SELECT id
//             FROM carts;
//         `);
//         const carts = await Promise.all(cartId.map(
//             cart => get
//         ))
//     }catch(error){
//         throw error
//     }
// }

async function createCart(userId, productIds) {
  if(!userId){
    userId = null
  }
  try {
    const { rows: [cart] } = await client.query(`
          INSERT INTO carts ("userId", "productIds") 
            VALUES($1, $2) 
            RETURNING *;
          `, [userId, productIds,]);

    return cart;
  } catch (error) {
    throw error
  }
}

//if creating a cart without a user, set cart.userId to null

async function getCartById(id) {
  try {
    const { rows: [cart] } = await client.query(`
        SELECT *
        FROM carts
        WHERE id=$1;
      `, [id]);

    if (!cart) {
      throw {
        error: "error",
        name: "CartNotFound",
        message: "Cart was not found"
      };
    }

    return cart;
  } catch (error) {
    throw error;
  }
}

async function getCartByUserId(userId) {
  try {
    const { rows: [cart] } = await client.query(`
        SELECT *
        FROM carts
        WHERE "userId"=$1;
      `, [userId]);

    if (!cart) {
      throw {
        error: "error",
        name: "CartNotFound",
        message: "Cart was not found"
      };
    }

    return cart;
  } catch (error) {
    throw error;
  }
}

async function getAllCarts() {
  try {
    const { rows: cartID } = await client.query(`
      SELECT id
      FROM carts; 
    `);
    const carts = await Promise.all(cartID.map(
      cart => getCartById(cart.id)
    ));
    // console.log(carts)
    return carts;
  } catch (error) {
    throw error
  }
}

async function addToCart(userId, newProductId) {
  const newCart = await getCartById(userId)
  // console.log(newCart)
  newCart.productIds.push(newProductId)
  const newProductIds = newCart.productIds
  // console.log(newProductIds)
  // console.log(newCart)
  try {
    await client.query(`
        UPDATE carts
        SET "productIds" = '{${newProductIds}}'
        WHERE "userId"=${userId}
        RETURNING *;
        `)
    return newCart
  } catch (error) {
    throw error;
  }
}

async function removeFromCart(userId, newProductId) {
  const newCart = await getCartById(userId)
  // console.log(newCart)
  for (let i = 0; i < newCart.productIds.length; i++) {
    if (newCart.productIds[i] = newProductId) {
      const newCart = await getCartById(userId)
      const newProductIds = newCart.productIds
      const index = newProductIds.indexOf(newProductId)
      // console.log(newProductIds)
      newProductIds.splice(index, 1)
      // console.log(newProductIds)
      try {
        await client.query(`
        UPDATE carts
        SET "productIds" = '{${newProductIds}}'
        WHERE "userId"=${userId}
        RETURNING *;
        `)
    return newCart
      } catch (error) {
        throw error;
      }
    }
  }
}

async function destroyCart(id) {
  try {

    const { rows } = await client.query(`
    DELETE from carts
    WHERE id=$1
    RETURNING *;
  `, [id]);
    
    return rows;
  } catch (error) {
    throw error
  }
}

module.exports = { createCart, getCartById, getCartByUserId, getAllCarts, destroyCart, addToCart, removeFromCart }