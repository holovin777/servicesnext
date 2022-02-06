import NavItem from '../components/NavItem.js'

export default function NavBar({title, items}) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <ul>
        {items.map((item) => (
          <NavItem title = {item.title} url = {item.ui_url} />
        ))}
      </ul>
    </div>
  )
}
