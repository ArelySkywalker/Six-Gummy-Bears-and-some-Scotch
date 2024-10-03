import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class DrinkCard extends Component {
    render() {
        const { name, id, image } = this.props;
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <h3 className="card-drink-name">{name}</h3>
                </CardContent>
                <CardActions>
                    <Button
                        className="card-button"
                        href={`/drink?id=${id}`}
                        size="small"
                        color="primary"
                        variant="contained"
                    >
                        View Recipe
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default DrinkCard;
