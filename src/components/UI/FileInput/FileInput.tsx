import { Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FC, useRef, useState } from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
}

const FileInput: FC<Props> = ({ onChange, name, label }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilename(
      e.target.files && e.target.files[0] ? e.target.files[0].name : ""
    );
    onChange(e);
  };

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        name={name}
        onChange={onFileChange}
        ref={inputRef}
      />
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
            disabled
            label={label}
            value={filename}
            onClick={activateInput}
          />
        </Grid>
        <Grid item>
          <Button type="button" variant="contained" onClick={activateInput}>
            Browse
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FileInput;