/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class Order {
  static remote = new Remote("https://y4b55ucwxv5rrh3gn5ruukfkcq0nnstl.lambda-url.us-east-1.on.aws/")

  static async getChartData(token) {
    return Order.remote.call("Order.getChartData", token)
  }

  static async getAll(token) {
    return Order.remote.call("Order.getAll", token)
  }

  static async getById(token, id) {
    return Order.remote.call("Order.getById", token, id)
  }

  static async create(token, clientId, productIds, price, status, date) {
    return Order.remote.call("Order.create", token, clientId, productIds, price, status, date)
  }

  static async update(token, clientId, productIds, price, status, date) {
    return Order.remote.call("Order.update", token, clientId, productIds, price, status, date)
  }

  static async delete(token, id) {
    return Order.remote.call("Order.delete", token, id)
  }

}
