
import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CircularProgress, Typography } from "@mui/material";

export default function App() {

    const Login = lazy(() => import("./Pages/Login"));
    const NavPage = lazy(() => import("./Pages/NavPage"));
    
    const Loading = () => {
        return (
            <div
                style={{
                    marginTop: "270px",
                    marginLeft: "730px"
                }}
            >
                <CircularProgress sx={{ color: "black" }} />
            </div>
        )
    }

    return (
        <>
            <Routes>
                {Cookies.get("user") ? (
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Loading />}>
                                <NavPage />
                            </Suspense>
                        }
                    />
                ) : (
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Loading />}>
                                <Login />
                            </Suspense>
                        }
                    />
                )}
            </Routes>
        </>
    )
}
