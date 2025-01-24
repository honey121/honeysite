import React, { useState } from 'react';
import './Login.css';
import { SCREEN_NAME } from '../../constants/screenNames';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLanguage } from '../../../context/LanguageContext';
import axios from 'axios';
import { ACCESS_TOKEN, PHONE_ID } from '../../constants/actionTypes';

export default function Login(props) {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [otpSentMessage, setOtpSentMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState(null); // Store generated OTP for verification
    const [isLoading, setIsLoading] = useState(false); // Loader state

    // Access language and translations
    const { t, language, changeLanguage } = useLanguage();

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit random OTP
    };

    const sendOtp = async (phoneNumber) => {
        const accessToken = ACCESS_TOKEN;
        const phoneNumberId = PHONE_ID; // Replace with your phone number ID
        const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;
        
        const otp = generateOtp();
        setGeneratedOtp(otp); // Save OTP for verification

        const data = {
            "messaging_product": "whatsapp",
            "category": "AUTHENTICATION",
            "to": phoneNumber,
            "type": "template",
            "template": {
              "name": "otp",
              "language": {
                "code": "es"
              },
              "components": [
                {
                  "type": "body",
                  "parameters": [
                    {
                      "type": "text",
                      "text": otp
                    }
                  ]
                },
                {
                  "type": "button",
                  "sub_type": "url",
                  "index": "0",
                  "parameters": [
                    {
                      "type": "text",
                      "text": otp
                    }
                  ]
                }
              ]
            }
          }
          ;
          setIsLoading(true); // Start loader
        try {
            await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            setOtpSentMessage('OTP sent successfully!');
            setErrorMessage('');
            setIsCodeSent(true);
        } catch (error) {
            console.error('Error sending OTP:', error.response?.data || error.message);
            setErrorMessage('Failed to send OTP. Please try again.');
            setOtpSentMessage('');
        } finally {
            setIsLoading(false); // Stop loader
        }
    };

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        if (!phone) {
            setErrorMessage('Please enter a valid phone number.');
            return;
        }
        setErrorMessage('');
        const formattedPhone = phone.replace(/\D/g, ''); // Ensure phone is numeric
        console.log('Phone Number:', formattedPhone);
        // Call sendOtp function
        await sendOtp(formattedPhone);
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        console.log('Verification Code:', code);
        // Add OTP verification logic here if needed
        if (code === generatedOtp) {
            navigate(`/${SCREEN_NAME.DASHBOARD}`);
        } else {
            setErrorMessage('Invalid OTP. Please try again.');
        }
    };

    const handleRegisterClick = () => {
        navigate(`/${SCREEN_NAME.REGISTER}`);
    };

    return (
        <div className="login-container">
            {/* Global Language Selector */}
            <div className="language-selector">
                <label htmlFor="language">Select Language: </label>
                <select id="language" value={language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>

            {/* Login Card */}
            <div className="login-card">
                <h3 className="login-title">{t.login.title}</h3>
                {!isCodeSent ? (
                    <form onSubmit={handlePhoneSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                {t.login.phoneNumber}
                            </label>
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={handlePhoneChange}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                                containerStyle={{ width: '100%' }}
                                inputStyle={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '1rem',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>
                        {otpSentMessage && <p className="success-message">{otpSentMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="login-button">
                            {isLoading ? (
                                <span className="loader"></span> // Loader element
                            ) : (
                                t.login.button
                            )}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleCodeSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="code" className="form-label">
                                {t.login.verificationCode}
                            </label>
                            <input
                                type="text"
                                id="code"
                                value={code}
                                onChange={handleCodeChange}
                                className="form-input"
                                placeholder="Enter verification code"
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            {t.login.verifyButton}
                        </button>
                    </form>
                )}
                <div className="register-link">
                    <p>
                        {t.login.noAccount}{' '}
                        <span onClick={handleRegisterClick} className="register-text">
                            {t.login.register}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
