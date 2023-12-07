import styled from '@emotion/styled'
import { Box, Grid, Hidden, TextField, Typography } from '@mui/material'
import React from 'react'
import { ButtonStyle } from '../custom-component/Button'
import { Bell, DataIcon, Eye } from '../custom-component/Icon'
// import Frame from '../assets/Frame.png'
import Cohorts from '../assets/Cohorts.png'
import SilderComponent from '../component/SilderComponent'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import SilderComponentSecond from '../component/SilderComponentSecond'


const RootContainer = styled(Box)({
    background: "#19191A",
    height: '100vh',
    "& .main-grid": {
        height: '100%',
        // overflow: "hidden"
    },
    "& .hello-world1": {
        background: "#19191A",
        height: '100%',
        width: '100%',
        position: "relative",
    },
    "& .hello-world2": {
        padding: '30px 0 0 60px',
    },
    "& .hello-world3": {
        padding: '0 60px',
        marginTop: 30
    },
    "& .hello-world5": {
        padding: '0 0 0 60px',
        marginTop: 40,
        marginBottom: 55
    },
    "& .hello-world4": {
        boxShadow: '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',
        background: "#FFF",
        height: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
    },
    "& .hello-world": {
        background: 'radial-gradient(92.19% 89.74% at 12.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    "& .text-1": {
        color: '#B0B1B3',
        fontFamily: "Inter",
        fontSize: 39,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: "120%",
        minWidth: 340,
        maxWidth: 230,
        "@media (max-width: 1225px)": {
            fontSize: 25,
            minWidth: 230,
            maxWidth: 230,
        },
        "@media (max-width: 500px)": {
            minWidth: "fit-content",
            maxWidth: "fit-content",
            fontSize: 25,
        }
    },
    "& .login-text-5": {
        color: '#19191A',
        fontFamily: "Inter",
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: "120%",
        textAlign: "center",
        marginTop: 10
    },
    "& .first-grid-text-1": {
        color: '#F2F2F2',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Inter',
        fontSize: 31,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '120%',
        minWidth: 200,
        // maxWidth: 350,
        maxWidth: 500,
        margin: "16px 0",
        "@media (max-width: 1225px)": {
            fontSize: 24,
        }
    },
    "& .first-grid-text-3": {
        color: '#F2F2F2',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Inter',
        fontSize: 31,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '120%',
        borderBottom: "1px solid rgba(229, 229, 230, 0.50)",
        paddingBottom: 20,
        "@media (max-width: 1225px)": {
            fontSize: 24,
        }
    },
    "& .first-grid-text-2": {
        color: '#F2F2F2',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '120%',
        minWidth: 200,
        // maxWidth: 330,
        maxWidth: 500,
        "@media (max-width: 1225px)": {
            fontSize: 14,
        }
    },
    "& .card-main-container": {
        position: 'relative',
        left: 0,
        display: 'flex',
        padding: "50px 0"
    },
    "& .overlay": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    "& .card-main-container-2": {
    },
    "& .card-main-container-3": {
        position: 'relative',
        left: 50
    },
    "& .dataIcon-container": {
        position: 'relative',
        bottom: 10,
    },
    "& .images-style": {
        width: 335,
        height: 306,
        "@media (max-width: 1300px)": {
            width: "100%",
            height: "fit-content",
        }
    },
    "& .login-continer": {
        padding: "0 30px",
        "@media (max-width: 500px)": {
            padding: "0 10px",
        }
    },
    "& .error": {
        color: "#FF0000",
        marginTop: 5
    }

})

const CssTextField = styled(TextField)({
    borderRadius: 8,
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
    '& label.Mui-focused': {
        color: '#A0AAB4',
        boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
        borderRadius: 8,
        boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            borderRadius: 8,
            boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
            borderRadius: 8,
            boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            borderRadius: 8,
            boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)'
        },
    },
});








const Home = () => {
    const initialValues = {
        email: '',
    };
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Handle form submission logic here
        console.log(values);
        window.open('https://app.loch.one/welcome', '_blank');
        setSubmitting(false);
        resetForm()
    };

    const validationSchema = Yup.object({
        email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email').required('Email is required'),
    });
    return (
        <RootContainer>
            <Grid container className='main-grid'>
                <Hidden mdDown>
                    <Grid item xs={7}>
                        <Box className="hello-world1">
                            <Box className="hello-world">
                                <Box className="hello-world2">
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={6}>
                                            <Box>
                                                <Bell />
                                                <Typography className='first-grid-text-1'>Get notified when a highly correlated whale makes a move</Typography>
                                                <Typography className='first-grid-text-2'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box className="card-main-container">
                                                <SilderComponentSecond />
                                                <Box className="overlay">

                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="hello-world3">
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={6}>
                                            <Box className="card-main-container-2">
                                                <img src={Cohorts} alt='Cohorts' className='images-style' />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box sx={{ textAlign: "end" }}>
                                                <Eye />
                                                <Typography className='first-grid-text-1'>Watch what the whales are doing</Typography>
                                                <Typography className='first-grid-text-2'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="hello-world3">
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={12}>
                                            <Box sx={{ textAlign: "end" }}>
                                                <Typography className='first-grid-text-3'>Testimonials</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box className="hello-world5">
                                    <Grid container alignItems={"end"}>
                                        <Grid item xs={1}>
                                            <Box className="dataIcon-container">
                                                <DataIcon />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box className="card-main-container-3">
                                                <SilderComponent />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Box>

                        </Box>
                    </Grid>
                </Hidden>
                <Grid container item sm={12} md={5} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="hello-world4">
                            <Grid container item xs={12} sm={10} md={10} lg={8} spacing={3}>
                                <Grid item xs={12}>
                                    <Box className="login-continer">
                                        <Typography className='text-1'>
                                            Sign up for exclusive access.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className="login-continer">
                                        <Field
                                            name="email"
                                            type="email"
                                            as={CssTextField}
                                            label="Your email address"
                                            fullWidth
                                        />
                                        <Box className="error">
                                            <ErrorMessage name="email" component="div" />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className="login-continer">
                                        <ButtonStyle type='submit' fullWidth>Get started</ButtonStyle>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='login-text-5'>
                                        You’ll receive an email with an invite link to join.
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Form>
                    </Formik>

                </Grid>
            </Grid>
        </RootContainer>
    )
}

export default Home