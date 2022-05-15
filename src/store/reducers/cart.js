const INITIAL_STATE = {
  cart: [{ totalPrice: 0, totalQuantity: 0, itens: [] }],
  wines: [
    {
      id: 1,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",
    },
    {
      id: 2,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",
    },
    {
      id: 3,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",
    },
    {
      id: 4,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",
    },
    {
      id: 5,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",
    },
    {
      id: 6,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",
    },
    {
      id: 7,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",
    },
    {
      id: 8,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",
    },
    {
      id: 9,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",
    },
    {
      id: 10,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",
    },
    {
      id: 11,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",
    },
    {
      id: 12,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",
    },
  ],
};

export default function cart(state = INITIAL_STATE, action) {
  const { type, wine } = action;

  if (type === "REMOVE_ONE_FROM_CART") {
    let actualState = state.cart;

    for (let i = 0; i < actualState[0].itens.length; i++) {
      if (actualState[0].itens[i].id === wine.id) {
        actualState[0].itens[i].total_price =
          actualState[0].itens[i].total_price -
          actualState[0].itens[i].original_price;
        actualState[0].itens[i].quantity = actualState[0].itens[i].quantity - 1;
      }
    }

    actualState[0] = {
      totalPrice: actualState[0].totalPrice - wine.price,
      totalQuantity: actualState[0].totalQuantity - 1,
      itens: actualState[0].itens,
    };

    console.log({
      ...state,
      cart: actualState[0],
    });

    return {
      ...state,
      cart: [actualState[0]],
    };
  }

  if (type === "ADD_TO_CART") {
    let actualState = state.cart;

    let wineQuantity = 1;
    for (let i = 0; i < actualState[0].itens.length; i++) {
      if (actualState[0].itens[i].id === wine.id)
        wineQuantity = wineQuantity + actualState[0].itens[i].quantity;
    }

    let wineTemp = {
      id: wine.id,
      name: wine.name,
      img_url: wine.img_url,
      original_price: wine.price,
      total_price: wine.price * wineQuantity,
      quantity: wineQuantity,
    };

    if (wineQuantity > 1) {
      var removeIndex = actualState[0].itens
        .map((item) => item.id)
        .indexOf(wine.id);
      ~removeIndex && actualState[0].itens.splice(removeIndex, 1);
    }
    actualState[0].itens.push(wineTemp);
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let i = 0; i < actualState[0].itens.length; i++) {
      totalQuantity = totalQuantity + actualState[0].itens[i].quantity;
      totalPrice = totalPrice + actualState[0].itens[i].total_price;
    }
    return {
      ...state,
      cart: [
        {
          totalPrice: totalPrice,
          totalQuantity: totalQuantity,
          itens: actualState[0].itens,
        },
      ],
    };
  }
  return state;
}
