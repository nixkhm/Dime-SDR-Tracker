import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <h1> Submit A Ticket</h1>
        <h2>Give Us A Call</h2>
        <p>888-888-8888</p>
        <form>
          <ul>
            <li>
              <input
                placeholder="subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="Send" />
            </li>
          </ul>
        </form>
      </div>
      <div className="known">
        <h1>Current Known Outages/Issues</h1>
        <ul>
          <li>
            Ploycom Phone Lines Down
            <button className="flat-button">
              Click here <br />
              for status
            </button>
          </li>
          <li>
            Microsoft Office Activation Error
            <button className="flat-button">
              Click here <br />
              for status
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact
