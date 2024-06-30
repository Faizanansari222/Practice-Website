import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";


export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="" sx={{ maxWidth: 500 }}>
      {/* <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          className="font-semibold text-black text-lg"
          variant="body2"
          color="text.secondary"
        >
          {props.text}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className="font-normal text-gray-500 text-lg"
          variant="body3"
          color="text.secondary"
        >
          {props.date}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Typography>
          <button className="bg-black text-white px-3 p-2 mb-5">
            Buy Tickets
          </button>
        </Typography>
      </CardActions>
    </Card>
  );
}
