import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

const data = [
    {
        name: "Jack F",
        information: "Ex Blackrock PM",
        des: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
        className: "slider-one",
    },
    {
        name: "Yash P",
        information: "Research, 3poch Crypto Fund",
        des: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
        className: "slider-two",
    },
    {
        name: "Shiv S",
        information: "Co-Founder Magik Labs",
        des: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
        className: "slider-three"
    }
]

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
        marginBottom:20
    }
})


const SilderComponent = () => {
    return (
        <RootContainer>
            <Slider {...settings} arrows={false} autoplay>
                {data.map((obj, index) => {
                    return (
                        <Box>
                            <Box sx={{ padding: "10px" }}>
                                <Box className="slider-container">
                                    <Box className="text-container">
                                        <Typography className='slider-text-1'>{obj.name}</Typography>
                                        <Typography className='slider-text-2'>{obj.information}</Typography>
                                    </Box>
                                    <Typography className='slider-text-3'>{obj.des.length >= 70 ? obj.des.slice(0, 70) + "..." : obj.des}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Slider>
        </RootContainer>
    )
}

export default SilderComponent