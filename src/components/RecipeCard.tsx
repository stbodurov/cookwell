import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import useDialogState from "../hooks/useDialogState";
import handleShare from "../utils/handleShare";
import InstructionDialog from "./InstructionDialog";

const RecipeCard = ({
  id,
  title,
  timeToPrepare,
  ingredients,
  preparationMethod: recipeSteps,
}: RecipeCardProps) => {
  const { isDialogOpen, toggleDialog } = useDialogState();

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={toggleDialog}>
        <CardHeader
          title={
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={600}
            >
              {title}
            </Typography>
          }
          subheader={
            <Typography color="text.secondary" fontWeight={500}>
              {timeToPrepare}
            </Typography>
          }
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`/assets/${id}.png`}
            alt="green iguana"
          />
          <CardContent>
            <List sx={{ listStyleType: "circle", pl: 4 }}>
              {ingredients.map((ingredient, index) => (
                <ListItem
                  key={index}
                  color="text.secondary"
                  sx={{ display: "list-item" }}
                >
                  {ingredient}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={(event) => handleShare({event, title})}>
            <OpenInNewIcon />
          </IconButton>
        </CardActions>
      </Card>
      <InstructionDialog
        open={isDialogOpen}
        handleClose={toggleDialog}
        instructions={recipeSteps}
      />
    </>
  );
};

export default RecipeCard;
