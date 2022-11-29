interface RecipeAPIResponse {
  recipes: Recipe[];
  ingredients: Ingredient[];
}

interface Recipe {
  id: number;
  title: string;
  timeToPrepare: string;
  ingredients: string[];
  preparationMethod: RecipeStep[];
}

interface Ingredient {
  id: string;
  name: string;
}

interface HeaderProps {
  autocompleteOpts: Ingredient[];
  handleInputChange: React.Dispatch<React.SetStateAction<string[]>>;
}

interface RecipeCardProps extends Recipe {}

interface RecipeStep {
  step: number;
  text: string;
}

interface InstructionDialogProps {
  open: boolean;
  handleClose: () => void;
  instructions: RecipeStep[];
}

interface DialogTitleProps {
  onClose: () => void;
}

interface ShareSheetParams {
  event: MouseEvent<HTMLButtonElement, MouseEvent>;
  title: string;
}
