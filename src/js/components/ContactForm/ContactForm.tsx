import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return <>
    <div className="contact-form">
      <h2>General Inquiries</h2>
      <form>
        <fieldset>
          <input
            placeholder="Name"
            type="text"
            tabIndex={ 1 }
            required={ true }
            autoFocus={ true }
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Email Address"
            type="email"
            tabIndex={ 2 }
            required={ true }
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Phone Number (optional)"
            type="tel"
            tabIndex={ 3 }
            required={ false }
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Web Site (optional)"
            type="url"
            tabIndex={ 4 }
            required={ false }
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            tabIndex={ 5 }
            required={ true }
          />
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
          >Submit
          </button>
        </fieldset>
      </form>
    </div>
  </>;
}
