import { Autocomplete, Checkbox, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import logoSrc from "/logo.png";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon sx={{ color: "#ff6700" }} fontSize="small" />;

const Header = ({ autocompleteOpts, handleInputChange }: HeaderProps) => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1.5rem 1rem",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      boxShadow: "0px 2px 8px 1px rgba(0,0,0,0.18)",
    }}
  >
    <a
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        style={{
          width: "60px",
        }}
        src={logoSrc}
        alt="CookWell logo"
      />
      <h1 className="title">CookWell</h1>
    </a>

    <Autocomplete
      multiple
      sx={{ width: "20rem", marginLeft: "0.5rem" }}
      disableCloseOnSelect
      onChange={(e, value) => handleInputChange(value)}
      options={autocompleteOpts.map((option) => option.name)}
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderTags={(selected) => {
        let renderTagsValue = selected.join(", ");
        return (
          <Typography
            style={{ maxWidth: 360 }}
            noWrap={true}
            color="textPrimary"
          >
            {renderTagsValue}
          </Typography>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} label="Filter Ingredients" />
      )}
    />
  </header>
);

export default Header;
