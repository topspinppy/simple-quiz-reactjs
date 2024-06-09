import { Button } from "@mui/material";

interface IAnswerButtonSetProps {
  options: string[];
  onClick(answer: string): void;
}

function AnswerButtonSet(props: IAnswerButtonSetProps) {
  const { options, onClick } = props;
  return (
    <>
      {options.map((option, index) => {
        return (
          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
            size="large"
            key={index}
            onClick={() => {
              onClick(option)
            }}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
}

export default AnswerButtonSet;
