export default {
  async getRepos() {
    const response = await fetch('https://api.github.com/repositories')
    const jsonBody = await response.json()

      if (!response.ok) throw new Error('Ocurrió un error al obtener los respositorios')

    return jsonBody
  }
}
