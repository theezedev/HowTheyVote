const db = require('./dbconfig');

async  function  getContacts() {
  try {
    let sql = "SELECT * from tblContacts ORDER BY con_name";
    let [rows] = await db.connection.query(sql);
    return rows;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getForms(x) {
  try {
    const sql = "SELECT * from tblForms ORDER BY form_name";
    const [rows] = await db.connection.execute(sql);
    return rows;
  }
  catch (error) {
    console.log(error);
  }
}

const insertAPILog = (logData) => {
  return new Promise((resolve, reject) => {
    db.connection.query(
      'INSERT INTO tblAPILogs (req_timestamp, req_method, req_path, req_query_parameters, req_request_body, req_response_status, req_response_body, req_user_agent, req_remote_ip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        new Date(), // req_timestamp
        logData.req_method || null,
        logData.req_path || null,
        logData.req_query_parameters || null,
        logData.req_request_body || null,
        logData.req_response_status || null,
        logData.req_response_body || null,
        logData.req_user_agent || null,
        logData.req_remote_ip || null,
      ],
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  insertAPILog: insertAPILog,
  getContacts:  getContacts,
  getForms:  getForms,
}
