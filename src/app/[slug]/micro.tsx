"use client"

import React, { lazy } from 'react';
const MicroWidget = lazy(async () => await import('sidebar/widget'));

const Widget = async () => {
    return (
        <MicroWidget />
    )
};

export default Widget;