import React, { useState } from "react";
import { ChatClient } from "dialogflow";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const projectId = "magnetic-music-419821";
  const privateKey = require("../");

  const client = new ChatClient({ "magnetic-music-419821", 
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDExFFyNDlLDxvp\neuEde6BBvzKA042wbkUvEUezmhJY29bZjVOWNlidpwyo8Xr9psX4Kwb0fq7KbvB5\nC1lQhvrrPzTrNZfLtbaf0qVM+HVQIGbnEEMtHMGNTylJvgqIrrakMrPSAbAyNHu4\nLdDxuKTXirrKXpsnlkD8S2H/S8p3XvKh5ZKFRJ8cQ+wi2baQOZjQ7I+jqbBrWgpi\nRESlVMEIqEi7zbWfSUvLwEF+p64p+6EGwR5vwjVfZ2mOXyzEgd4LPTW4QOazEmYu\nM2m/tEJgPzKR4GRTzm0F3NNYMYkYVbLt/HLsEq8q5KRH3pAAAXsFhmZu2iN2hBIT\nqbNGfO1FAgMBAAECggEAEtRUlPCxcODbw26KX1dmwRPqYdCc1P7gaP4m1eWPDujO\nuRfgoVXHCiMjv4EIS4CrnjGD417CHEYchgDThbS9C0kLp9yDj69ucAHo5qI6G7ZW\nEpOIUidX0E18fn2MpYLOoIznj1exBETod/oObitEvwmcEWSXRWUIB/ywvo0CrYSC\nA8JM2Xy0+AA4Oy/gEUIaPPQq1yMAwlAhtsg/o9LAbPg55MdvpjSfgDM74KJDfGi7\nmRvcrK8FEQMvMBmuLL53erUtHKddVCwheVd0Kj0H4u53DDP21QfVgzYnSq65oWvG\nSsr5u/M8+lUQsvVAG5BC1QeVXtIarGnHQ1npPUCMiwKBgQDrQIw76avIUkEIV9E9\nhzbojY53Ex3OCzFELr0V6pq6F42FB36WV9M9kOgxlDAzNxPVZXhxgPj+IPmnURC1\n2N7jzyQ0UQpj5XC8DqkIdslTfM2KVmK+HeP++mkmmFI5L/c6Y4ubtPS5TuCWQgNf\nPNfiJ9quqqiuxh6Q7wfHinjYkwKBgQDWHtyHK98cmj6j5NOkUaRayN8yP4akqfct\nZY3Roy2eNcw2d+ctlKPOUEj8gvaBg4UyCEsx3B+e4iqPwSOC18WqPd3yaK7zKFrL\nuAZo+LMBVycz/eTCEfeiG7Ywr2FpafmeDR0eXerLxYXB+ZzGT/7SjXF+J0ikPj8b\nQIvFw/wBxwKBgQClzOdI7oZYd8hHxgS9VYfYXLQUrg9qgS7mu/4d7SvBjgn6wO5x\nrVI+6NsM3kEeR2oeExbRADH8gWcSiiq5zzA/5GTCzn8BKtrKX5a4VWfNBH+kSP/s\nuApRUVE8l0wT6/9VUoU5Z063L6VPoRTZUXthc+9G/RZHn3A5e43DD4/eKwKBgQC3\nAd2esoKZYcQUNKonkZgV+AW8XstnxdV7uYbDHOMKjBSkoUq3jImM9tXK7OxfudeH\n8crDLM7h75BNGdiOJnnNjd87JvoQ3fbsk7b21Um55ZGeQGza6pxqs6C+b8ekX214\nBuFSaRcbXxF5vyyd2xWDRF0yY8UUjBdH5Z0RRPcJVQKBgDt0J21syollGB/Wq0CP\nF/c3fotkz5DAfnrOB4MBZMTsJeiGRtaUlXYNub4p0HzMlBCctZYqa7mxaoSxnkKH\noUNe07wkWlot/Ahr3ON+6nP3DA2LW1b185ejVTRgpZax2B69oQRcrC/k5T6JXV42\nEgQ4T1WKhZSc1veLvKtJrpHP\n-----END PRIVATE KEY-----\n"
 });

  const sendMessage = async () => {
    const response = await client.detectIntent(inputValue);
    const newMessages = [...messages, { text: inputValue, from: "user" }, { text: response.fulfillmentText, from: "bot" }];
    setMessages(newMessages);
    setInputValue("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
