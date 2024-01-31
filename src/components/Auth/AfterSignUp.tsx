import Logo from "../Logo";
import BigHeader from "../Headers/BigHeader"

export default function AfterSignUp() {
  const postRegistrationHeaderContent = "Revisa tu correo!";
    return (
        <div>
          <div className="w-full flex flex-row justify-center">
            <Logo dimension={150} className="" />
          </div>
          <div>
            <BigHeader>{postRegistrationHeaderContent}</BigHeader>
          </div>
        </div>
      );
  }
  