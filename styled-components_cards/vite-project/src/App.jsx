import Card from './components/Card';
import { PALETTE } from './shared/theme/constants';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        margin: '1em',
      }}
    >
      <Card
        subtitle='Header'
        title='Primary card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.primary}
      />
      <Card
        subtitle='Header'
        title='Primary card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.primary}
        outline
      />
      <Card
        subtitle='Header'
        title='Secondary card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.secondary}
      />
      <Card
        subtitle='Header'
        title='Secondary card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.secondary}
        outline
      />
      <Card
        subtitle='Header'
        title='Success card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.success}
      />
      <Card
        subtitle='Header'
        title='Success card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.success}
        outline
      />
      <Card
        subtitle='Header'
        title='Light card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.light}
      />
      <Card
        subtitle='Header'
        title='Light card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.light}
        outline
      />
      <Card
        subtitle='Header'
        title='Dark card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.dark}
      />
      <Card
        subtitle='Header'
        title='Dark card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        color={PALETTE.dark}
        outline
      />
    </div>
  );
}

export default App;
