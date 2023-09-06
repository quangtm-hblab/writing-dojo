/* eslint-disable no-useless-catch */
export default class BaseApi {
  constructor(axios) {
    this._axios = axios
  }

  async get(url, params = {}) {
    try {
      const result = await this._axios.get(url, { params })
      return result
    } catch (error) {
      throw error
    }
  }

  async put(url, data) {
    try {
      const result = await this._axios.put(url, data)
      return result
    } catch (error) {
      throw error
    }
  }

  async patch(url, data) {
    try {
      const result = await this._axios.patch(url, data)
      return result
    } catch (error) {
      throw error
    }
  }

  async post(url, data) {
    try {
      const result = await this._axios.post(url, data)
      return result
    } catch (error) {
      throw error
    }
  }

  async delete(url, data) {
    try {
      const result = await this._axios.delete(url, { data })
      return result
    } catch (error) {
      throw error
    }
  }
}
