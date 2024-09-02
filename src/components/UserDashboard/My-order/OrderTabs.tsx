"use client"
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/UI/Tab/Tab';


const OrderTabs = () => {
    return (
        <div>
            <Tabs defaultValue='all'>
                <TabsList className='border'>
                    <TabsTrigger value='all'>All</TabsTrigger>
                    <TabsTrigger value='pay'>Pay</TabsTrigger>
                    <TabsTrigger value='ship'>Ship</TabsTrigger>
                    <TabsTrigger value='recieve'>Recieve</TabsTrigger>
                </TabsList>
                <TabsContent value='all'>
                    {/* <DetailsVideo product_details={product_details}/> */}
                </TabsContent>
                <TabsContent value='pay'>
                    {/* <ReviewSection product_details={product_details}/> */}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default OrderTabs;
