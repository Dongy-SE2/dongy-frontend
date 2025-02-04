import AgreementForm from "@/components/AgreementForm";
import LoginForm from "@/components/loginForm";
import RegistrationForm from "@/components/registrationForm";
import RegistrationForm2 from "@/components/registrationForm2";


export default async function ProductPage() {
  return (
    <>
      <p>Product Page</p>
      <LoginForm/>
      <RegistrationForm/>
      <RegistrationForm2/>
      <AgreementForm/>
    </>
  );
}
