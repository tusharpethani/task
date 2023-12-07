import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyle = styled(Button)({
    borderRadius: 8,
    border: "1px solid  #19191A",
    background: '#19191A',
    color: "#FFF",
    padding: 18,
    fontSize: 16,
    "&:Hover": {
        background: '#19191A',
    }
})