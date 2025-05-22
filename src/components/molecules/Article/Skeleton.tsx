import { PAGE_SIZE } from "@/constants/pagination";
import { Box, Skeleton } from "@mui/material";

const ArticleSkeleton = () => {
  return Array.from({ length: PAGE_SIZE }).map((_, i) => (
    <Box
      key={i}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
        boxShadow: 1,
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={140} />
      <Box p={2}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
      </Box>
    </Box>
  ));
};

export { ArticleSkeleton };
