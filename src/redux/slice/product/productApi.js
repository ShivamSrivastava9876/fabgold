export async function getProduct() {
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
            'http://127.0.0.1:8000/admin_panel/product-item-list/',
            {
                method: 'GET',
                headers: header
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data };
        }
        else {
            const error = await response.text();
            return { error };
        }

    }
    catch (error) {
        return { error }
    }
};

export async function createProduct(newProductInfo) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            Authorization: `Token ${token}`
        }
        const images = newProductInfo.image;
        const allImages = [];
        for (let i = 0; i < images.length; i++) {
            allImages.push(images[i]);
        }

        const formData = new FormData();
        formData.append("category", newProductInfo.category);
        formData.append("product_type", newProductInfo.product_type);
        formData.append("product_id", newProductInfo.product_id);
        formData.append("product_name", newProductInfo.product_name);
        formData.append("hu_id", newProductInfo.hu_id);
        formData.append("model", newProductInfo.model);
        formData.append("sub_model", newProductInfo.sub_model);
        formData.append("gross_wt", newProductInfo.weight);
        formData.append("stone_wt", newProductInfo.stone_wt);
        formData.append("metal_wt", newProductInfo.metal_weight);
        formData.append("metal_price", newProductInfo.metal_price);
        formData.append("making_charges", newProductInfo.making_charges);
        formData.append("other_charges", newProductInfo.other_charges);
        formData.append("size", newProductInfo.size);
        formData.append("length", newProductInfo.length);
        formData.append("purity_spec", newProductInfo.purity_spec);
        formData.append("quantity", newProductInfo.quantity);
        for (let i = 0; i < allImages.length; i++) {
            formData.append('images', allImages[i]);
        }
        formData.append("description", newProductInfo.description);
        formData.append("is_available", newProductInfo.is_available);
        const response = await fetch(
            'http://127.0.0.1:8000/admin_panel/add/product-item/',
            {
                method: 'POST',
                headers: header,
                body: formData
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data };
        }
        else {
            const error = await response.text();
            return { error };
        }

    }
    catch (error) {
        return { error }
    }
};

export async function updateProduct(updateProductInfo) {
    try {

        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            Authorization: `Token ${token}`
        }
        const images = updateProductInfo.image;
        // const allImages = new FormData();
        const allImages = [];
        for (let i = 0; i < images.length; i++) {
            allImages.push(images[i]);
        }
        console.log("meme", updateProductInfo.metal_weight)

        //also get productId in updateProductInfo
        const formData = new FormData();
        formData.append("category", updateProductInfo.category);
        formData.append("product_type", updateProductInfo.product_type);
        formData.append("product_id", updateProductInfo.product_id);
        formData.append("product_name", updateProductInfo.product_name);
        formData.append("hu_id", updateProductInfo.hu_id);
        formData.append("model", updateProductInfo.model);
        formData.append("sub_model", updateProductInfo.sub_model);
        formData.append("gross_wt", updateProductInfo.gross_wt);
        formData.append("stone_wt", updateProductInfo.stone_wt);
        formData.append("metal_wt", updateProductInfo.metal_wt);
        formData.append("metal_price", updateProductInfo.metal_price);
        formData.append("making_charges", updateProductInfo.making_charges);
        formData.append("other_charges", updateProductInfo.other_charges);
        formData.append("size", updateProductInfo.size);
        formData.append("length", updateProductInfo.length);
        formData.append("purity_spec", updateProductInfo.purity_spec);
        formData.append("quantity", updateProductInfo.quantity);
        for (let i = 0; i < allImages.length; i++) {
            formData.append('images', allImages[i]);
        }
        formData.append("description", updateProductInfo.description);
        formData.append("is_available", updateProductInfo.is_available);

        const response = await fetch(
            `http://127.0.0.1:8000/admin_panel/update/${updateProductInfo.productId}/product-item/`,
            {
                method: 'PUT',
                headers: header,
                body: formData
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data };
        }
        else {
            const error = await response.text();
            return { error };
        }

    }
    catch (error) {
        return { error }
    }
};

export async function deleteProduct(productId) {
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
            `http://127.0.0.1:8000/admin_panel/delete/${productId}/product-item/`,
            {
                method: 'DELETE',
                headers: header
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data };
        }
        else {
            const error = await response.text();
            return { error };
        }

    }
    catch (error) {
        return { error }
    }
};

export async function searchProduct(searchProductInfo) {
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
            `http://127.0.0.1:8000/admin_panel/product-item-list/?search=${searchProductInfo}`,
            {
                method: 'GET',
                headers: header
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data };
        }
        else {
            const error = await response.text();
            return { error };
        }

    }
    catch (error) {
        return { error }
    }
};