import MovebackButton from "./MovebackButton";

interface Props {
  name: string;
  href?: string;
  back?: boolean;
}

const ProductManageHeader: React.FC<Props> = ({ name, href, back }) => {
  return (
    <div className="w-[923px] flex items-center justify-between">
      <h1 className="text-2xl font-semibold item-center content-center">
        {name}
      </h1>
      <MovebackButton href={href} back={back}></MovebackButton>
    </div>
  );
};

export default ProductManageHeader;
