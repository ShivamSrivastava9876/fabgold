import * as React from "react";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import SearchIcon from "../../public/assets/Icons/searchIcon.svg";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getProductReportAsync, getProductReportList, searchProductReportAsync } from "../redux/slice/report/reportSlice";

const columns = [
    { id: "productId", label: "Product Id", minWidth: 100 },
    { id: "huId", label: "Hu Id", minWidth: 100 },
    { id: "productName", label: "Product name", minWidth: 250 },
    { id: "category", label: "Category", minWidth: 100 },
    { id: "productType", label: "Product type", minWidth: 100 },
    { id: "orderCount", label: "Order count", minWidth: 80 },
    { id: "totalPrice", label: "Total price", minWidth: 80 }
];

const createData = (
    productId,
    productName,
    huId,
    category,
    productType,
    orderCount,
    totalPrice,
    id
) => {
    return {
        productId,
        productName,
        huId,
        category,
        productType,
        orderCount,
        totalPrice,
        id
    };
};

export default function WorkerReportTable() {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchParameter, setSearchParameter] = React.useState("");

    const reportList = useSelector(getProductReportList);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearchParameter = (searchParameter) => {
        setSearchParameter(searchParameter);
    }

    const handleProductReportSearch = (e) => {
        e.preventDefault();
        dispatch(searchProductReportAsync(searchParameter)).then((result) => {
            if (searchProductReportAsync.fulfilled.match(result)) {
                // setSearchParameter("");
            }
        })
    }

    React.useEffect(() => {
        dispatch(getProductReportAsync())
    }, [dispatch])

    React.useEffect(() => {
        if (reportList && Array.isArray(reportList)) {
            let srNo = 1;
            const newRows = reportList.map((data) => {
                // const date = data.order.order_date;

                // const newDate = new Date(date)
                // const formattedDate = newDate.toLocaleDateString('en-GB', {
                //     day: '2-digit',
                //     month: 'long',
                //     year: '2-digit',
                // });
                const newRow = createData(
                    data.product_id || "",
                    data.product_name || "",
                    data.hu_id || "",
                    data.category || "",
                    data.product_type || "",
                    data.order_count || "",
                    data.total_price || "",
                    data.id || ""
                );
                srNo = srNo + 1;
                return newRow;
            });

            setRows(newRows)
        }
    }, [reportList]);

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap w-full mb-4">
                <h1 className="text-2xl mx-4 mb-1 font-bold">Product report</h1>
                {/* Right-hand side Search Box */}
                <form onSubmit={(e) => handleProductReportSearch(e)} className="flex items-center m-2 md:w-80 border-2 border-solid border-gray-300 rounded-full px-4 py-2">
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchParameter}
                        onChange={(e) => handleSearchParameter(e.target.value)}
                        className="w-full h-full outline-none bg-transparent text-blue-gray-700"
                    />
                    <div className="ml-2">
                        <Image
                            onClick={handleProductReportSearch}
                            src={SearchIcon}
                            alt="search-icon"
                            className="cursor-pointer"
                        />
                    </div>
                </form>
            </div>
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
                                                        {column.id === "orderCount" ? (
                                                            <div className="text-blue-500 font-semibold">
                                                                <Link href={`/admin/orderByProductReport/${row.id}`}>{value || "0"}</Link>
                                                            </div>
                                                        ) : // Render other columns
                                                            column.format && typeof value === "number" ? (
                                                                column.format(value)
                                                            ) : (
                                                                value || "0"
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
