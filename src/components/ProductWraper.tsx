interface Props {
  children: React.ReactNode;
}

const ProductWraper: React.FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default ProductWraper;
