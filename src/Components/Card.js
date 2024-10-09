import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom styles for the component
const useStyles = makeStyles((theme) => ({
    cardRoot: {
        display: "flex",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2),
        boxShadow: "none", // Removes card shadow
        border: "none", // Optional border to separate cards
    },
    imageContainer: {
        height: "300px", // Default size for large screens
        width: "300px", // Default size for large screens
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: theme.spacing(2),

        // Center the image container in its parent
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
            height: "250px",
            width: "250px",
        },
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Centers the name and button as well
        width: "100%", // Ensures the card content is full width
    },
    link: {
        textDecoration: "none", // Removes underline from anchor tag
        color: "inherit", // Keeps the text color from the parent
    },
    typography: {
        textTransform: "none", // Prevents text from being in all caps
        textAlign: "center", // Ensures the title is centered
    },
    button: {
        marginTop: theme.spacing(1),
        textTransform: "lowercase", // Makes text all lowercase
        color: "#457B9D", // Initial text color
        border: "none",
        borderBottom: `1px solid #457B9D`, // Border color
        borderRadius: 0, // Removes border radius
        transition: "all 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
            backgroundColor: "#457B9D", // Background color on hover
            color: "#fff", // Text color on hover (white)
            borderRadius: "50%",
        },
    },
}));

const DrinkCard = ({ drink }) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardContent className={classes.cardContent}>
                <a href={`/drink?id=${drink.idDrink}`} className={classes.link}>
                    <div
                        className={classes.imageContainer}
                        style={{
                            backgroundImage: `url(${drink.strDrinkThumb})`,
                        }}
                    ></div>
                    <Typography variant="h4" className={classes.typography}>
                        {drink.strDrink}
                    </Typography>
                    <Button variant="outlined" className={classes.button}>
                        view recipe
                    </Button>
                </a>
            </CardContent>
        </Card>
    );
};

export default DrinkCard;
