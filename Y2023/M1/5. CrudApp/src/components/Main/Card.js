//Components
import CardI from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Card(props){
    return(
        <CardI>
            <CardMedia
          component="img"
          height="240"
          image={props.data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.descripcion}
          </Typography>
        </CardContent>
        </CardI>
    )
}

export default Card;