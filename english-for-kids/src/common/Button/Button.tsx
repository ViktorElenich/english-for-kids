import {FC} from "react";
import { Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';

interface ButtonProps {
  repeat: boolean,
  onClick: () => void,
}

const ButtonPlay: FC<ButtonProps> = ({repeat, onClick}) => {
  return (
    <Button
      type="button"
      size="large"
      variant="contained"
      color="secondary"
      onClick={onClick}
    >
      {repeat ? <ReplayCircleFilledIcon fontSize='large' /> : <PlayCircleFilledWhiteIcon fontSize='large' /> }
    </Button>
  )
}

export default ButtonPlay;