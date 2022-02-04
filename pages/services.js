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

export async function getStaticProps() {
  const url = process.env.API_URL+"services"
  const res = await fetch(url)
  const services = await res.json()

  return {
    props: {
      services,
    },
  }
}

