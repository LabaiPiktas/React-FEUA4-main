import Alert from "./Alert";
import { PALETTE } from "../../shared/theme/constants";

const MyComponent = () => {
  return (
    <div>
      <Alert color={PALETTE.primary}>
        A simple primary alert—check it out!
      </Alert>
      <Alert color={PALETTE.secondary}>
        A simple secondary alert—check it out!
      </Alert>

      <Alert color={PALETTE.success}>
        A simple success alert—check it out!
      </Alert>
      <Alert color={PALETTE.danger}>A simple danger alert—check it out!</Alert>
      <Alert color={PALETTE.warning}>
        A simple warning alert—check it out!
      </Alert>
      <Alert color={PALETTE.info}>A simple info alert—check it out!</Alert>
      <Alert color={PALETTE.light}>A simple light alert—check it out!</Alert>
      <Alert color={PALETTE.dark}>A simple dark alert—check it out!</Alert>
    </div>
  );
};

export default MyComponent;
