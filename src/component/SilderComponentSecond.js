import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import CardComponent from './CardComponent';
import CardComponentThired from './CardComponentThired';
import CardComponentSecond from './CardComponentSecond';
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true

};

const RootContainer = styled(Box)({
    "& .slider-container": {
        borderRadius: 12,
        background: '#ffffffed',
        padding: 20,
        boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
    },
    "& .slider-text-1": {
        color: '#19191A',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '120%'
    },
    "& .slider-text-2": {
        color: '#96979A',
        fontFamily: 'Inter',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '120%'
    },
    "& .slider-text-3": {
        color: '#1D2129',
        fontFamily: 'Inter',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '120%'
    },
    "& .text-container": {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 20
    }
})


const SilderComponentSecond = () => {
    return (
        <RootContainer>
            <Slider {...settings} arrows={false} autoplay>
                <Box sx={{ width: 189.7 }}>
                    <Box sx={{ padding: "7px" }}>
                        <CardComponent />
                    </Box>
                </Box>
                <Box sx={{ width: 189.7 }}>
                    <Box sx={{ padding: "7px" }}>
                        <CardComponentSecond />
                    </Box>
                </Box>
                <Box sx={{ width: 189.7 }}>
                    <Box sx={{ padding: "7px" }}>
                        <CardComponentThired />
                    </Box>
                </Box>
            </Slider>
        </RootContainer>
    )
}

export default SilderComponentSecond