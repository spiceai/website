type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className }: Props) => {
  return <h2 className={className}>{children}</h2>;
};
