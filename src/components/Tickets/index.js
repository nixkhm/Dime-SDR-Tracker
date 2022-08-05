import React from "react";
import "./index.scss";

const Tickets = () => {
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
          <td>106695</td>
          <td>Connection to printer requested in branch</td>
          <td>John Smith</td>
          <td>Nicholas Masters</td>
          <td>In Progress</td>
          <td>July 26, 2022</td>
          <td>12:07 P.M</td>!<button>Email</button>
        </tr>
        <tr>
          <td>106660</td>
          <td>Please install Microsoft Access onto 5273-PC</td>
          <td>John Smith</td>
          <td>Roberto Moreno</td>
          <td>In Progress</td>
          <td>July 24, 2022</td>
          <td>8:47 A.M.</td>!<button>Email</button>
        </tr>
        <tr>
          <td>106540</td>
          <td>Backup battery needs to be replaced</td>
          <td>John Smith</td>
          <td>Kristopher Fuller</td>
          <td>In Progress</td>
          <td>July 22, 2022</td>
          <td>11:34 A.M</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106500</td>
          <td>Please install platform monitors onto empty desk</td>
          <td>John Smith</td>
          <td>Jonathan Policarpo</td>
          <td>On Hold</td>
          <td>July 19, 2022</td>
          <td>3:20 P.M.</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106430</td>
          <td>Privacy screens need for platform tellers</td>
          <td>John Smith</td>
          <td>Stephen Rallis</td>
          <td>On Hold</td>
          <td>July 17, 2022</td>
          <td>2:32 P.M.</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106249</td>
          <td>Remap drives onto machine (11284-LAPTOP)</td>
          <td>John Smith</td>
          <td>Brendan Benjamin</td>
          <td>Completed</td>
          <td>July 10, 2022</td>
          <td>9:30 A.M.</td>
          <button>Email</button>
        </tr>
        <tr>
          <td>106003</td>
          <td>Locked out of Windows, please unlock and reset password</td>
          <td>John Smith</td>
          <td>Nicholas Masters</td>
          <td>Completed</td>
          <td>July 3, 2022</td>
          <td>8:02 A.M.</td>
          <button>Email</button>
        </tr>
      </tbody>
    </table>
  );
};

export default Tickets;
