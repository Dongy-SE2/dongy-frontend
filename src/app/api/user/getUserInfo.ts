
import axios from 'axios';

interface UserInfo {
  userId: string;
  title: string;
  firstname: string;
  lastname: string;
  dob: string;
  phone: string;
  idnumber: string;
  address: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const getUserInfo = async (userId: string): Promise<UserInfo> => {
    try {
     
      const mockUserInfo: UserInfo = {
        userId: "1",
        title: "Mr.",
        firstname: "John",
        lastname: "Doe",
        dob: "01/01/1990",
        phone: "123-456-7890",
        idnumber: "A123456789",
        address: "123 Main St, Cityville",
        role: "buyer",
        email: "john.doe@example.com",
        password: "password123",
        confirmPassword: "password123"
      };
  
   
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      return mockUserInfo; 
    } catch (error) {
      console.error("Failed to fetch user information:", error);
      throw new Error("Could not retrieve user information.");
    }
  };