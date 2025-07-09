import React from 'react'
import SocialHeader from '../components/SocialHeader'
import Header from '../components/Nav/Header'
import Footer from '../components/Nav/Footer'
import Sidebar from '../components/Nav/Sidebar'

type Props = {}

const TextingPrivacy = (props: Props) => {
    return (
        <>
            <SocialHeader />
            <Header />
            <div className='servicePageContent'>
                <div className='servicePageText'>
                    <h1>Texting Privacy Policy</h1>
                    <h2>COMMUNICATION VIA SMS AND MOBILE MESSAGING</h2>
                    <p>
                        By providing your mobile phone number to Klean King Carpet & Air Ducts, you expressly consent to receive communications from us, including text messages (SMS or MMS) and phone calls, related to your use of our services, your account, transactional updates, or other service-related notifications. These communications may be sent via automated technology or manual dialing systems.
                    </p>
                    <p>
                        Message frequency may vary based on your interaction with Klean King Carpet & Air Ducts. Standard message and data rates may apply. Please contact your mobile carrier for details.
                    </p>
                    <h2>OPTING OUT</h2>
                    <p>
                        You may opt out of receiving SMS messages from Klean King Carpet & Air Ducts ,at any time by replying “STOP” to any SMS you receive. Upon sending “STOP,” we will send a confirmation that you have been unsubscribed. After this, you will no longer receive SMS messages unless you opt in again.
                    </p>
                    <p>
                        You may also request to opt out by contacting us directly at kleankingcarpet@att.net
                    </p>
                    <h2>USE AND PROTECTION OF MOBILE INFORMATION</h2>
                    <p>
                        Your mobile number and opt-in status will not be shared, sold, rented, or used for third-party marketing purposes Klean King Carpet & Air Ducts,will only use your phone number in accordance with this Privacy Policy and for the specific services or communications you’ve consented to receive.
                    </p>
                    <h2>CONSENT AND ACCEPTABLE USE</h2>
                    <p>
                        Providing your mobile phone number constitutes your agreement to receive communications as described above. Use of our messaging services is subject to our Acceptable Use Policy, which outlines requirements around consent, content restrictions, sender identification, and opt-out handling.
                    </p>
                </div>
                <Sidebar />
            </div>
            <Footer />
        </>
    )
}

export default TextingPrivacy