type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: Props) => {
  return <p className={className}>{children}</p>;
};
