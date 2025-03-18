import React, { Suspense } from 'react';
import Component1 from './_component/Component1';
import Component2 from './_component/Component2';
import CardLoading from './_component/CardLoading';
import ErrorBoundrary from '@/components/ErrorBoundrary';
import CardError from './_component/CardError';

const SuspensePage = () => {
    return (
        <div className='flex gap-2'>
            <ErrorBoundrary fallback={<CardError/>}>
            <Suspense fallback={<CardLoading/>}>
            <Component1/>
            </Suspense>
            </ErrorBoundrary>
          
           <Component2/>
        </div>
    );
};

export default SuspensePage;