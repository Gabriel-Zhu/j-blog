const SERVER_ERROR_MAP = {
  DB_CONNECT: {
    errorCode: 100100,
    errorMessage: '数据库操作出错'
  },
  DB_COLLECTION: {
    errorCode: 100110,
    errorMessage: '查询数据集时出错'
  }
}

module.exports = {
  SERVER_ERROR_MAP
}
