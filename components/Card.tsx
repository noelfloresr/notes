import { FC } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Note } from "../src/API";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

interface ICustomCard {
  note: Note;
  onDelete: (id: string) => void;
}

const CustomCard: FC<ICustomCard> = ({ note: { id, name, description, updatedAt, image }, onDelete }) => {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }} className="flex-1">
      <CardHeader title={name} subheader={DateTime.fromISO(updatedAt).toFormat("MMMM dd, yyyy")} />
      <CardMedia component="img" height="194" image={image || "https://picsum.photos/350/200"} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            router.push(`/notes/${id}`);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => {
            onDelete(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
