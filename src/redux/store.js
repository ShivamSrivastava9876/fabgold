const { configureStore } = require("@reduxjs/toolkit");
import loginReducer from "./slice/login/loginSlice";
import userReducer from "./slice/user/userSlice";
import categoryReducer from "./slice/category/categorySlice";
import productTypeReducer from "./slice/productType/productTypeSlice";
// import orderReducer from './slice/order/orderSlice';
import productReducer from "./slice/product/productSlice";
import reportReducer from "./slice/report/reportSlice";
import metalRateReducer from "./slice/metalRate/metalRateSlice";
// import workerReducer from './slice/worker/workerSlice';
import customerProfileReducer from "./slice/customerProfile/customerProfileSlice";
import customerProductReducer from "./slice/customerProductList/customerProductListSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    category: categoryReducer,
    productType: productTypeReducer,
    product: productReducer,
    report: reportReducer,
    metalRate: metalRateReducer,
    customerProfile: customerProfileReducer,
    customerProduct: customerProductReducer,
  },
});
