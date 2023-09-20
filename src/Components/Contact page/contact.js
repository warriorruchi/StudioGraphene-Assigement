
import { useForm, Controller } from 'react-hook-form';
import './contact.css'


function Contact() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log('Form Data:', data);
        const savedData = JSON.parse(localStorage.getItem('contactFormData')) || [];
        savedData.push(data);
        localStorage.setItem('contactFormData', JSON.stringify(savedData));
    };
    const initialValues = {
        name: '',
        email: '',
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={initialValues.name}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <input type="text" id="name" {...field} className="form-input" />
                            )}
                        />
                        {errors.name && <div className="error">{errors.name.message}</div>}
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={initialValues.email}
                            rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
                            render={({ field }) => (
                                <input type="text" id="email" {...field} className="form-input" />
                            )}
                        />
                        {errors.email && <div className="error">{errors.email.message}</div>}
                    </div>



                    <button type="submit" className="form-submit">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact;