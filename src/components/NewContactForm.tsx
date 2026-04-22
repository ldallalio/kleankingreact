import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageBar, MessageBarType } from "@fluentui/react";
import { serviceTitles } from "../common/interfaces";

const services = Object.values(serviceTitles);
const FORM_ENDPOINT = "https://formsubmit.co/ajax/kleankingcarpet@att.net";

type Props = {};

interface IFormInput {
	name: string;
	email: string;
	service: string;
	message: string;
	phone: string;
	website?: string;
}

export const NewContactForm: React.FC<Props> = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			service: "",
			message: "",
			website: "",
		},
	});
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const onSubmit = async (data: IFormInput) => {
		setIsSubmitting(true);
		setIsSuccess(false);
		setIsError(false);

		try {
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("phone", data.phone);
			formData.append("service", data.service);
			formData.append("message", data.message);
			formData.append("_replyto", data.email);
			formData.append("_subject", "New Klean King website lead");
			formData.append("_template", "table");
			formData.append("_honey", data.website ?? "");

			if (typeof window !== "undefined") {
				formData.append("_url", window.location.href);
			}

			const response = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
			});

			if (!response.ok) {
				throw new Error("Form submission failed");
			}

			reset();
			setIsSuccess(true);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div id="contactus" className="newContactFormCard">
			<h2 className="newContactFormTitle">Contact Us</h2>
			<p className="newContactFormIntro">
				Please fill out the form for a free estimate or any questions. We will
				get back to you within the next business day.
			</p>
			<form className="newContactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="newContactFormGrid">
					<div className="newContactField">
						<label className="newContactLabel" htmlFor="contact-name">
							Name
						</label>
						<input
							id="contact-name"
							className="newContactInput"
							type="text"
							placeholder="Your name"
							autoComplete="name"
							{...register("name", {
								required: "Name is required.",
							})}
						/>
						{errors.name && (
							<span className="newContactError">{errors.name.message}</span>
						)}
					</div>

					<div className="newContactField">
						<label className="newContactLabel" htmlFor="contact-email">
							Email
						</label>
						<input
							id="contact-email"
							className="newContactInput"
							type="email"
							placeholder="you@example.com"
							autoComplete="email"
							{...register("email", {
								required: "Email is required.",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Enter a valid email address.",
								},
							})}
						/>
						{errors.email && (
							<span className="newContactError">{errors.email.message}</span>
						)}
					</div>

					<div className="newContactField">
						<label className="newContactLabel" htmlFor="contact-phone">
							Phone
						</label>
						<input
							id="contact-phone"
							className="newContactInput"
							type="tel"
							placeholder="318-555-1234"
							autoComplete="tel"
							{...register("phone", {
								required: "Phone number is required.",
							})}
						/>
						{errors.phone && (
							<span className="newContactError">{errors.phone.message}</span>
						)}
					</div>

					<div className="newContactField">
						<label className="newContactLabel" htmlFor="contact-service">
							Service
						</label>
						<select
							id="contact-service"
							className="newContactSelect"
							defaultValue=""
							{...register("service", {
								required: "Please choose a service.",
							})}
						>
							<option value="" disabled>
								Select a service
							</option>
							{services.map((service) => (
								<option key={service} value={service}>
									{service}
								</option>
							))}
						</select>
						{errors.service && (
							<span className="newContactError">{errors.service.message}</span>
						)}
					</div>
				</div>

				<div className="newContactField">
					<label className="newContactLabel" htmlFor="contact-message">
						Message
					</label>
					<textarea
						id="contact-message"
						className="newContactTextarea"
						placeholder="Tell us what you need cleaned and any timing details."
						rows={6}
						{...register("message", {
							required: "Message is required.",
						})}
					/>
					{errors.message && (
						<span className="newContactError">{errors.message.message}</span>
					)}
				</div>

				<input
					className="newContactHiddenField"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
					{...register("website")}
				/>

				{isSuccess && (
					<MessageBar messageBarType={MessageBarType.success}>
						Thanks. Your message has been sent to Klean King.
					</MessageBar>
				)}
				{isError && (
					<MessageBar messageBarType={MessageBarType.error}>
						Your message could not be sent. Please call 318-387-9000 or email
						{" "}
						kleankingcarpet@att.net.
					</MessageBar>
				)}

				<button className="newContactSubmit" type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Sending..." : "Request Free Estimate"}
				</button>
			</form>
		</div>
	);
};
