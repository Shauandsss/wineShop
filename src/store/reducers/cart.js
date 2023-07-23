const INITIAL_STATE = {
  cart: [{ totalPrice: 0, totalQuantity: 0, itens: [] }],
  wines: [
    {
      id: 1,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/santa-augusta-corte-de-brancas-vsa-q0kjmvxc8ohi2j03utcekwfkft16lk4o0z1afj2yu8.png",
    },
    {
      id: 2,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/fenice-pinot-noir-q0k1vj3dkj96z1pc8y6x2qne9mc7x6xfsgajwx295s.png",
    },
    {
      id: 3,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/fenice-sauvignon-blanc22-q0k297mt1pzfyptwcv3fdacxjiwjyl8sc64zdwrylc.png",
    },
    {
      id: 4,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/tapera-chardonnay-q0usn2m5onj9gszcjh6vp6l0jqyziufcrl6hschk2o.png",
    },
    {
      id: 5,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/tapera-moscato-giallo-q0us1287nbejliyc2godt8jfrxgka01mqn86834fs0.png",
    },
    {
      id: 6,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/tapera-malbec-rose-1-q0ut1kal1pdegdxkx8otn0xu8ljp6uydrb8z4x025c.png",
    },
    {
      id: 7,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/santa-augusta-pinot-noir-rose-vsa-q0kkm9knh6x125m29lvvxh15cwnjbfkyk307pgmin4.png",
    },
    {
      id: 8,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/fenice-gran-corte-q0ka6jj3n8kw9fde876g9aa568joixzi8fb3tpppsw.png",
    },
    {
      id: 9,
      name: "Vinho Rosé Pinot Noir Santa Augusta",
      price: 299.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/fenice-merlot-vsa-q0kal17j0af190bmlyoe74myv34e6yij85dl6a87vk.png",
    },
    {
      id: 10,
      name: "Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",
      price: 349.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/fenice-chardonnay-vsa-q0kar71ft6upczdemmkcjknr20r0niz6qnc6fl3b34.png",
    },
    {
      id: 11,
      name: "Vinho Tinto Pinot Noir MAESTRIA",
      price: 129.9,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/tapera-corte-tinto-q0utcfbg0s8om65lhxpmga9lcw0e4y2px2mys0wa8w.png",
    },
    {
      id: 12,
      name: "Vinho Branco Sauvignon Blanc SANTA AUGUSTA",
      price: 99.99,
      img_url:
        "https://santaaugusta.com.br/wp-content/uploads/elementor/thumbs/tapera-sauvignon-blanc-1-q0ut7jjmirk2b38x0bqe00me9u2r5jowwwn61a4wkg.png",
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
