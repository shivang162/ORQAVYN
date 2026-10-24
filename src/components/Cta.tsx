import { useCallback, useRef } from 'react';
import content from '../content';
import { submitLead } from '../lib/submitLead';

export default function Cta() {
  const { cta, form: f, contact } = content;
  const formRef = useRef<HTMLFormElement>(null);
  const okRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current!;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data: Record<string, string> = {};
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input,select,textarea');
    inputs.forEach((el, i) => {
      const name = el.name || `field_${i}`;
      data[name] = el.value;
    });

    await submitLead(data);

    if (okRef.current) okRef.current.hidden = false;
    if (btnRef.current) btnRef.current.hidden = true;
  }, []);

  return (
    <section className="sec cta" id="contact">
      <h2 className="giant ls giant3">{cta.heading}</h2>
      <p className="sub rv3">{cta.sub}</p>
      <div className="btns rv3">
        <a className="pill solid mag" href="#form">{cta.cta1}</a>
        <a className="pill" href="#form">{cta.cta2}</a>
      </div>
      <p className="trust rv3">{cta.trust}</p>

      <div className="formwrap" id="form">
        <div>
          <div className="lab">{f.formLabel}</div>
          <h2 className="ls">{f.heading}</h2>
          <p className="sub">{f.sub}</p>
          <dl>
            <dt>{contact.desk.label}</dt>
            <dd>{contact.desk.value}</dd>
            <dt>{contact.whatsapp.label}</dt>
            <dd>{contact.whatsapp.value}</dd>
            <dt>{contact.hub.label}</dt>
            <dd>{contact.hub.value}</dd>
          </dl>
        </div>
        <form id="f" noValidate ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>{f.fields.name}</span>
            <input name="name" required placeholder=" " />
          </label>
          <label>
            <span>{f.fields.email}</span>
            <input name="email" type="email" required placeholder=" " autoComplete="email" />
          </label>
          <label>
            <span>{f.fields.phone}</span>
            <input name="phone" type="tel" required placeholder=" " autoComplete="tel" />
          </label>
          <label>
            <span>{f.fields.business}</span>
            <input name="business" required placeholder=" " />
          </label>
          <label>
            <span>{f.fields.category}</span>
            <select name="category">
              <option value=""></option>
              {f.categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label>
            <span>{f.fields.bottleneck}</span>
            <textarea name="bottleneck" rows={3} placeholder=" "></textarea>
          </label>
          <button className="pill solid mag" type="submit" ref={btnRef}>{f.submit}</button>
          <small>{f.submitNote}</small>
          <p className="ok" id="ok" hidden ref={okRef}>{f.confirmation}</p>
        </form>
      </div>
    </section>
  );
}
