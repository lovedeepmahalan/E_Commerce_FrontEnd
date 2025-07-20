import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box'
import Avatar from "@mui/material/Avatar";
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        {/* Avatar Section */}
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#9155fd",
              }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        {/* Review Content Section */}
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <Rating name="half-rating" value={4.5} readOnly precision={4.5}/>
            <p>nice product, I love this shirt</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductReviewCard