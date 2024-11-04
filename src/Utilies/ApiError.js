class ApiError {
  constructor(
    success = false,
    data = null,
    statuscode = 400,
    message = "Error Occurs"
  ) {
    (this.success = success),
      (this.data = data),
      (this.statuscode = statuscode),
      (this.message = message);
  }
}

module.exports = { ApiError };
