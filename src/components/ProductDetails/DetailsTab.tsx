import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../UI/Tab/Tab';
import DetailsVideo from './DetailsVideo';
import { IProduct } from '@/Types/products';
import ReviewSection from './ReviewSection';

const DetailsTab = ({
    product_details,
  }: {
    product_details: IProduct | undefined;
  }) => {
    return (
        <div>
            <Tabs defaultValue='video'>
                <TabsList className='border'>
                    <TabsTrigger value='video'>Video</TabsTrigger>
                    <TabsTrigger value='review'>Review</TabsTrigger>
                </TabsList>
                <TabsContent value='video'>
                    <DetailsVideo product_details={product_details}/>
                </TabsContent>
                <TabsContent value='review'>
                    <ReviewSection product_details={product_details}/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default DetailsTab;
