"use client";
import CustomAlert from "./CustomAlert";

interface AlertDeleteProductProps {
  productName: string;
}

const DeleteProductAlert: React.FC<AlertDeleteProductProps> = ({ productName }) => {
  const handleDelete = () => {
    console.log("Item deleted!");
  };

  const handleCancelDelete = () => {
    console.log("Deletion cancelled!");
  };

  return (
    <div>
      <CustomAlert 
        title="ยืนยันการลบ"
        message={`ท่านยืนยันที่จะลบสินค้า "${productName}" ใช่หรือไม่`}
        onConfirm={handleDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default DeleteProductAlert;
  
