import Button from "./Button";

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <Button filter="เสื้อผ้า" />
      <Button filter="เครื่องเรือน" />
      <Button filter="อิเล็กทรอนิกส์" />
      <Button filter="ของสะสม" />
      <Button filter="หนังสือ" />
      <Button filter="อื่นๆ" />
    </div>
  );
};

export default FilterBar;
