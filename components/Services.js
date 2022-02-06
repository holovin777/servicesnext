export default function Services({services}) {
  return (
    <div>
      <ul>
        {
          services.map((service) => (
            <li>{service.text}</li>
          ))
        }
      </ul>
    </div>
  )
}
