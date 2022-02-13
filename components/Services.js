export default function Services({services}) {
  return (
    <div>
      <ul>
        {
          services.map((service) => (
            <li key={service.id}>{service.text}</li>
          ))
        }
      </ul>
    </div>
  )
}
