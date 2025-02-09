import MovebackButton from "./MovebackButton";

interface Props {
  name: string;
  href: string;
}

const ProductManageHeader: React.FC<Props> = ({ name, href }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-semibold item-center content-center">
        {name}
      </h1>
      <MovebackButton href={href} />
    </div>
  );
};

export default ProductManageHeader;
