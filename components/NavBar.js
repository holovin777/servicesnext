import NavItem from '../components/NavItem.js'

export default function NavBar({title, items}) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <ul>
        {items.map((item) => (
          <NavItem key={item.id} title={item.title} url={item.url} />
        ))}
      </ul>
    </div>
  )
}
