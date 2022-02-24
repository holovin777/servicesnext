export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      phone: event.target.phone.value,
      description: event.target.description.value,
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = process.env.API_URL + "form"

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
      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone" name="phone" required />

      <label htmlFor="last">Description</label>
      <input type="text" id="description" name="description" required />

      <button type="submit">Contact</button>
    </form>
  )
}
