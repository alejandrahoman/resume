import { Typography } from "@mui/material";

const CenteredContent = (props) => {
  const { text } = props;

  const style = {
    textAlign: "center",
  };

  return (
    <Typography {...style} {...props}>
      {text}
    </Typography>
  );
};

export default CenteredContent;
