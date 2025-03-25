interface Props {
  children: React.ReactNode;
}

const ProductWraper: React.FC<Props> = ({ children }) => {
  return <div className="mt-6 w-3/5 mx-auto">{children}</div>;
};

export default ProductWraper;
