import { IService } from '@/Types/service';
import React from 'react';

interface IServiceProps{
    service_details:IService
}

const HomeServiceDetails: React.FC<IServiceProps> = ({service_details}) => {
    console.log(service_details)
    return (
        <div className='mt-72'>
            <p className='text-black text-4xl'>{service_details.value}</p>
        </div>
    );
};

export default HomeServiceDetails;