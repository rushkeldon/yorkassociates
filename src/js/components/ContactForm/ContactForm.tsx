// noinspection LanguageDetectionInspection

import React, { useState, ChangeEvent } from 'react';
import './ContactForm.css';

/*
  [ 1569968963, "name", null, 0, [ [ 1729940387, null, 1 ] ] ],
  [ 1618368607, "email", null, 0, [ [ 510511568, null, 1 ] ] ],
  [ 96853794, "phone", null, 0, [ [ 1464490965, null, 0 ] ] ],
  [ 1218763067, "website", null, 0, [ [ 14722974, null, 0 ] ] ],
  [ 1885018169, "msg", null, 1, [ [ 1480260719, null, 1 ] ] ]
 */

export default function ContactForm() {
  const [ state, setState ] = useState<any>( {} );

  return <>
    <div className="contact-form">
      <h2>General Inquiries</h2>
      <form
        method="post"
        action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSemK-fhiB3smKqi7vRExlAifMQtEXrt0V9UBqz647kYRfARFw/formResponse'
        onSubmit={ postToGoogle }
      >
        <fieldset>
          <input
            placeholder="name"
            name="entry.1729940387"
            type="text"
            tabIndex={ 1 }
            required={ true }
            autoFocus={ true }
            data-field="name"
            onChange={ inputChanged }
          />
          <input
            placeholder="email"
            name="entry.510511568"
            type="email"
            tabIndex={ 2 }
            required={ true }
            data-field="email"
            onChange={ inputChanged }
          />
          <textarea
            placeholder="your message...."
            name="entry.1480260719"
            tabIndex={ 5 }
            required={ true }
            data-field="msg"
            onChange={ inputChanged as any }
          />
          <button
            name="submit"
            type="submit"
          >Submit
          </button>
        </fieldset>
      </form>
    </div>
  </>;

  function inputChanged( e : ChangeEvent<HTMLInputElement> ) : void {
    state[ e?.target?.getAttribute( 'data-field' ) || 'dustbin' ] = e?.target?.value;
  }

  function postToGoogle() {

  }
}
