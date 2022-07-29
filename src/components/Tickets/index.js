import React, { useState } from 'react'
import './index.scss'
import { useEffect } from 'react'
import axios from 'axios'

const Tickets = () => {
  const [dataTable, setDataTable] = useState([])

  console.log(dataTable)

  useEffect(() => {
    axios('TicketData.json')
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <table>
      <thead>
        <tr className="columns">
          <th>Service Desk Request ID</th>
          <th>Title of Request</th>
          <th>Requester Name</th>
          <th>Assigned to Technician</th>
          <th>Status</th>
          <th>Date Created</th>
          <th>Time Created</th>
          <th>Contact Technician</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>106672</td>
          <td>Conection to Printer Needed</td>
          <td>John Smith</td>
          <td>Nicholas Masters</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>!<button>Email</button>
        </tr>
        <tr>
          <td>106689</td>
          <td>Need to have Microsoft Access added to machine</td>
          <td>John Smith</td>
          <td>Roberto Moreno</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>!<button>Email</button>
        </tr>
        <tr>
          <td>106695</td>
          <td>Backup Battery needs to be replaced</td>
          <td>John Smith</td>
          <td>Kristopher Fuller</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106695</td>
          <td>Backup Battery needs to be replaced</td>
          <td>John Smith</td>
          <td>Jonathan Policarpo</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106695</td>
          <td>Backup Battery needs to be replaced</td>
          <td>John Smith</td>
          <td>Stephen Rallis</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106695</td>
          <td>Backup Battery needs to be replaced</td>
          <td>John Smith</td>
          <td>Brendan Benjamin</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>10:04 A.M</td>
          <button>Email</button>
        </tr>
      </tbody>
    </table>
  )
}

export default Tickets
