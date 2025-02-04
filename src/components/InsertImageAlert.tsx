"use client";
import CustomAlert from "./CustomAlert";

const InsertImageAlert: React.FC = () => {
    const handleDelete = () => {
      console.log("Item deleted!");
    };
  
    return (
      <div>
        <CustomAlert 
          title="บันทึก"
          message={`กรุณาอัพโหลดอย่างน้อย 1 ภาพ`}
          onConfirm={handleDelete}
        />
      </div>
    );
  };
  
  export default InsertImageAlert;