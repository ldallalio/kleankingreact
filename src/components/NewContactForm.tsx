import React, { useState } from "react";
import { useForm, Controller, FieldError } from "react-hook-form";
import {
	IDropdownOption,
	MessageBar,
	MessageBarType,
} from "@fluentui/react";
import { Helmet } from "react-helmet-async";
import { serviceTitles } from "../common/interfaces";

type Props = {};

const services: IDropdownOption[] = [
	{ key: serviceTitles.AIR, text: serviceTitles.AIR },
	{ key: serviceTitles.CARPET, text: serviceTitles.CARPET },
	{ key: serviceTitles.TILE, text: serviceTitles.TILE },
	{ key: serviceTitles.UPHOLSTERY, text: serviceTitles.UPHOLSTERY },
	{ key: serviceTitles.HARDWOOD, text: serviceTitles.HARDWOOD },
	{ key: serviceTitles.WATER, text: serviceTitles.WATER },
	{ key: serviceTitles.DRYER, text: serviceTitles.DRYER },
	{ key: serviceTitles.MOLD, text: serviceTitles.MOLD },
	{ key: serviceTitles.CRIME, text: serviceTitles.CRIME },
];

interface IFormInput {
	name: string;
	email: string;
	service: string;
	message: string;
	phone: string;
}

export const NewContactForm: React.FC<Props> = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const onSubmit = async (data: IFormInput) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("https://formspree.io/f/xeqdoabd", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				setIsSuccess(true);
				setIsError(false);
			} else {
				throw new Error("Form submission failed");
			}
		} catch (error) {
			setIsError(true);
			setIsSuccess(false);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div
			id='contactus'
			className="contactFormContainer"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				alignSelf: "center",
				gap: "20px",
				padding: "20px",
				borderRadius: "10px",
				width: "50%%",
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
				// maxWidth: "500px",
				// minWidth: "300px",
				// marginTop: '32px'
			}}
		>
			<Helmet>
				<title>Contact Us - Klean King</title>
				<meta
					name="description"
					content="Contact Klean King for a free estimate on our cleaning services. We offer a wide range of cleaning services for residential and commercial properties."
				/>
				<meta
					name="keywords"
					content="cleaning services, contact, Klean King, free estimate"
				/>
				<meta name="author" content="Klean King" />
			</Helmet>
			<h1
				style={{
					textAlign: "center",
					color: "rgb(4, 12, 122)",
					margin: 0,
				}}
			>
				Contact Us
			</h1>
			<p
				style={{
					textAlign: "center",
					color: "rgb(4, 12, 122)",
					margin: 0,
					fontSize: "1.2rem",
					width: "70%",
				}}
			>
				Please fill out the form for a FREE ESTIMATE or to contact us for any
				questions or concerns. We will get back to you within the next business
				day.
			</p>


			<iframe  width='550px' height='760px' style={{ border: 'none', overflow: 'hidden' }} src='https://www.servicemonster.net/forms/Form/bGVJRzlzbkxzSkhCNkhnRmdFJTJmU0dJTjdZMGVuMVhHY3NXaUc1cHowczFFJTNk?embed=true'></iframe>
			{isSuccess && (
				<MessageBar messageBarType={MessageBarType.success}>
					Form submitted successfully
				</MessageBar>
			)}
			{isError && (
				<MessageBar messageBarType={MessageBarType.error}>
					Form submission failed
				</MessageBar>
			)}
		</div>
	);
};
