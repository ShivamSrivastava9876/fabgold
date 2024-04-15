"use client"

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDailyReportDataAsync, getWeeklyReportDataAsync, getMonthlyReportDataAsync, getYearlyReportDataAsync, getOrderReportList } from "../redux/slice/report/reportSlice";
import { useParams } from "next/navigation";

const columns = [
    // { id: "HuId", label: "HU ID", minWidth: 80 },
    { id: "productId", label: "Product ID", minWidth: 100 },
    { id: "product", label: "Product", minWidth: 150 },
    { id: "user", label: "User", minWidth: 200 },
    { id: "date", label: "Date", minWidth: 200 },
    { id: "quantity", label: "Quantity", minWidth: 50 },
    // { id: "puritySpc", label: "Purity spc", minWidth: 100 },
    { id: "price", label: "Product price", minWidth: 50 },
    { id: "total", label: "Total price", minWidth: 50 },
    // { id: "actions", label: "", minWidth: 150 },
];

const createData = (

    productId,
    product,
    user,
    date,
    quantity,
    price,
    total
) => {
    return {
        productId,
        product,
        user,
        date,
        quantity,
        price,
        total,
    };
};

export default function MoreDetailsOnOrderReports() {
    const dispatch = useDispatch();
    const params = useParams();

    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [active, setActive] = React.useState("Daily");

    let orderList = useSelector(getOrderReportList);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        if (params.moreDetailsOnOrderReports === "dailyReport") {
            dispatch(getDailyReportDataAsync());
            setActive("Daily");
        }
        if (params.moreDetailsOnOrderReports === "weeklyReport") {
            dispatch(getWeeklyReportDataAsync());
            setActive("Weekly");
        }
        if (params.moreDetailsOnOrderReports === "monthlyReport") {
            dispatch(getMonthlyReportDataAsync());
            setActive("Monthly");
        }
        if (params.moreDetailsOnOrderReports === "yearlyReport") {
            dispatch(getYearlyReportDataAsync());
            setActive("Yearly");
        }

    }, [dispatch, params])

    React.useEffect(() => {
        if (orderList && Array.isArray(orderList)) {
            let srNo = 1;
            const newRows = orderList.map((data) => {
                const date = data.order.order_date;

                const newDate = new Date(date)
                const formattedDate = newDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: '2-digit',
                });
                const newRow = createData(
                    data.product.product_id || "",
                    data.product.product_name || "",
                    data.order.user || "",
                    formattedDate || "",
                    data.quantity || "",
                    data.price || "",
                    data.order.total_price || ""
                );
                srNo = srNo + 1;
                return newRow;
            });

            setRows(newRows)
        }
    }, [orderList]);

    return (
        <div>
            <h1 className="text-2xl mx-4 mb-4 font-bold">{active} report</h1>
            <Paper sx={{ width: "100%", overflow: "hidden" }} className="w-full">
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth,
                                            backgroundColor: "#F8F8F8",
                                            color: "#4D586A",
                                        }}
                                        className=" font-poppins font-semibold"
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.srNo}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} className=" font-poppins">
                                                        {column.id === "actions" ? (
                                                            // Render Edit and Delete buttons
                                                            <div className="space-x-2">

                                                                {/* <Button className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                                Delete
                              </Button> */}
                                                            </div>
                                                        ) : // Render other columns
                                                            column.format && typeof value === "number" ? (
                                                                column.format(value)
                                                            ) : (
                                                                value
                                                            )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </Paper>
        </div>
    );
}
