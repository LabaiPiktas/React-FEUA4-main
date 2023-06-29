import Card from "./components/Card";
import { PALETTE } from "./shared/theme/constants";
import Button from "./components/Button";
import { StyledButton } from "./components/Button/style";

function App() {
  return (
    <>
      <div>
        <Button color={PALETTE.primary}>Button</Button>
        <Button color={PALETTE.secondary}>Button</Button>
        <Button color={PALETTE.success}>Button</Button>
        <Button color={PALETTE.danger}>Button</Button>
        <Button color={PALETTE.warning}>Button</Button>
        <Button color={PALETTE.info}>Button</Button>
        <Button color={PALETTE.light}>Button</Button>
        <Button color={PALETTE.dark}>Button</Button>
        <StyledButton color={PALETTE.primary} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.secondary} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.success} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.danger} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.warning} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.info} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.light} outline>
          Outlined Button
        </StyledButton>
        <StyledButton color={PALETTE.dark} outline>
          Outlined Button
        </StyledButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          margin: "1em",
        }}
      >
        <Card
          subtitle="Header"
          title="Primary card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.primary}
        />
        <Card
          subtitle="Header"
          title="Primary card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.primary}
          outline
        />
        <Card
          subtitle="Header"
          title="Secondary card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.secondary}
        />
        <Card
          subtitle="Header"
          title="Secondary card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.secondary}
          outline
        />
        <Card
          subtitle="Header"
          title="Success card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.success}
        />
        <Card
          subtitle="Header"
          title="Success card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.success}
          outline
        />
        <Card
          subtitle="Header"
          title="Light card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.light}
        />
        <Card
          subtitle="Header"
          title="Light card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.light}
          outline
        />
        <Card
          subtitle="Header"
          title="Dark card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.dark}
        />
        <Card
          subtitle="Header"
          title="Dark card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          color={PALETTE.dark}
          outline
        />
      </div>
    </>
  );
}

export default App;
