/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class Article {
  static remote = new Remote("https://6eawqdydihcoztisxq2k6f7v6a0uhauu.lambda-url.us-east-1.on.aws/")

  static async getChartData(token) {
    return Article.remote.call("Article.getChartData", token)
  }

  static async getAll(token) {
    return Article.remote.call("Article.getAll", token)
  }

  static async getById(token, id) {
    return Article.remote.call("Article.getById", token, id)
  }

  static async create(token, title, content, publishDate, createdBy, tags, status) {
    return Article.remote.call("Article.create", token, title, content, publishDate, createdBy, tags, status)
  }

  static async update(token, id, title, content, publishDate, createdBy, tags, status) {
    return Article.remote.call("Article.update", token, id, title, content, publishDate, createdBy, tags, status)
  }

  static async delete(token, id) {
    return Article.remote.call("Article.delete", token, id)
  }

}
