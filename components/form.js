export default function Form({api_url}) {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      phone: event.target.phone.value,
      description: event.target.description.value,
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = api_url + "form"

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone </label>
      <input type="tel" id="phone" name="phone" required />
      <br></br>
      <label htmlFor="last">Description </label>
      <input type="text" id="description" name="description" required />

      <button type="submit">Contact</button>
    </form>
  )
}
