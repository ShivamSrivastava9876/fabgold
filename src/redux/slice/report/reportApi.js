export async function getDailyReport() {
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
            'http://127.0.0.1:8000/report/daily-report/',
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

export async function getWeeklyReport() {
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
            'http://127.0.0.1:8000/report/weekly-report/',
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

export async function getMonthlyReport() {
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
            'http://127.0.0.1:8000/report/monthly-report/',
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

export async function getYearlyReport() {
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
            'http://127.0.0.1:8000/report/yearly-report/',
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

export async function getDailyReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/daily-list-report/',
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

export async function getWeeklyReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/weekly-list-report/',
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

export async function getMonthlyReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/monthly-list-report/',
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

export async function getYearlyReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/yearly-list-report/',
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

//Manufacturing report
export async function getDailyManufacturingReport() {
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
            'http://127.0.0.1:8000/report/manufacturing-daily-report/',
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

export async function getWeeklyManufacturingReport() {
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
            'http://127.0.0.1:8000/report/manufacturing-weekly-report/',
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

export async function getMonthlyManufacturingReport() {
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
            'http://127.0.0.1:8000/report/manufacturing-monthly-report/',
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

export async function getYearlyManufacturingReport() {
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
            'http://127.0.0.1:8000/report/manufacturing-yearly-report/',
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

export async function getDailyManufacturingReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/manufacturing-daily-list-report/',
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

export async function getWeeklyManufacturingReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/manufacturing-weekly-list-report/',
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

export async function getMonthlyManufacturingReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/manufacturing-monthly-list-report/',
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

export async function getYearlyManufacturingReportData() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/manufacturing-yearly-list-report/',
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

//Worker report
export async function getWorkerReport() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/worker-report-list/',
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

export async function getManufacturingByWorkerReport(workerId) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/manufacturing-by-worker/${workerId}/`,
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

//User report
export async function getUserReport() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/user-report-list/',
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

export async function getOrderByUserReport(userId) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/order-by-user/${userId}/`,
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

//Product report
export async function getProductReport() {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            'http://127.0.0.1:8000/report/product-report-list/',
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

export async function getOrderByProductReport(productId) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/product-order-report/${productId}/`,
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

//Search 1. Product 2. User 3. Worker
export async function searchProductReport(searchInfo) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/product-report-list/?search=${searchInfo}`,
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

export async function searchUserReport(searchInfo) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/user-report-list/?search=${searchInfo}`,
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

export async function searchWorkerReport(searchInfo) {
    try {
        function getToken() {
            return localStorage.getItem("token");
        }
        const token = getToken();
        const header = {
            // "Content-type": "application/json",
            Authorization: `Token ${token}`
        }
        const response = await fetch(
            `http://127.0.0.1:8000/report/worker-report-list/?search=${searchInfo}`,
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