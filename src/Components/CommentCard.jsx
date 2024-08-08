import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CommentCard = ({ comment }) => {
  const { user, commentText } = comment;

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} className="typohover py-sm-2 p-0">
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box>
            <Typography variant="h6" className="typography">
              {user}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {commentText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
