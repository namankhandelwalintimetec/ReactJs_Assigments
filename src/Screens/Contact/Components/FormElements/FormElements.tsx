import { FormGroup } from "./FormStyle";

interface labelType {
  label: string;
  inputTagType: string
}

const FormElements = ({ label, inputTagType }: labelType) => {
  return (
    <>
      <FormGroup>
        <label htmlFor={inputTagType}>{label}</label>
        <div>
          <input type={inputTagType} id="Name" name="Name" required />
        </div>
      </FormGroup>
    </>
  );
};


export default FormElements;