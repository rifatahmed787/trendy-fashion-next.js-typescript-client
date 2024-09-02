"use client"
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/UI/Tab/Tab';
import MyOrder from './MyOrder';
import RecievedOrder from './RecievedOrder';
import ShipOrder from './ShipOrder';
import PaidOrder from './PaidOrder';


const OrderTabs = () => {
    return (
        <div className='mt-5 lg:mt-0'>
            <Tabs defaultValue='all'>
                <TabsList className='border'>
                    <TabsTrigger value='all'>All</TabsTrigger>
                    <TabsTrigger value='pay'>Pay</TabsTrigger>
                    <TabsTrigger value='ship'>Ship</TabsTrigger>
                    <TabsTrigger value='recieve'>Recieved</TabsTrigger>
                </TabsList>
                <TabsContent value='all'>
                    <MyOrder/>
                </TabsContent>
                <TabsContent value='pay'>
                    <PaidOrder/>
                </TabsContent>
                <TabsContent value='ship'>
                    <ShipOrder/>
                </TabsContent>
                <TabsContent value='recieve'>
                    <RecievedOrder/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default OrderTabs;
