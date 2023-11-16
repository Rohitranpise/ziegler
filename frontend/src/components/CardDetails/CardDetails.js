import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from "../Navbar/Navbar"

function CardDetails() {
    return (
        <>
            <Navbar />
            <Box sx={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                this is entry
            </Box>
            <hr style={{ color: "black", width: "500px", height: "7px" }} />
            <Box
                sx={{ marginTop: "20px", display: 'flex', gap: "100px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", height: "400px", width: "300px", border: "solid", borderColor: "grey" }}>
                    this billing product details
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", height: "400px", width: "300px", border: "solid", borderColor: "grey" }}>
                    this is product details
                </Box>
            </Box>
            <Box>
                <Typography sx={{ fontFamily: "fantasy", fontSize: "40px" }}>
                    explore more..
                </Typography>
            </Box>
            <Box sx={{ marginTop: "20px", display: 'flex', gap: "70px", marginBottom: "50px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", height: "300px", width: "300px", border: "solid", borderColor: "grey" }}>
                    this billing product details
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", height: "300px", width: "300px", border: "solid", borderColor: "grey" }}>
                    this is product details
                </Box>
            </Box>
        </>
    )
}

export default CardDetails