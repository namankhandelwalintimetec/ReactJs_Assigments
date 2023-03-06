import FormElements from "../FormElements/FormElements";
import { Form } from "./FormContainerStyle";
const FormCointainer=()=>{
	return (
    <>
      <Form>
        <div id="form-div">
          <h3 className="contact-head">Contact us</h3>
          <form>
            <FormElements label="Your name" inputTagType="name" />
            <FormElements label="Your email address" inputTagType="email" />
            <FormElements label="Your message" inputTagType="text" />
            <button type="submit" className="submit-button btn-primary ">
              Send Message
            </button>
          </form>
        </div>
      </Form>
    </>
  );
}

export default FormCointainer;