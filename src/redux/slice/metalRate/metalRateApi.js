export async function getGoldRate() {
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
            'http://127.0.0.1:8000/admin_panel/get-gold-rate/',
            {
                method: "GET",
                headers: header
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data }
        }
        else {
            const error = await response.text();
            return { error };
        }
    }
    catch (error) {
        return { error };
    }
}

export async function createGoldRate(goldRateInfo) {
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
            'http://127.0.0.1:8000/admin_panel/add-daily-goldrate/',
            {
                method: "POST",
                headers: header,
                body: JSON.stringify(goldRateInfo)
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
        return { error };
    }
}

export async function getSilverRate() {
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
            'http://127.0.0.1:8000/admin_panel/get-silver-rate/',
            {
                method: "GET",
                headers: header
            }
        )
        if (response.ok) {
            const data = await response.json();
            return { data }
        }
        else {
            const error = await response.text();
            return { error };
        }
    }
    catch (error) {
        return { error };
    }
}

export async function createSilverRate(silverRateInfo) {
    try {
        console.log(silverRateInfo)
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/admin_panel/add-daily-silverrate/',
            {
                method: "POST",
                headers: header,
                body: JSON.stringify(silverRateInfo)
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
        return { error };
    }
}
