export async function loginCustomer(customerInfo) {
  try {
    console.log(JSON.stringify("customerInfo:", customerInfo));
    const response = await fetch("http://127.0.0.1:8000/users/user-login/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customerInfo),
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.json();
      return { error };
    }
  } catch (error) {
    return { error };
  }
}

export async function registerCustomer(customerInfo) {
  try {
    console.log(JSON.stringify("customerInfo:", customerInfo));
    const response = await fetch("http://127.0.0.1:8000/users/user-register/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customerInfo),
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.json();
      return { error };
    }
  } catch (error) {
    return { error };
  }
}

export async function getCustomerDetails() {
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
      "http://127.0.0.1:8000/users/user-profile/",
      {
        method: "GET",
        headers: header,
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { data };
    }
    else {
      const error = await response.text();
      return { data: error };
    }
  }
  catch (error) {
    return { error };
  }
}

export async function updateCustomerDetails() {
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
      "http://127.0.0.1:8000/users/update/user-profile/",
      {
        method: "PUT",
        headers: header,
        body: JSON.stringify(customerInfo),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { data };
    }
    else {
      const error = await response.text();
      return { data: error };
    }
  }
  catch (error) {
    return { error };
  }
}

export async function logoutCustomer() {
  try {
    function getToken() {
      return localStorage.getItem("token");
    }
    const token = getToken();
    const header = {
      "Content-type": "application/json",
      Authorization: `Token ${token}`
    }
    const response = await fetch(
      "http://127.0.0.1:8000/users/user-logout/",
      {
        method: "POST",
        headers: header
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { data };

    } else {
      const error = await response.json();
      return { error };
    }
  }
  catch (error) {
    return { error };
  }
}