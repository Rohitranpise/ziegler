import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import { Category } from '../../constants/Role';

export default function Product() {
    const [products, setProducts] = React.useState([]);
    const { user } = useUser();

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/product');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <>
            <Navbar />
            <Grid container spacing={2}>
                {products.map((items) => {
                    return (
                        <Card sx={{ maxWidth: 345, margin: 10 }} key={items._id}>
                            <CardActionArea onClick={() => console.log(items._id)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"
                                    alt={items.product_images.imageUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {items.product_name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Grid>
            <Box sx={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography>categories</Typography>
            </Box>
            <hr />
            <Box sx={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                marginLeft: "20px"
            }}
            >
                {Category.map((items) => {
                    return (
                        <Card sx={{ height: "200px", width: "150px" }}>
                            {items}
                            <CardMedia
                                component="img"
                                height="80"
                                image="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"
                                alt="hello"
                            />
                        </Card>
                    )
                })}
            </Box>
        </>
    );
}
