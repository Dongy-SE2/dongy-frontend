interface Props {
  children: React.ReactNode;
}

const ProductWraper: React.FC<Props> = ({ children }) => {
  return <div className="mt-14 px-[28rem]">{children}</div>;
};

export default ProductWraper;
