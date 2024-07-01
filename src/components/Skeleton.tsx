type Props = {
  className: string;
};

const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      className={`${className} animate-pulse rounded-md bg-primary/10`}
      {...props}
    />
  );
};

export default Skeleton;
