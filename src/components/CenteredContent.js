import { Typography } from "@mui/material";
import "./CenteredContent.css";

const CenteredContent = (props) => {
  const { text, headerText, hasRowColor, children, ...rest } = props;

  const style = {
    maxWidth: 600,
    sx: { ml: "auto", mr: "auto" },
  };

  const headerStyle = {
    textAlign: "center",
    maxWidth: 600,
    sx: { ml: "auto", mr: "auto", mb: "24px" },
  };

  return (
    <div
      className={
        hasRowColor
          ? "rowColor centeredContentWrapper"
          : "centeredContentWrapper"
      }
    >
      {headerText && (
        <Typography variant="h3" {...headerStyle}>
          {headerText}
        </Typography>
      )}
      {text && (
        <Typography
          {...style}
          {...rest}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {children}
    </div>
  );
};

export default CenteredContent;
