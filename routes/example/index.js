import Card from '../../components/Card/Card.js'

const styles = css`/routes/example/index.css`

const props = {
  itemType: 'skyblue',
  itemName: 'My Cool item',
  onMainnet: 'eth',
  creator: 'anime3.png',
  owner: 'anime3.png',
  image: 'anime3.png',
  number: '10/10',
  grease: '1208W',
  description: 'This is the first avatar uploaded to Webaverse.',
  hash: '8934klsjdf009843rjlsdf043jls8dflkj34s89dfl',
}

export default () => html`
  <div className=${styles}>
    <header className="header">
      <div className="example">Example Page</div>
      <${Card} props={${props}} />
    </header>
  </div>
`
