import MovebackButton from "./MovebackButton";

interface Props {
  name: string;
  href: string;
}

const ProductManageHeader: React.FC<Props> = ({ name, href }) => {
  return (
    <div className="w-[923px] flex justify-between -ml-10">
      <h1 className="text-3xl font-semibold item-center content-center">
        {name}
      </h1>
   <MovebackButton href={"/user"}></MovebackButton>
    </div>
  );
};

export default ProductManageHeader;
