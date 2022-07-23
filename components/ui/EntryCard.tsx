import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1, backgroundColor: "#4a148c" }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line"}}>
            Descripcion
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
          <Typography variant={`body2`}>
            hace 30 minutos
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
