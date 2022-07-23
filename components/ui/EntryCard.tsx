import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Entry } from "../../interfaces";
import { FC } from "react";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = (props) => {
  const { entry } = props;

  return (
    <Card sx={{ marginBottom: 1, backgroundColor: "#4a148c" }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line"}}>
            { entry.description }
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
