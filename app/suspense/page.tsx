import React, { Suspense } from 'react';
import Component1 from './_component/Component1';
import Component2 from './_component/Component2';
import CardLoading from './_component/CardLoading';

const SuspensePage = () => {
    return (
        <div className='flex gap-2'>
            <Suspense fallback={<CardLoading/>}>
            <Component1/>
            </Suspense>
          
           <Component2/>
        </div>
    );
};

export default SuspensePage;