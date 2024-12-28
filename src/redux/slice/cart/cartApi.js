export async function getCartList(userId) {
  try {
    function getToken() {
      return localStorage.getItem("token");
    }
    const token = getToken();
    const header = {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    };
    const response = await fetch(
      `http://127.0.0.1:8000/carts/cartitems/${userId}/`,
      {
        method: "GET",
        headers: header,
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.text();
      return { error };
    }
  } catch (error) {
    return { error };
  }
}

export async function deleteCartItem(cartItemId) {
  try {
    function getToken() {
      return localStorage.getItem("token");
    }
    const token = getToken();
    const header = {
      "Content-type": "application/json",
      Authorization: `Token ${token}`,
    };
    const response = await fetch(
      `http://127.0.0.1:8000/carts/cartitems/${cartItemId}/delete/`,
      {
        method: "DELETE",
        headers: header,
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.text();
      return { error };
    }
  } catch (error) {
    return { error };
  }
}
