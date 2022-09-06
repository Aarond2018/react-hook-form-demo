import { useForm } from "react-hook-form";
import "./App.css";

function App() {
	const { register, formState: { errors }, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);
	const onError = (errors) => console.log(errors);

	return (
		<div className="App">
			<h2>Reack Hook Form demo</h2>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						{...register("name", {
							required: true,
							maxLength: {
								value: 10,
								message: "Maximum length exceeded",
							},
						})}
					/>
          {errors.name?.type === 'required' && <p className="error">First name is required</p>}
          {errors.name?.type === 'maxLength' && <p className="error">{errors.name.message}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							pattern: {
								value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
								message: "defaulted pattern",
							},
						})}
					/>
          {errors.email && <p className="error">{errors.email.message}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						{...register("age", {
							min: {
								value: 18,
								message: "You must be older than 18",
							},
						})}
					/>
          {errors.age && <p className="error">{errors.age.message}</p>}
				</div>
				<div className="form-radio">
					<p>Sex: </p>
					<input type="radio" value="male" {...register("sex")} />
					<label htmlFor="male">Male</label>

					<input type="radio" value="female" {...register("sex")} />
					<label htmlFor="female">Female</label>
				</div>
				<div className="form-group">
					<label>Employment Status</label>
					<select {...register("empStatus")}>
						<option value="student">Student</option>
						<option value="employed">Employed</option>
						<option value="unemployed">Uemployed</option>
					</select>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
