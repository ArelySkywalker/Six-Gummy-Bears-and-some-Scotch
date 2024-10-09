import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom styles for the component
const useStyles = makeStyles((theme) => ({
    cardRoot: {
        display: "flex",
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        boxShadow: "none", // Removes card shadow
        border: "none", // Optional border to separate cards
    },
    imageContainer: {
        height: 300, // Adjust height as needed
        width: 300, // Adjust width
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Ensures both name and button are centered
    },
    // Remove underline from link
    link: {
        textDecoration: "none", // Removes underline from anchor tag
        color: "inherit", // Keeps the text color from the parent
    },
    // Typography h4 style to prevent all caps
    typography: {
        textTransform: "none", // Prevents text from being in all caps
        textAlign: "center", // Ensures the title is centered
    },
    // Button style with custom text and border color, and hover effect
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
                </a>
                <Button
                    variant="outlined" // Ensures the button has an outline
                    className={classes.button}
                >
                    view recipe
                </Button>
            </CardContent>
        </Card>
    );
};

export default DrinkCard;
