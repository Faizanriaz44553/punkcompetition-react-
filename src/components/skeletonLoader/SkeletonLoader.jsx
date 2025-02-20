import Skeleton from "@mui/material/Skeleton";

const SkeletonLoader = ({ lines, width, height }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4">  {/* flex-col laga diya */}
      {
        [...Array(lines)].map((_, index) => (
          <div key={index}>
            <Skeleton variant="rectangular" width={width} height={height} className="rounded-lg" />
          </div>
        ))
      }
    </div>
  );
};

export default SkeletonLoader;
